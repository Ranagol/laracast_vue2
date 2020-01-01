Vue.component('modal', {
  methods: {
  },

  template: `
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="header"></slot>
      </p>
      <button class="delete"></button>
    </header>  
    
    <section class="modal-card-body">
      <slot>Default body</slot>
    </section>
    
    <footer class="modal-card-foot">
      <slot name="footer">
        <a class="button is-primary">OK</a>
        <a class="button">Cancel</a>      
      </slot>
    </footer>
  </div>
</div>  
`,

});

const app = new Vue({
  el: '#root',
  data: {
  },

  methods: {
  }
});
