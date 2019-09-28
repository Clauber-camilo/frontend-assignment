<template>
  <div class="header">
  </div>
</template>

<script>
export default {
  name: 'header-default'
}
</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';

  .header {
    height: $headerHeight;
    width: 100vw;
    background-color: $purple;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }
</style>