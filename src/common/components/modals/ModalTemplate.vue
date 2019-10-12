<template>
  <div
    class="modal-template"
    :class="{'-active' : isActive }"
    @click="close"
  >
    <div class="wrapper" @click.stop>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'modal-template',
  props: {
    modalType: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.$store.state.toggle[this.modalType];
    }
  },
  methods: {
    ...mapActions([
      'toggle'
    ]),

    close() {
      this.toggle(this.modalType);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~Styles/settings/variables";
@import "~Styles/settings/mixins";

.modal-template {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  z-index: 15;
  visibility: hidden;

  opacity: 0;
  background: rgba(0,0,0,0.3);

  transition: opacity 0.5s ease;

  &.-active {
    visibility: visible;
    opacity: 1;
  }

  > .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;

    z-index: 16;

    padding: 30px;

    background-color: $grey-light;
    border: 1px solid $border-color;
    border-radius: 5px;

    box-shadow: 0 3px 3px rgba(0,0,0,0.2);

    transform: translate3d(-50%, -50%, 0);
  }
}
</style>