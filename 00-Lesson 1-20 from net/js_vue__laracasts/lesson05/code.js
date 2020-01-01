
const app = new Vue({
  el: '#root',
  data: {
    className: 'royal',
    isDisabled: false,
    isLoading: false,
    title: "Now the title is set through JavaScript",
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

