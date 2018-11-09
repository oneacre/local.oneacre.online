<template>
  <div class="page">
    <logo />

    <nuxt-link class="url" to="/announcement" >announcement</nuxt-link>
  </div>
</template>

<script>
import logo from '~/components/oa/logo.vue'

export default {
  components: {
    logo
  },
  data: () => {
    return {
      url: 'annoucement'
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
</style>
