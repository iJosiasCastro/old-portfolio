export const state = () => ({
  darkmode: 'load'
})
  
export const mutations = {
  set_darkmode(state, value) {
    state.darkmode = value
  }
}