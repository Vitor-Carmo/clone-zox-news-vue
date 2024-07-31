<template>
  <nuxt-link :to="to" id="featured-post">
    <div class="img-container" :style="`height: ${dinamyc_height}px`">
      <img
        width="560"
        :height="height"
        :src="image"
        :alt="title"
        loading="lazy"
      />
      <div class="icon">
        <i class="fa fa-2 fa-play"></i>
      </div>
    </div>
    <div class="info-container">
      <div class="category-time">
        <span class="cat">{{ category }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <h2 :style="`font-size: ${this.height !== '600' ? '1.7rem' : '3rem'}`">
        {{ title }}
      </h2>
      <p v-if="description">
        {{ description }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "FeaturedPost",
  props: {
    to: String,
    height: String,
    image: String,
    title: String,
    category: String,
    date: String,
    description: String,
  },

  data() {
    return {
      dinamyc_height: this.height,
    };
  },
  mounted() {
    this.changeHeight();
    window.addEventListener("resize", this.changeHeight);
  },

  methods: {
    changeHeight() {
      const mediaQuery = window.matchMedia("(max-width: 600px)");
      if (mediaQuery.matches) {
        this.dinamyc_height = this.height * 0.75;
      } else {
        this.dinamyc_height = this.height;
      }
    },
  },

  beforeDestroy() {
    window.addEventListener("resize", this.changeHeight);
  },
};
</script>

<style scoped lang="scss">
#featured-post {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 100%;
  &:hover {
    .img-container {
      img {
        opacity: 0.8;
      }
    }
  }

  .img-container {
    background: #000;
    line-height: 0;
    overflow: hidden;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.25s;
    }
  }

  .icon {
    border-radius: 50%;
    color: $color--black;
    background: $color--primary;
    font-size: 20px;
    opacity: 0.9;
    position: absolute;
    top: 20px;
    left: 20px;
    text-align: center;
    width: 46px;
    height: 46px;

    i {
      margin-left: 4px;
      margin-top: 13px;
    }
  }

  .info-container {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 50px 3.846153846% 20px;
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    .category-time {
      margin-bottom: 8px;
      span {
        color: $color--white;
        &:first-child {
          color: $color--primary;
        }
      }
    }

    h2 {
      @include title-font($color: $color--white);
      float: left;
      margin-right: 30%;
      width: 70%;
      margin-bottom: 10px;
    }

    p {
      color: $color--white;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.4;
      margin-top: 8px;
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    .info-container {
      h2 {
        margin-right: 0;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .info-container {
      h2 {
        margin-right: 0;
        width: 100%;
      }
    }
  }
}
</style>
