Vue.component('task-list', {//this is the child component
  template: `
  <div>
    <task v-for="task in tasks">{{ task.task}}</task></
  div>`,
  // NOTICE the ``. In the template we must use ``, and a parent div, that wraps everything else.
  // we can use <task></task> here, because down there is a '<li><slot></slot></li>', that explains what '<task></task>' is.
  data(){
    return {
      tasks: [
        { task: 'Go to the store', complete: true},
        { task: 'Go to the school', complete: false},
        { task: 'Go to the farm', complete: true},
        { task: 'Go to work', complete: false}
      ]
    }
  },
});

Vue.component('task', {//this is the parent component
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'

})