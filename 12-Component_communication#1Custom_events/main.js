/*
We need to be notified in our Vue instance when the <coupon></coupon> was applied.
*/

Vue.component('coupon', {//this is the child
  template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

  methods:{
    onCouponApplied(){//local
      this.$emit('applied');
    }
  }
});

new Vue({//this is the parent
  el: '#root',

  data: {
    couponApplied: false,
  },

  methods: {
    onCouponApplied(){//global
      this.couponApplied = true;
    }
  }

});

