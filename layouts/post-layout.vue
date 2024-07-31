<template>
  <div id="post-layout">
    <HeaderAdBanner />
    <div class="main-content">
      <Header
        title="Mayors agree, Congress should invest in affordable housing"
      />

      <main>
        <Nuxt />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
import getBannerHeight from "@/helper/getBannerHeight.js";

export default {
  mounted() {
    this.changeBannerHeight();
    window.addEventListener("resize", this.changeBannerHeight);
  },

  methods: {
    changeBannerHeight: function () {
      getBannerHeight(
        "#post-layout .main-content",
        "#post-layout #leader-wrap"
      );
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.changeBannerHeight);
  },
};
</script>

<style scoped lang="scss">
#post-layout {
  position: relative;

  .main-content {
    position: relative;
    backface-visibility: hidden;
    margin-top: 0;
    background: #fff;
    z-index: 9999;
    transition: margin-top 0.7s;

    main {
      padding-top: 143px;
      @media screen and (max-width: 940px) {
        padding-top: 73px;
      }
    }
  }
}
</style>
