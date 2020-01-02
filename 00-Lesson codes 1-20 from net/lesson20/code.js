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
    return {};
  },

  template: '#list',

  props: {
    'projects': {
      default: () => { return {}; },
      // type: Object,
    }
  },
});

class Form {
  constructor(data) {
    this.keys = Object.keys(data);
    this.errors = new Errors();

    for (const field in data) {
      this[field] = data[field];
    }
  }

  reset() {
    for (const field of this.keys) {
      this[field] = null;
    }
  }

  submit() {

  }
}

const app = new Vue({
  el: '#root',

  data: {
    form: new Form({
      name: '',
      description: '',
    }),
    projects: [],
  },

  beforeMount() {
    this.updateProjects();
  },

  methods: {
    updateProjects() {
      this.$http.get('index.php/projects')
        .then(this.onGotProjects);
    },

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
      this.$http.post('index.php/projects', this.$data.form)
        .then(this.onSuccess)
        .catch(error => {
          this.form.errors.record({'name': error.response.data});
        });
    },

    onSuccess() {
      this.updateProjects();
      alert('Success');
      this.form.reset();
    }
  }
});
