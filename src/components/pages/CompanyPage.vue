<template>
  <div class="company-page">
    <div class="company">
      <div class="title">Microsoft</div>
      <div class="description">
        <span> At Microsoft, our mission is to empower every person and every organization on the planet
          to achieve more. Our mission is grounded in both the world in which we live and the future we strive
          to create.
        </span>
      </div>
    </div>
    <div class="cards">
      <div class="left">
        <card title="Activities">
          <div class="activities"> activities block </div>
        </card>
      </div>
      <div class="right">
        <card title="Similar Companies">
          similar companies block
        </card>
        <card title="Company Spend History">
          company chart block
        </card>
        <card title="Company Spend History">
          company spend block
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from 'Common/components/Card.vue';

export default {
  name: 'company-page',
  components: { Card },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~Styles/settings/variables";
@import "~Styles/settings/mixins";

.company-page {
  padding-bottom: 30px;
  > .company {
    color: $grey-dark;
    padding: 20px 0;

    > .title {
      font-size: rem(16px);
      margin-bottom: 15px;
    }

    > .description {
      font-size: rem(12px);
    }
  }

  > .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 15px;

    > .left {
      .activities {
        height: 500px;
      }
    }

    > .right {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: 15px;
    }
  }
}
</style>