import activeNav from './utils/activeNav'

document.addEventListener('DOMContentLoaded', () => {
  activeNav.methods.init()
})

window.addEventListener('hashchange', () => {
  activeNav.methods.init()
})