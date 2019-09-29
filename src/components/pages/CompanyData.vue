<template>
  <div class="company-data">
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo accusamus veritatis quia. Perferendis odio ullam quos, beatae ratione ducimus, aperiam minus velit ipsam quas, possimus veniam tenetur reprehenderit quam
    </p>
    <company-data-form class="form" />
  </div>
</template>

<script>
import CompanyDataForm from 'Components/CompanyDataForm.vue';

export default {
  name: 'company-data',
  components: {
    CompanyDataForm
  }
};
</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';
  @import '~Styles/settings/mixins';

  .company-data {
    border-radius: 5px;
    border: 1px solid $border-color;
    width: 100%;
    padding: 15px;

    > .text {
      font-size: rem(12px);
      color: $grey-dark;
    }

    > .form {
      margin-top: 25px;
    }
  }
</style>