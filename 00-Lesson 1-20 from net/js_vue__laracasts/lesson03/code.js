
const app = new Vue({
  el: '#root',
  data: {
    names: ['Joe', 'Mary', 'Jane', 'Jack'],
  },

  mounted() {
    document.querySelector('#button').addEventListener('click', () => {
      "use strict";
      const name = document.querySelector('#input');
      app.names.push(name.value);
      name.value = '';
    });
  }
});


