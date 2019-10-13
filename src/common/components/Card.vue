<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}

</script>

<style lang="scss" scoped>
@import "~Styles/settings/variables";
@import "~Styles/settings/mixins";

.card {
  width: 100%;
  border: 1px solid $border-color;
  border-radius: 5px;

  background-color: white;

  > .title {
    font-size: rem(11px);
    color: $grey-dark;
    text-transform: uppercase;

    padding: 15px;
    border-bottom: 1px solid $border-color;
  }

  > .content {
    padding: 15px;
  }
}
</style>