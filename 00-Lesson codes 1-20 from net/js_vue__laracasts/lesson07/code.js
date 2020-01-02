Vue.component('task', {
  template: '<li><slot></slot></li>',
});

const app = new Vue({
  el: '#root',
  data: {
  },
});

