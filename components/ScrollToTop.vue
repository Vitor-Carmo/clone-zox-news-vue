<template>
  <div id="scroll-top" v-on:click="scrollToTop">
    <i class="fa fa-angle-up fa-3"></i>
  </div>
</template>

<script>
export default {
  name: "ScrollToTop",
  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
  },

  methods: {
    scrollFunction() {
      const bannerHeight = document.querySelector(
        "#leader-wrap .mvp-leader1"
      ).offsetHeight;

      const headerHeight = document.querySelector("#main-header").offsetHeight;

      const size = headerHeight + bannerHeight;

      const element = document.getElementById("scroll-top");
      try {
        if (
          document.body.scrollTop > size ||
          document.documentElement.scrollTop > size
        ) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      } catch (e) {}
    },

    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollFunction);
  },
};
</script>

<style scoped lang="scss">
#scroll-top {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid $color--white;
  border-left: 1px solid $color--white;
  border-bottom: 1px solid $color--white;
  color: $color--white;
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 50%;
  width: 45px;
  height: 45px;
  z-index: 9999;
  transform: translateX(45px);
  transition: 0.25s;

  &.show {
    transform: translateX(0);
  }

  &:hover {
    border-top: 1px solid $color--primary;
    border-left: 1px solid $color--primary;
    border-bottom: 1px solid $color--primary;
    background: $color--primary;
    color: $color--black;
  }

  i {
    font-size: 35px;
    line-height: 100%;
    position: absolute;
  }

  @media (max-width: 940px) {
    display: none;
  }
}
</style>
