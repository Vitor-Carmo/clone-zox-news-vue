<template>
  <div id="post-list">
    <ul class="main-content">
      <div v-if="title" class="widget-head">
        <h4>
          <span class="pop-head">{{ title }}</span>
        </h4>
      </div>
      <li
        v-for="(post, index) in posts"
        class="post"
        :key="index"
        :class="{
          disabled: disabledImage,
        }"
      >
        <nuxt-link :to="post.link">
          <div class="img-container">
            <img
              width="400"
              height="240"
              src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg"
              alt=""
              loading="lazy"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
          <div class="info-container">
            <div class="category-time">
              <span class="cat">Politics</span>
              <span class="date">2 years ago</span>
            </div>
            <h2>Mayors agree, Congress should invest in affordable housing</h2>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <AsidePosts />
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: Array,
    title: String,
    disabledImage: Boolean,
  },
};
</script>

<style scoped lang="scss">
#post-list {
  display: flex;
  margin-bottom: 60px;
  .main-content {
    .post {
      border-top: 1px solid #ddd;
      margin-bottom: 20px;
      list-style: none;

      &:nth-child(5n) {
        &.disabled {
          a {
            .img-container {
              display: none;
            }
          }
        }

        padding-top: 20px;
        a {
          flex-direction: column;
          .img-container {
            height: 492px;
            margin-right: 0;
          }

          .info-container {
            margin: 30px;
            width: calc(100% - 60px);
            padding-top: 0;
            h2 {
              font-size: 2.5rem;
            }

            p {
              font-size: 1.375rem;
            }
          }
        }
      }

      &:hover {
        a {
          .img-container {
            img {
              opacity: 0.8;
            }
          }

          .info-container {
            h2 {
              opacity: 0.8;
            }
          }
        }
      }

      a {
        display: flex;
        .img-container {
          background: $color--black;
          line-height: 0;
          margin-right: 30px;
          overflow: hidden;
          min-width: 380px;
          height: 228px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.25s;
          }
        }

        .info-container {
          padding-top: 30px;
          h2 {
            @include title-font($size: 1.7rem);
            transition: opacity 0.25s;
          }

          p {
            color: #555;
            float: left;
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.4;
            margin-top: 10px;
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .main-content {
      .post {
        a {
          .img-container {
            min-width: 300px;
            height: 180px;
            margin-right: 20px;
          }

          .info-container {
            h2 {
              font-size: 1.5rem;
            }

            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1003px) {
    .main-content {
      .post {
        a {
          .img-container {
            min-width: 250px;
            height: 150px;
          }

          .info-container {
            padding-top: 20px;
            h2 {
              font-size: 1.4rem;
            }

            p {
              display: none;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 899px) {
    flex-direction: column;
    .main-content {
      .post {
        a {
          .img-container {
            min-width: 300px;
            height: 180px;
          }

          .info-container {
            h2 {
              font-size: 1.5rem;
            }

            p {
              display: block;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .main-content {
      .post {
        &:nth-child(5n) {
          a {
            .img-container {
              height: 56.4vw;
            }
          }
        }

        a {
          .img-container {
            min-width: 250px;
            height: 150px;
          }

          .info-container {
            h2 {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 659px) {
    .main-content {
      .post {
        &:nth-child(5n) {
          a {
            .info-container {
              h2 {
                font-size: 2rem;
              }
            }
          }
        }

        a {
          .info-container {
            p {
              display: none;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .main-content {
      .post {
        a {
          .img-container {
            min-width: 150px;
            height: 90px;
          }

          .info-container {
            h2 {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .main-content {
      .post {
        border: none;
        &:nth-child(5n) {
          margin-bottom: 0;
          a {
            .img-container {
              width: 100%;
            }
            .info-container {
              margin: 30px 0;
              h2 {
                font-size: 1.5rem;
              }
            }
          }
        }

        a {
          .img-container {
            min-width: 80px;
            width: 80px;
            height: 80px;
            margin-right: 15px;
          }

          .info-container {
            padding-top: 0;
            h2 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
