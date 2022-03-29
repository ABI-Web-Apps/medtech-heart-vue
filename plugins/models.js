export default (context, inject) => {
  inject("currentRender", () => {
    return context.store.getters.getZincRender;
  }),
    inject("currentContainer", () => {
      return context.store.getters.getZincContainer;
    }),
    inject("perviousCamera", () => {
      return context.store.getters.getPreviousCamera;
    });
};
