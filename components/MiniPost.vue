<template>
  <nuxt-link id="mini-post" to="/">
    <div class="thumb">
      <img
        width="80"
        height="80"
        :src="image"
        alt=""
        loading="lazy"
        sizes="(max-width: 80px) 100vw, 80px"
      />
    </div>

    <div class="container">
      <div class="category-time">
        <span class="cat">{{ category }}</span>
        <span class="date">2 years ago</span>
      </div>
      <h2>
        {{ title }}
      </h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "MiniPost",
  props: {
    to: String,
    image: String,
    title: String,
    category: String,
    date: String,
  },

  data() {
    return {};
  },
  mounted() {},

  methods: {},

  beforeDestroy() {},
};
</script>

<style scoped lang="scss">
#mini-post {
  display: flex;
  margin-top: 15px;
  width: 100%;

  &:hover {
    .thumb {
      img {
        opacity: 0.8;
      }
    }

    .container {
      h2 {
        opacity: 0.6;
      }
    }
  }

  &:first-child {
    margin-top: 0;
  }

  .thumb {
    background: $color--black;
    margin-right: 15px;
    overflow: hidden;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: auto;
      transition: 0.25s;
    }
  }

  .container {
    flex: 1;
    h2 {
      @include title-font($size: 1em);
      float: left;
      line-height: 1.2;
      width: 100%;
      transition: 0.25s;
    }
  }
}
</style>
