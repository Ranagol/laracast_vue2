Vue.component('task', {
  template: '<li><slot></slot></li>',
});

Vue.component('task-list', {
  template: `
<ul>
  <task v-for="task in tasks">
    {{ task.task }}
  </task>
</ul>
`,

  data() {
    return {
      tasks: [
        { task: 'Go to the store', completed: true },
        { task: 'Finish screencast', completed: false },
        { task: 'Fix dinner', completed: true },
        { task: 'Clean room', completed: false },
        { task: 'Make donation', completed: true },
      ]
    };
  }
});

const app = new Vue({
  el: '#root',
  data: {
  },
});
