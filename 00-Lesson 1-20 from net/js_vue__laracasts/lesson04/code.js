
const app = new Vue({
  el: '#root',
  data: {
    names: ['Joe', 'Mary', 'Jane', 'Jack'],
    newName: '',
  },

  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
  },
});


