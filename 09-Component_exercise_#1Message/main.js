/*
Wit this trick the html could look natural and readable
for the developers. Our style is in the Vue component template, and it is reusable. The text that has to be echoed is in the html, in the message attribute.
*/

Vue.component('message', {
  props:['title', 'body'],
  
  data(){
    return{
      isVisible: true,
    };
  },

  template:`
    <div class="jumbotron jumbotron-fluid" v-show="isVisible">
      <div class="display-4">
        {{ title }}
        <button class="btn btn-primary" @click="isVisible=false">Hide Jumbotron</button>
      </div>
  
      <div class="lead">
        {{ body }}
      </div>
    </div>
  `,
});
/*with the click on the button we want to hide the jumbotron.
v-show here means: show this element, if isVisible true (this will be the starting position).
With the click on the button we will set isVisible to false.
*/

new Vue({
  el:'#root'
});
