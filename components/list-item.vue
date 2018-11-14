<template>
  <nuxt-link to="/interviews/page_not_found">
    <li>
      <h2>{{ title }}</h2>
      <h3>{{ byline }}</h3>
      <p>{{ date }}</p>
    </li>
  </nuxt-link>

</template>

<script>
export default {
  props: ['title', 'byline', 'date', 'image',]
}
</script>

<style lang="scss" scoped>
// a {
//   color: inherit;
//   text-decoration: none;
//   padding: 20px;

//   li {
//     list-style: none;
//   }
// }
</style>
