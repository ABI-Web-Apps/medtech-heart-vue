//var ECGchart=undefined;
var LVPchart;

require(["dijit/Dialog"]);

function loadChart(ecgName,ecgPath,lvpName,lvpPath,category){

	require(["dojo/ready"], function(ready){
		ready(function(){
			require([ "dojo/_base/declare", "dojo/dom-construct","dojox/charting/Chart", "dojox/charting/plot2d/StackedLines", "dojox/charting/plot2d/Grid", "dojox/charting/themes/Claro", "dojox/charting/axis2d/Default", "dojox/charting/plot2d/Indicator",
			"dojox/charting/themes/Tom"],
				function(declare, domConstruct, Chart, StackedLines, Grid, Claro, axis2dDefault, plot2dIndicator, tomTheme){
					ready(function(){
							tomTheme.chart.fill="transparent";
							tomTheme.plotarea.fill = "transparent";
							tomTheme.chart.stroke = "transparent";
							let ECGchart;
							ECGchart = new Chart("rightECG"); //html element (dom) the chart will be drawn
							ECGchart.setTheme(tomTheme);
							/* add the x-axis */
							ECGchart.addAxis("x", {type: "Invisible", 
								majorLabels: false,
								minorTicks: false,
								minorLabels: false,
								microTicks: false
							});
							/* add the y-axis */
							ECGchart.addAxis("y", {
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

							/* create the chart on the dom */
							LVPchart = new Chart("rightLVP");
							LVPchart.setTheme(tomTheme);
							/* add the x-axis */
							LVPchart.addAxis("x", {type: "Invisible",
								majorLabels: false,
								minorTicks: false,
								minorLabels: false,
								microTicks: false});
							/* add the y-axis */
							LVPchart.addAxis("y",{
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

							//window.ECGchart=ECGchart

							if(category!="success"){
								/*showECGChart(ecgName,ecgPath,category)
								showLVPChart(lvpName,lvpPath,category)*/
								showECGChart(ecgName,ecgPath,category,ECGchart)
								showLVPChart(lvpName,lvpPath,category,LVPchart)
							}
							
							/*showECGChart("Normal","ECG/NormalECG.json","success")
							showLVPChart("Normal","LVP/NormalLVP.json","success")*/
							showECGChart("Normal","ECG/NormalECG.json","success",ECGchart)
							showLVPChart("Normal","LVP/NormalLVP.json","success",LVPchart)
						});	
				});
		});		
	});
}

/*
function showECGChart(axisName,ecgPath,category) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = onECGLoaded(xmlhttp, category,axisName);
	xmlhttp.open("GET", ecgPath, true);
	xmlhttp.send();
}

function onECGLoaded(xmlhttp, category,axisName){
	return function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var viewData = JSON.parse(xmlhttp.responseText);
			var newViewData = rescaleXAxis(viewData);
			showECGInternal(newViewData,category,axisName);
		}
	};
}

var showECGInternal = function(newViewData,category,axisName) {
	  ECGchart=window.ECGchart
		var colourName="rgba(50,205,50,0.6)";
		var widthvar=2;

		if (category=="warning"){
			colourName = "rgba(255,255,0,1)";
			widthvar=3;
		}else if (category=="error"){
			colourName = "rgba(255,50,0,1)";
			widthvar = 3;
		}

		ECGchart.addSeries(axisName,newViewData, { stroke: {color: colourName, width: widthvar}});
		ECGchart.render();
		ECGchart.resize('100%','100%');
}


function showLVPChart(axisName,lvpPath,category) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = onLVPLoaded(xmlhttp, category,axisName);
	xmlhttp.open("GET", lvpPath, true);
	xmlhttp.send();
}

function onLVPLoaded(xmlhttp, category,axisName){
	return function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var viewData = JSON.parse(xmlhttp.responseText);
			var newViewData = rescaleXAxis(viewData);
			showLVPInternal(newViewData,category,axisName);
		}
	};
}

var showLVPInternal = function(newViewData,category,axisName) {
		var colourName="rgba(50,205,50,0.6)";
		var widthvar=2;

		if (category=="warning"){
			colourName = "rgba(255,255,0,1)";
			widthvar=3;
		}else if (category=="error"){
			colourName = "rgba(255,50,0,1)";
			widthvar = 3;
		}

		LVPchart.addSeries(axisName,newViewData, { stroke: {color: colourName, width: widthvar}});
		LVPchart.render();
		LVPchart.resize('100%','100%');
}

*/

var rescaleXAxis = function(viewData) {
	var len = viewData.length;
	var max_x = viewData[len - 1].x;
	var min_x = viewData[0].x;
	for (var i = 0; i < len; i++) {
	    viewData[i].x = (viewData[i].x - min_x) / (max_x - min_x) * 100.0;
	}

	return viewData;
}


function showECGChart(axisName,ecgPath,category,ECGchart) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = onECGLoaded(xmlhttp, category,axisName,ECGchart);
	xmlhttp.open("GET", ecgPath, true);
	xmlhttp.send();
}

function onECGLoaded(xmlhttp, category,axisName,ECGchart){
	return function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var viewData = JSON.parse(xmlhttp.responseText);
			var newViewData = rescaleXAxis(viewData);
			showECGInternal(newViewData,category,axisName,ECGchart);
		}
	};
}

var showECGInternal = function(newViewData,category,axisName,ECGchart) {
		var colourName="rgba(50,205,50,0.6)";
		var widthvar=2;

		if (category=="warning"){
			colourName = "rgba(255,255,0,1)";
			widthvar=3;
		}else if (category=="error"){
			colourName = "rgba(255,50,0,1)";
			widthvar = 3;
		}

		ECGchart.addSeries(axisName,newViewData, { stroke: {color: colourName, width: widthvar}});
		ECGchart.render();
		ECGchart.resize('100%','100%');
}


function showLVPChart(axisName,lvpPath,category,LVPchart) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = onLVPLoaded(xmlhttp, category,axisName,LVPchart);
	xmlhttp.open("GET", lvpPath, true);
	xmlhttp.send();
}

function onLVPLoaded(xmlhttp, category,axisName,LVPchart){
	return function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var viewData = JSON.parse(xmlhttp.responseText);
			var newViewData = rescaleXAxis(viewData);
			showLVPInternal(newViewData,category,axisName,LVPchart);
		}
	};
}

var showLVPInternal = function(newViewData,category,axisName,LVPchart) {
		var colourName="rgba(50,205,50,0.6)";
		var widthvar=2;

		if (category=="warning"){
			colourName = "rgba(255,255,0,1)";
			widthvar=3;
		}else if (category=="error"){
			colourName = "rgba(255,50,0,1)";
			widthvar = 3;
		}

		LVPchart.addSeries(axisName,newViewData, { stroke: {color: colourName, width: widthvar}});
		LVPchart.render();
		LVPchart.resize('100%','100%');
}

