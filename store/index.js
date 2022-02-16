export const state = () => ({
  currentContent: {},
})

export const getters = {
  getCurrentContent: state => state.currentContent,
}

export const mutations = {
  setCurrentContent(state,newcontent){
    state.currentContent=newcontent
  }
}
