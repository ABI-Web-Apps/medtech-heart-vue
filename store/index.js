export const state = () => ({
  currentContent: {},
  chartLoaded: "",
  previousCamera: {},
  zincRenderer: null,
  zincContainer: null,
});

export const getters = {
  getCurrentContent: (state) => state.currentContent,
  getChartLoaded: (state) => state.chartLoaded,
  getZincRender: (state) => state.zincRenderer,
  getZincContainer: (state) => state.zincContainer,
  getPreviousCamera: (state) => state.previousCamera,
};

export const mutations = {
  setCurrentContent(state, newContent) {
    state.currentContent = newContent;
  },
  setChartLoaded(state, currentChart) {
    state.chartLoaded = currentChart;
  },
  setZincRender(state, currentRender) {
    state.zincRenderer = currentRender;
  },
  setZincContainer(state, currentContainer) {
    state.zincContainer = currentContainer;
  },
  setPreviousCamera(state, preCamera) {
    state.previousCamera = preCamera;
  },
};
