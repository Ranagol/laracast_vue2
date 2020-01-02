// Or use axios directly instead of this.$http.
Vue.prototype.$http = axios;

const app = new Vue({
  el: '#root',

  data: {
    skills: [],
  },

  mounted() {
    // Make an Ajax request to our server, on /skills.json
    this.$http.get('skills.json')
      .then(response => {
        console.log("Response", response);
        this.skills = response.data;
      });
  }
});
