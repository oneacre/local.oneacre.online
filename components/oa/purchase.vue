<template>

  <h1>title <nuxt-link to="/payment" v-if="data_bool">  {{ data_bool }}</nuxt-link></h1>
</template>

<script>
export default {
  data: () => {
    return {
      data_bool: true,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
