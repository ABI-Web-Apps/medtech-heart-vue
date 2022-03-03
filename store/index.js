export const state = () => ({
  currentContent: {},
  chartLoaded:''
})

export const getters = {
  getCurrentContent: state => state.currentContent,
  getChartLoaded: state => state.chartLoaded
}

export const mutations = {
  setCurrentContent(state,newContent){
    state.currentContent=newContent
  },
  setChartLoaded(state,currentChart){
    state.chartLoaded=currentChart
  }
}
