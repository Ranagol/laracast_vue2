
const app = new Vue({
  el: '#root',
  data: {
    tasks: [
      { description: "Go to the store", completed: true },
      { description: "Finish screencast", completed: false },
      { description: "Make donation", completed: false },
      { description: "Clear inbox", completed: false },
      { description: "Make dinner", completed: false },
      { description: "Clean room", completed: true },
    ],
  },

  computed: {
    completeTasks() {
      return this.tasks.filter(task => task.completed);
    },

    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  },

  methods: {
    onComplete(e) {
      this.tasks[e.target.getAttribute('data-key')].completed = true;
    },

    onIncomplete(e) {
      this.tasks[e.target.getAttribute('data-key')].completed = false;
    }
  }
});

