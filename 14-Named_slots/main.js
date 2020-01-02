Vue.component('modal', {
  template:`
  <div class="modal is-active">
    <div class="modal-background"></div>
      <div class="modal-card">

        <header class="modal-card-head">
          <p class="modal-card-title"><slot name="header"></slot></p>
          <button class="delete" aria-label="close"></button>
        </header>

        <section class="modal-card-body">
          <slot name="body"></slot>
        </section>

        <footer class="modal-card-foot">
          <slot name="footer"></slot>
        </footer>
        
      </div>
  </div>
  
  `
})

new Vue({
  el: '#root'

})

//For example we have a modal, that has header part, body part, and footer part. If we want to put the header to x place, body to y place, a footer to z place, than for this we can use named slots.
//<slot></slot>is a way how we can make our modal dynamic, instead of hardcoded. We can put our dynamic content into the slot. Example: we could write our header text <modal> Just testing the header </modal>, and it would work. 
//But what if, if we want a footer and a body text too? Slot only works for one thing. The solution is: named slot.