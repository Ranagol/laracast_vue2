// Or use axios directly instead of this.$http.
Vue.prototype.$http = axios;

class Errors {
  constructor() {
    this.clear();
  }

  any() {
    return Object.keys(this.errors).length != 0;
  }

  clear(name) {
    console.log("clearing", name);
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field];
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  record(errors) {
    this.errors = errors;
  }
}

Vue.component('list', {
  methods: {
  },

  data() {
    return {
    };
  },

  template: `
<table class="table">
  <caption>List of projects</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- props are directly available by name -->
    <tr v-for="project in projects">
      <td>{{ project.name }}</td>
      <td>{{ project.description }}</td>
    </tr>
  </tbody>
</table>  
`,

  props: {
    'projects': {
      default: () => { return {}; },
      // type: Object,
    }
  },
});

const app = new Vue({
  el: '#root',

  data: {
    name: '',
    description: '',
    errors: new Errors(),
    projects: [],
  },

  beforeMount() {
    this.$http.get('index.php/projects')
      .then(this.onGotProjects);
  },

  methods: {
    onGotProjects(e) {
      this.projects = e.data;
    },

    /**
     *
     * @param {Event} e
     */
    onSubmit(e) {
      // or use @submit.prevent at the HTML call point
      // e.preventDefault();
      this.$http.post('index.php/projects', this.$data)
        .then(this.onSuccess)
        .catch(error => this.errors.record({'name': error.response.data}));
    },

    onSuccess() {
      alert('Success');
    }
  }
});
