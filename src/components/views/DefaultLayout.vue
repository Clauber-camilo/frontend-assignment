<template>
  <div class="default-layout">
    <header-default />
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <footer-default />
  </div>
</template>

<script>
  import HeaderDefault from 'Components/layouts/Header.vue';
  import FooterDefault from 'Components/layouts/Footer.vue';
  export default {
    name: "default-layout",
    components: {
      FooterDefault,
      HeaderDefault
    }
  };
</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';

  .default-layout {
    > .container {
      margin-top: $headerHeight;
      min-height: calc(100vh - (#{$headerHeight} + #{$footerHeight}));
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>