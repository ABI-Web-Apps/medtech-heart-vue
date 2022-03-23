export const state = () => ({
  currentContent: {},
  chartLoaded: "",
  previousCamera: {},
});

export const getters = {
  getCurrentContent: (state) => state.currentContent,
  getChartLoaded: (state) => state.chartLoaded,
  getPreviousCamera: (state) => state.previousCamera,
};

export const mutations = {
  setCurrentContent(state, newContent) {
    state.currentContent = newContent;
  },
  setChartLoaded(state, currentChart) {
    state.chartLoaded = currentChart;
  },
  setPreviousCamera(state, preCamera) {
    state.previousCamera = preCamera;
  },
};
