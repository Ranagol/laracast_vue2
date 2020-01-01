
const app = new Vue({
  el: '#root',
  data: {
    lessons: [...Array(133).keys()].slice(101).map(n => n.toString(10).slice(1)),
  },

  methods: {
    onClick(e) {
      alert(e.target.textContent);
    },

    setDisabled() {
      this.isDisabled = true;
    },

    toggleClass() {
      this.isLoading = !this.isLoading;
    }
  },
});

