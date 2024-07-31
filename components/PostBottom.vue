<template>
  <nuxt-link id="post-bottom" :to="to">
    <div class="img-container">
      <img
        width="400"
        height="240"
        :src="image"
        :alt="title"
        loading="lazy"
        sizes="(max-width: 400px) 100vw, 400px"
      />
    </div>

    <div class="info-container">
      <div class="category-time">
        <span class="cat">{{ category }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <h2>{{ title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostBottom",
  props: {
    to: {
      type: String,
      default: "/",
    },
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
#post-bottom {
  display: inline-block;
  max-width: 320px;
  margin-bottom: 20px;

  .img-container {
    position: relative;
    background: $color--black;
    line-height: 0;
    overflow: hidden;
    width: 100%;
    max-height: 180px;

    img {
      opacity: 0.8;
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: opacity 0.25s;
    }
  }

  .info-container {
    padding: 15px 0 10px;
    width: 100%;
    h2 {
      @include title-font($size: 1.3rem);
      transition: opacity 0.25s;
    }
  }

  &:hover {
    .img-container {
      img {
        opacity: 0.6;
      }
    }
    .info-container {
      h2 {
        opacity: 0.6;
      }
    }
  }

  @media screen and (max-width: 899px) {
    .info-container {
      .category-time {
        .date {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 659px) {
    .info-container {
      h2 {
        @include title-font($size: 1.2rem);
      }
    }
  }

  @media screen and (max-width: 479px) {
    display: flex;
    margin: 0 0 15px 0;
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    .img-container {
      background: none;
      margin-right: 4.5454545454%;
      max-width: 80px;
      width: 80px;
      height: 80px;
      width: auto;
      img {
        width: 100%;
        height: 100%;
        opacity: 1;
      }
    }

    .info-container {
      padding: 0;
      width: 100%;

      .category-time .date {
        display: inline-block;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
}
</style>
