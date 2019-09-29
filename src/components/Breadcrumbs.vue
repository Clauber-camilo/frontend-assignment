<template>
  <div class="breadcrumbs">
    breadcrumbs
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {}
  }
}

</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';

  .breadcrumbs {
    width: 100%;
    height: 50px;

    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    font-size: 12px;

    background-color: $grey-light;
  }
</style>