export default (context, inject) => {
  inject("perviousCamera", () => {
    return context.store.getters.getPreviousCamera;
  });
};
