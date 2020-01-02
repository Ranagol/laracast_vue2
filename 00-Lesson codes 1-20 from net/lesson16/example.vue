<template lang="jade">
  div.my-component
    h1 {{ msg }}
    other-component
</template>

<script>
  import OtherComponent from './other-component.vue'

  export default {
    components: { OtherComponent },
    data() {
      return {
        msg: ( 'Hello, Vue.js!' )
      }
    }
  }
</script>

<style lang="sass" scoped>
  $font-stack: Helveric, sans-serif;
  $primary-color: #333;

  .my-component {
    font: 100% $font-stack;
    color: $primary-color;
  }
</style>
