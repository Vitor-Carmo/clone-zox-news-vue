<template>
  <div id="aside-posts">
    <div>
      <div class="header">
        <ul>
          <li>
            <a href="#feat-tab-col1"><span class="pop-head">Latest</span></a>
          </li>
          <li>
            <a href="#feat-tab-col2"><span>Videos</span></a>
          </li>
          <li>
            <a href="#feat-tab-col3"><span>Galleries</span></a>
          </li>
        </ul>
      </div>

      <div class="posts">
        <MiniPost
          v-for="(item, index) in posts"
          :key="index"
          :image="item.image"
          :title="item.title"
          :category="item.category"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsidePosts",
  data() {
    return {
      posts: [
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          image:
            "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          category: "Tech",
        },
        {
          title: "Mobile Google CEO Promises 11 Daydream-compatible phones",
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
#aside-posts {
  position: relative;
  min-width: 320px;
  width: 320px;
  margin-left: 60px;
  background: $color--white;
  & > div {
    position: sticky;
    top: 140px;

    .header {
      margin-bottom: 15px;
      width: 100%;
      ul {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;

        li {
          display: inline-block;
          a {
            span {
              display: inline-block;
              @include title-font($color: #aaa);
              cursor: pointer;
              padding: 5px 13px;
              text-transform: uppercase;
              transform: skewX(-15deg);
            }
          }
        }
      }
    }

    .posts {
      .post {
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
    }
  }

  @media screen and (max-width: 1003px) {
    margin-left: 40px;
    & > div {
      position: static;
    }
  }

  @media screen and (max-width: 899px) {
    border-top: 1px solid #ddd;
    padding-top: 20px;
    width: 100%;
    margin-left: 0;
    min-width: auto;
    width: 100%;
  }
}
</style>
