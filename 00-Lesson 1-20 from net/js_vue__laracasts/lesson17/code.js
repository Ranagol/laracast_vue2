Vue.component('progress-view', {
  data() {
    return {
      completionRate: 50,
    };
  },
  // No need for a template: it is inline in the HTML.
});

const app = new Vue({
  el: '#root',
});
