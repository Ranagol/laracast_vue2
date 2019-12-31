Vue.component('modal', {//so, our component is connected to <modal></modal> in the html

  template:`
  <div class="modal is-active">
    <div class="modal-background">
    </div>
    <div class="modal-content">
      <div class="box">
        <slot></slot>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `,
});

new Vue({
  el: '#root',

  data: {
    showModal:false
  },
})

/*Problem. We can activate our modal with the 'Show modal' button. But we can't close the modal at this point. We can't use this on the modal button: @click="showModal: false", because of scope issues our component can't see the data in the Vue instance. So, we must find a way to solve this. There has to be a communication between the component and the instance.

When the modal close X button is clicked, @click="$emit('close')" it will emit an event that it is closed. 

When our modal announces that it has closed, this part of the code @close="showModal=false" will set the showModal to false.

When the showModal is false, the modal will disappear.

*/

