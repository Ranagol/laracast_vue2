window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
};

Vue.component('coupon', {
  methods: {
    onCouponApplied() {
      Event.fire('applied');
    }
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

  created() {
    Event.listen('applied', this.onCouponApplied);
  },

  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
});
