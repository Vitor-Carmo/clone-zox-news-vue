<template>
  <div id="leader-wrap">
    <nuxt-link class="mvp-leader1" to="/">
      <img
        width="1600"
        height="408"
        src="https://www.mvpthemes.com/zoxnews/wp-content/uploads/2022/01/zox-leader.webp"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "HeaderAdBanner",

  data() {
    return {};
  },
  mounted() {},

  methods: {},

  beforeDestroy() {},
};
</script>

<style scoped lang="scss">
#leader-wrap {
  background: #f5f9fa;
  line-height: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  z-index: 999;
  a {
    display: inline-block;
    img {
      max-width: 100%;
      height: auto;

      &.mvp-leader2 {
        display: none;
      }

      &.mvp-leader3 {
        display: none;
      }
    }
  }
}
</style>
