//var ECGchart=undefined;
//var LVPchart=undefined;

require(["dijit/Dialog"]);

function loadChart(ecg,lvp,category,defaultEcgData,defaultLvpData){
	require(["dojo/ready"],function(ready){
		ready(function(){
			require([ "dojo/_base/declare", "dojo/dom-construct","dojox/charting/Chart", "dojox/charting/plot2d/StackedLines", "dojox/charting/plot2d/Grid", "dojox/charting/themes/Claro", "dojox/charting/axis2d/Default", "dojox/charting/plot2d/Indicator",
			"dojox/charting/themes/Tom"],
				function(declare, domConstruct, Chart, StackedLines, Grid, Claro, axis2dDefault, plot2dIndicator, tomTheme){
					ready(function(){
							var ECGchart;
							tomTheme.chart.fill="transparent";
							tomTheme.plotarea.fill = "transparent";
							tomTheme.chart.stroke = "transparent";
							var ecgDom = document.getElementById("rightECG");						
							ECGchart = new Chart(ecgDom); //html element (dom) the chart will be drawn
							ECGchart.setTheme(tomTheme);
							/* add the x-axis */
							ECGchart.addAxis("x", {type: "Invisible", 
								majorLabels: false,
								minorTicks: false,
								minorLabels: false,
								microTicks: false
							});
							/* add the y-axis */
							ECGchart.addAxis("y", {type: "Invisible",
								vertical: true,
							  majorLabels: true,
								majorTickStep: 200,
								minorTick: {color: "rgba(0,0,0,0)"},  
								majorTick: {color: "rgba(0,0,0,0)"},
								minorLabels: false,
								font: "normal normal normal 10pt Helvetica",
								fontColor: "rgba(0,0,0,0)",
								stroke: [0,0,0,0]		
							});
							ECGchart.addPlot("time", { type: plot2dIndicator,
								vertical: true,
								lineStroke: { color: "#00ccff"},
								labels: null,
								stroke: null,
								outline: null,
								fill: null,
								offset: { y: -7, x: -10 },
								values: 0.0});
							ecgIndicator = ECGchart.getPlot("time");

							var LVPchart;
							var lvpDom = document.getElementById("rightLVP");
							/* create the chart on the dom */
							LVPchart = new Chart(lvpDom);
							LVPchart.setTheme(tomTheme);
							/* add the x-axis */
							LVPchart.addAxis("x", {type: "Invisible",
								majorLabels: false,
								minorTicks: false,
								minorLabels: false,
								microTicks: false});
							/* add the y-axis */
							LVPchart.addAxis("y",{type: "Invisible",
								vertical: true,
								min: -40,
								max: 160,
								minorTicks: false,
								majorTickStep: 120,
								font: "normal normal normal 10pt Helvetica",
								titleFont: "normal normal normal 10pt Helvetica",
								title:"",
								titleFontColor:[120, 120, 120]
							});
							LVPchart.addPlot("time", { type: plot2dIndicator,
								vertical: true,
								lineStroke: { color: "#00ccff"},
								labels: null,
								stroke: null,
								outline: null,
								fill: null,
								offset: { y: -7, x: -10 },
								values: 0.0});
							lvpIndicator = LVPchart.getPlot("time");
													
							showECGChart(ecg.name,ecg.path,category,ECGchart,defaultEcgData);
							showLVPChart(lvp.name,lvp.path,category,LVPchart,defaultLvpData);
						});	
				});
		});		
	});
}


function showECGChart(axisName,ecgPath,category,ECGchart,defaultEcgData) {
	msg=ECGchart.parentElement==null
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = onECGLoaded(xmlhttp, category,axisName,ECGchart,defaultEcgData);
	xmlhttp.open("GET", ecgPath, true);
	xmlhttp.send();
}

function onECGLoaded(xmlhttp, category,axisName,ECGchart,defaultEcgData){
	return function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var viewData = JSON.parse(xmlhttp.responseText);
			var newViewData = rescaleXAxis(viewData);
			defaultEcgData=rescaleXAxis(defaultEcgData);
			showECGInternal(newViewData,category,axisName,ECGchart,defaultEcgData);
		}
	};
}

var showECGInternal = function(newViewData,category,axisName,ECGchart,defaultEcgData) {
	var colourName;
	var widthvar;

	if (category=="warning"){
		colourName = "rgba(255,255,0,1)";
		widthvar=3;
	}else if (category=="error"){
		colourName = "rgba(255,50,0,1)";
		widthvar = 3;
	}

	if(window.ecgDone!=true){
		if(category!='success'){
			ECGchart.addSeries(axisName,newViewData, { stroke: {color: colourName, width: widthvar}});
		}
		ECGchart.addSeries("Normal",defaultEcgData, { stroke: {color: "rgba(50,205,50,0.6)", width: 2}});

		ECGchart.render();
		ECGchart.resize('100%','100%');
	}
	ecgDone=true;
}


function showLVPChart(axisName,lvpPath,category,LVPchart,defaultLvpData) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = onLVPLoaded(xmlhttp, category,axisName,LVPchart,defaultLvpData);
	xmlhttp.open("GET", lvpPath, true);
	xmlhttp.send();
}

function onLVPLoaded(xmlhttp, category,axisName,LVPchart,defaultLvpData){
	return function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var viewData = JSON.parse(xmlhttp.responseText);
			var newViewData = rescaleXAxis(viewData);
			defaultLvpData=rescaleXAxis(defaultLvpData)
			showLVPInternal(newViewData,category,axisName,LVPchart,defaultLvpData);
		}
	};
}

var showLVPInternal = function(newViewData,category,axisName,LVPchart,defaultLvpData) {
	var colourName;
	var widthvar;

	if (category=="warning"){
		colourName = "rgba(255,255,0,1)";
		widthvar=3;
	}else if (category=="error"){
		colourName = "rgba(255,50,0,1)";
		widthvar = 3;
	}

	if(window.lvpDone!=true){
		if(category!='success'){
			LVPchart.addSeries(axisName,newViewData, { stroke: {color: colourName, width: widthvar}});
		}
		LVPchart.addSeries("Normal",defaultLvpData, { stroke: {color: "rgba(50,205,50,0.6)", width: 2}});

		LVPchart.render();
		LVPchart.resize('100%','100%');
	}
	lvpDone=true;
}


var rescaleXAxis = function(viewData) {
	var len = viewData.length;
	var max_x = viewData[len - 1].x;
	var min_x = viewData[0].x;
	for (var i = 0; i < len; i++) {
	    viewData[i].x = (viewData[i].x - min_x) / (max_x - min_x) * 100.0;
	}

	return viewData;
}
