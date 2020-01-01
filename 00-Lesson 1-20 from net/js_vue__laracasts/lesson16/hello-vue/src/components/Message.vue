<template>
  <div class="box">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
  };

</script>

<style>
  .box {
    background: #e3e3e3;
    padding: 10px;
    border: 1px solid #cbcbcb;
    margin-bottom: 1em;
  }
</style>
