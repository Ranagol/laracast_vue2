Vue.component('progress-view', {
  data() {
    return { completionRate: 50 };
  }
});

new Vue({
  el: '#root',

});

//single use = only for this page is ment. ??
//we don't create a template here, for some misterious reason. We will do that inline, in the html.