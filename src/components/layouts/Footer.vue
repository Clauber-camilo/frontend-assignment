<template>
  <div class="footer"></div>
</template>

<script>
  export default {
    name: 'footer-default'
  }
</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';

  .footer {
    height: $footerHeight;
    background-color: $grey-light;
    width: 100vw;
  }
</style>