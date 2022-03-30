export const state = () => ({
  currentContent: {},
  chartLoaded: "",
  previousCamera: {},
  zincRenderer: null,
  modelToSceneArray: [],
});

export const getters = {
  getCurrentContent: (state) => state.currentContent,
  getChartLoaded: (state) => state.chartLoaded,
  getZincRender: (state) => state.zincRenderer,
  getModelToSceneArray: (state) => state.modelToSceneArray,
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
  setModelToSceneArray(state, old_scene) {
    state.modelToSceneArray[old_scene.name] = old_scene.sceneObj;
  },
  setPreviousCamera(state, preCamera) {
    state.previousCamera = preCamera;
  },
};
