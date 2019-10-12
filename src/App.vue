<template>
  <div id="app">
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <company-notes-modal />
  </div>
</template>
<script>
import CompanyNotesModal from 'Common/components/modals/CompanyNotesModal.vue';

export default {
  components: {
    CompanyNotesModal
  }
}
</script>
<style lang="scss" scoped>
@import '~Styles/settings/variables';
#app {
  font-family: $font-default;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>