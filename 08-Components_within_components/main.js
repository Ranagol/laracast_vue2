Vue.component('task', {//this will make us able to create <task></task> in the html, which is otherwise nonsense
  template: '<li><slot></slot></li>'//the li will allow us to create a list items of our tasks
});//the <slot></slot> is allowing us to actually display in the DOM our tasks

new Vue({
  el: '#root'

})