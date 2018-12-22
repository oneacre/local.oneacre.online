<template lang="html">
  <div class="page">
    <div class="lines">
      <span class="line"  v-for="index in 1000" :key="index"></span>
    </div>

    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #5d5b5b;
  min-height: 100vh;

  .content {
    max-width: 50vw;
    margin: auto;
    padding-top: 200px;
    line-height: 2em;
    font-size: 18px;
    color: #e9e9e9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    p {
      padding-bottom: 18px;
    }
  }

  .lines {

    .line {
      border: 1px solid #777;
      margin-bottom: 20px;
      width: 100vw;
      display: block;
      transform: rotate(30deg);
      max-width: 70vw;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
