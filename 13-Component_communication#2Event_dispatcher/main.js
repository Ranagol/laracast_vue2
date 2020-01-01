window.Event = new class{
  constructor(){
    this.vue = new Vue();
  }

  fire(event, data = null){
    this.vue.$emit(event, data);
  }

  listen(event, callback){
    this.vue.$on(event, callback)
  }

};
/*
Any Vue instance has the ability to listen and emit events
this.$emit('applied');---emitting
@applied="onCouponApplied"----listening
So, we can create a root Vue instance
*/

//this is the child
Vue.component('coupon', {
  template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied"/>`,

  methods:{
    onCouponApplied(){
      Event.fire('applied');
    }
  },
});

new Vue({
  el: '#root',

  data: {
    couponApplied: false,
  },

  created(){//this is suppoesed to be activated when this instance is created??????
    Event.listen('applied', this.onCouponApplied);
  },

  methods: {
    onCouponApplied(){//global
      this.couponApplied = true;
    }
  }

});
