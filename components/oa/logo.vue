<template lang="html">
  <nuxt-link to="/" class="logo">
      <div class="logo-title">
        one acre
      </div>
      <div class="logo-scrollrange">
        <div class="logo-block"  v-scroll="handleScroll">
          <div class="logo-title">.online</div>
        </div>
      </div>
  </nuxt-link>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      var max_scroll = 354
      var scrollPosition =
        window.scrollY /
        ((document.body.scrollHeight - window.innerHeight) / max_scroll)

      document
        .querySelector('.logo-block')
        .setAttribute('style', 'margin-top:' + scrollPosition + 'px;')
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 26px;
  padding: 10px 40px 10px 10px;
  border: 2px solid $color-primary;
  color: $color-primary;
  display: inline-block;
  position: fixed;
  background-color: $color-background;
  font-family: 'NEXTBook-Regular', sans-serif;
  z-index: 10;
  top: 40px;
  left: 40px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s;
  text-decoration: none;

  @media only screen and (max-width: 1280px) {
    width: 20px;
    padding: 10px 40px 10px 10px;
    left: 40px;
    top: 40px;
  }

  @media only screen and (max-width: 1020px) {
    left: 20px;
    top: 20px;
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    top: 70px;
    width: 10px;
    padding: 0;
  }

  @media only screen and (max-width: 460px) {
    width: 10px;
    padding: 0;
    left: 15px;
  }
}

.logo-scrollrange {
  height: 440px;
  margin-top: 10px;
}

.logo-block {
  width: 100%;
  left: 0;
  padding: 50px 10px 10px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: $color-primary !important;
  position: absolute;
  cursor: pointer;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    min-height: 78px;
  }
}

.logo-title {
  transition: 0.5s;

  @media only screen and (max-width: 1280px) {
    transition: none;
    visibility: hidden;
  }
}
</style>
