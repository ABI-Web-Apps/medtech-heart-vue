

export default (context,inject) => {

  inject('parentHeading', () => {return context.store.getters.getCurrentContent.parentHeading}),
  inject('parentTitle', () => {return context.store.getters.getCurrentContent.parentTitle}),
  inject('heading', () => {return context.store.getters.getCurrentContent.heading}),
  inject('title', () => {return context.store.getters.getCurrentContent.title}),
  inject('category', () => {return context.store.getters.getCurrentContent.category}),
  inject('dataFile', () => {return context.store.getters.getCurrentContent.dataFile}),
  inject('demoIcon', () => {return context.store.getters.getCurrentContent.demoIcon}),
  inject('ecg', () => {return context.store.getters.getCurrentContent.ecg}),
  inject('model', () => {return context.store.getters.getCurrentContent.model})
}
