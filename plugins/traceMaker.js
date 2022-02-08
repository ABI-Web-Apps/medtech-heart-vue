

export default (_, inject) => {
  inject('displayChart', chartName => {return displayChart2(chartName)})
}


function displayChart2(chartName)
{
  showECGAndLVP(chartName, 0.0)
}
