<template lang="html">
  <div class="introduction">
    <h1>{{ title }}</h1>
    <div class="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description']
}
</script>

<style lang="scss" scoped>
.introduction {
  padding: 40px;

  h1 {
    color: red;
  }
}
</style>
