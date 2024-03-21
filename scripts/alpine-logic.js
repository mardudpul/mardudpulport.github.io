document.addEventListener('alpine:init', () => {
  Alpine.store('pages', {
    mainContentOpen: true,
    projectOneOpen: false,
    projectTwoOpen: false,
    projectThreeOpen: false
  })
})