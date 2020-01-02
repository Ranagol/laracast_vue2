Vue.component('message', {
  props: [
    'body',
    'title',
  ],

  template: `
<article class="message" v-show="isVisible">
  <div class="message-header">
    {{ title }}
    <button type="button" @click="isVisible = false">hide inline</button>
    <button type="button" @click="hideMessage">hide method</button>
  </div>
  
  <div class="message-body">
    {{ body }}
  </div>
</article>
`,

  data() {
    return {
      isVisible: true,
    };
  },

  methods: {
    hideMessage() {
      this.isVisible = false;
    }
  },
});

const app = new Vue({
  el: '#root',
  data: {
  },
});
