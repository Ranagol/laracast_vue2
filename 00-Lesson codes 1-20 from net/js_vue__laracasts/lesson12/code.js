Vue.component('coupon', {
  created() {
  },

  data() {
    return {
    };
  },

  methods: {
    onCouponApplied() {
      this.$emit('applied');
    }
  },

  props: {
  },

  template: `
<input placeholder="Enter your coupon code" @blur="onCouponApplied" />  
`,

});

const app = new Vue({
  el: '#root',
  data: {
    couponApplied: false,
  },
  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
});
