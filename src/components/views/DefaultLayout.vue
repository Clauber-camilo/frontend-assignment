<template>
  <div class="default-layout">
    <header-default />
    <div class="container">
      <breadcrumbs />

      <div class="grid">
        <sidebar-default />
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <footer-default />
  </div>
</template>

<script>
  import Breadcrumbs from 'Components/Breadcrumbs.vue';
  import FooterDefault from 'Components/layouts/Footer.vue';
  import HeaderDefault from 'Components/layouts/Header.vue';
  import SidebarDefault from 'Components/layouts/Sidebar.vue';

  export default {
    name: "default-layout",
    components: {
      Breadcrumbs,
      FooterDefault,
      HeaderDefault,
      SidebarDefault
    }
  };
</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';

  .default-layout {
    > .container {
      margin-top: $headerHeight;
      padding-top: 10px;
      min-height: calc(100vh - (#{$headerHeight} + #{$footerHeight}));

      > .grid {
        display: grid;
        grid-template-columns: 225px 1fr;
        grid-column-gap: 20px;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>