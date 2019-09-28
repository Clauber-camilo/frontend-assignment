<template>
  <div class="sidebar">
    <ul class="list">
      <li class="item" v-for="(link, index) in links" :key="index">
        <!-- this is supossed to be a router-link but for some reason with the compilation method -->
        <!-- the router linkt doen't work as expected -->
        <a class="link" v-if="!link.disable" :href="link.path"> {{link.title}} </a>
        <span class="link" v-if="link.disable"> {{ link.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        links: [
          {
            path: '#/company-data',
            title: 'COMPANY DATA'
          },
          {
            path: '#/company-table',
            title: 'COMPANY TABLE',
            disable: true
          },
          {
            path: '#/company-page',
            title: 'COMPANY PAGE'
          }
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '~Styles/settings/variables';
  @import '~Styles/settings/mixins';

  .sidebar {
    position: relative;
    width: 100%;

    > .list {
      width: 100%;
      border-radius: 5px;
      border: 1px solid $border-color;

      > .item {
        border-bottom: 1px solid $border-color;
        color: $purple-light;
        font-weight: bold;
        font-size: rem(10px);

        &:last-of-type {
          border-bottom: 0;
        }

        > .link {
          display: flex;
          align-items: center;

          padding: 0 10px;
          width: 100%;
          height: 50px;
        }
      }
    }
  }
</style>