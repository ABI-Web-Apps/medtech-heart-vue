export default (context, inject) => {
  inject("currentRender", () => {
    return context.store.getters.getZincRender;
  }),
    inject("modelToSceneArray", () => {
      return context.store.getters.getModelToSceneArray;
    }),
    inject("perviousCamera", () => {
      return context.store.getters.getPreviousCamera;
    });
};
