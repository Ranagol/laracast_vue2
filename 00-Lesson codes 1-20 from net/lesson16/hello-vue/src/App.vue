<template>
  <div id="app">
    <message>Hello there</message>
    <message>and there</message>
  </div>
</template>

<script>
  import Message from './components/Message.vue';
  export default {
    name: 'app',
    components: {
      Message,
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
</style>
