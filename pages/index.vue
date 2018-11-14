<template>
  <div class="page">
    <logo />
    <introduction :title=title :description=description />
    <list class="list" />
  </div>
</template>

<script>
import logo from '~/components/oa/logo.vue'
import introduction from '~/components/introduction.vue'
import list from '~/components/list.vue'


export default {
  components: {
    logo,
    introduction,
    list
  },
  data: () => {
    return {
      title: 'local.online',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  }
}
</script>

<style lang="scss" scoped>
.url {
  text-align: center;
  display: block;
  color: inherit;
  font-size: 16px;
  line-height: 1.35;
}

.page {
  max-width: 800px;
  margin: auto;
}
</style>
