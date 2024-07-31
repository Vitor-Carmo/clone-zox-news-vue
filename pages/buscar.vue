<template>
  <div id="search-container">
    <h1>Search results for "{{this.$route.query.search}}"</h1>
    <PostList :posts="lateralItens" />
  </div>
</template>

<script>
export default {
  name: "autor",
  data() {
    return {
      lateralItens: [
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          link: "/post",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/partials/_placeholders.scss";
#search-container {
  @extend %container;
  padding-bottom: 60px;

  h1 {
    @include title-font($size: 2.5rem);
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  @media screen and (max-width: 899px) {
    h1 {
      @include title-font($size: 1.8rem);
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      @include title-font($size: 1.5rem);
    }
  }

  @media screen and (max-width: 479px) {
    h1 {
      @include title-font($size: 1.3rem);
    }
  }
}
</style>
