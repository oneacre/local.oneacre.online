<template>
  <nuxt-link to="/interviews/page_not_found">
    <li>
      <div class="left"  v-bind:style="{ 'background-image': 'url(' + image + ')' }"></div>
      <!-- <img :src=image alt=""> -->
      <div class="right">
        <h2>{{ title }}</h2>
        <h3>{{ byline }}</h3>
        <p>{{ date }}</p>
      </div>
    </li>
  </nuxt-link>
</template>

<script>
export default {
  props: ['title', 'byline', 'date', 'image',]
}
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
  display: block;
  margin: 20px;

  li {
    list-style: none;
    padding: 20px;
    height: 200px;
    border: 1px solid;

    .left {
      width: 50%;
      display: inline-block;
      background-position: center;
      background-size: cover;
      height: 160px;

      img {
        width: 100%;
      }
    }

    .right {
      width: 45%;
      float: right;
      display: inline-block;


      p {
        color: red;
      }
    }
  }
}
</style>
