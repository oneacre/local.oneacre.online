<template>
  <div class="page">
    <logo />
    <introduction :title=title :description=description />
    <nuxt-link to="/payment" v-if="data_bool">  {{ data_bool }}</nuxt-link>
  </div>
</template>

<script>
import logo from '~/components/oa/logo.vue'
import introduction from '~/components/introduction.vue'

export default {
  components: {
    logo,
    introduction
  },
  data: () => {
    return {
      title: 'Page not Found',
      description: '404 404 404 404 404 404 404 404 404 404 404 404 404 404',
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  max-width: 800px;
  margin: auto;
}
</style>
