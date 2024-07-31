<template>
  <div id="home">
    <section class="main-content-home">
      <div class="main">
        <div class="trending">
          <h3>
            <span class="pop-head">Trending</span>
          </h3>

          <div class="container">
            <nuxt-link
              v-for="(post, index) in treding"
              class="post"
              :to="post.link"
              :key="index"
            >
              <div class="img-container">
                <img
                  width="400"
                  height="240"
                  :src="post.image.desktop"
                  class="desktop"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 400px) 100vw, 400px"
                />
                <img
                  width="80"
                  height="80"
                  :src="post.image.mobile"
                  class="mobile"
                  alt=""
                  loading="lazy"
                  sizes="(max-width: 80px) 100vw, 80px"
                />
              </div>
              <div class="info-container">
                <div class="category-time">
                  <span class="cat">{{ post.category }}</span>
                  <span class="date">{{ post.date }} years ago</span>
                </div>
                <h2>
                  {{ post.name }}
                </h2>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="main-posts">
          <FeaturedPost
            to="/post"
            height="600"
            class="post-main-1"
            image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-560x600.jpg"
            title="Illinois' Financial Crisis Fallout"
            category="Politics"
            date="2 years ago"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti."
          />

          <FeaturedPost
            to="/post"
            height="312"
            class="post-main-2"
            image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-smile7-590x354.jpg"
            title="Illinois' Financial Crisis Fallout"
            category="Fashion"
            date="2 years ago"
          />

          <FeaturedPost
            to="/post"
            height="312"
            class="post-main-2"
            image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/men-actors-590x354.jpg"
            title="'Better Call Saul' has been renewed for a fourth season"
            category="Entertainment"
            date="2 years ago"
          />
        </div>
      </div>

      <div class="lateral-content">
        <div class="ad-banner-container">
          <a href="#" target="_blank">
            <img
              src="http://www.mvpthemes.com/zoxnews/wp-content/uploads/2017/07/zox300.png"
            />
          </a>
        </div>
        <div class="posts-lists">
          <div class="header">
            <ul>
              <li>
                <a href="#feat-tab-col1"
                  ><span class="pop-head">Latest</span></a
                >
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
              v-for="(item, index) in lateralItens"
              :key="index"
              :image="item.image"
              :title="item.title"
              :category="item.category"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="category-1 right">
      <div class="widget-head">
        <h4><span class="pop-head">Entertainment</span></h4>
      </div>

      <div class="container">
        <div class="main">
          <div class="featured">
            <FeaturedPost
              to="/post"
              height="600"
              class="post"
              image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones-560x600.jpg"
              title="Final 'Game of Thrones' Episodes"
              category="Entertainment"
              date="2 years ago"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti."
            />
          </div>

          <div class="lateral-main">
            <PostBottom
              to="/post"
              image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-party-400x240.jpg"
              title="'Girls Trip' already surpasses 'Rough Night' in opening weekend"
              category="Entertainment"
              date="2 years ago"
            />
            <PostBottom
              to="/post"
              image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/walking-dead-400x240.jpg"
              title="New Season 8 Walking Dead trailer flashes forward in time"
              category="Entertainment"
              date="2 years ago"
            />
          </div>
        </div>
        <div class="lateral">
          <MiniPost
            v-for="(item, index) in lateralItens.slice(0, 3)"
            :key="index"
            :image="item.image"
            :title="item.title"
            :category="item.category"
          />

          <nuxt-link to="/post" class="more">More Entertainment</nuxt-link>
        </div>
      </div>
    </section>

    <section class="category-2">
      <div class="content">
        <div class="widget-head">
          <h4><span class="pop-head">Videos</span></h4>
        </div>
        <div class="container">
          <div class="featured">
            <FeaturedPost
              to="/post"
              height="443"
              class="post"
              image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer.jpg"
              title="Mod turns 'Counter-Strike' into a 'Tekken' clone with fighting chickens"
              category="Entertainment"
              date="2 years ago"
            />
          </div>
          <div class="lateral">
            <nuxt-link
              to="/post"
              v-for="(item, index) in lateralItens.slice(0, 4)"
              class="post"
              :key="index"
            >
              <div class="img-container">
                <img
                  width="400"
                  height="240"
                  src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/superman-400x240.jpg"
                  alt=""
                  loading="lazy"
                  sizes="(max-width: 400px) 100vw, 400px"
                />
              </div>
              <div class="info-container">
                <div class="category-time">
                  <span class="cat">Entertainment</span>
                  <span class="date">2 years ago</span>
                </div>
                <h2>Meet Superman's grandfather in new trailer for Krypton</h2>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="category-3 left">
      <div class="widget-head">
        <h4><span class="pop-head">Business</span></h4>
      </div>

      <div class="container">
        <div class="main">
          <div class="lateral-main">
            <PostBottom
              to="/post"
              image="	https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/office-400x240.jpg"
              title="6 Stunning new co-working spaces around the globe"
              category="Business"
              date="2 years ago"
            />
            <PostBottom
              to="/post"
              image="	https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/business-presentation-400x240.jpg"
              title="3 Ways to make your business presentation more relatable"
              category="Business"
              date="2 years ago"
            />
          </div>
          <div class="featured">
            <FeaturedPost
              to="/post"
              height="600"
              class="post"
              image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/news-station-560x600.jpg"
              title="MSNBC Now First In Primetime"
              category="Business"
              date="2 years ago"
              description="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates."
            />
          </div>
        </div>
        <div class="lateral">
          <MiniPost
            v-for="(item, index) in lateralItens.slice(0, 3)"
            :key="index"
            :image="item.image"
            :title="item.title"
            :category="item.category"
          />

          <nuxt-link to="/post" class="more">More Entertainment</nuxt-link>
        </div>
      </div>
    </section>

    <section class="category-4">
      <div class="widget-head">
        <h4><span class="pop-head">Tech</span></h4>
      </div>
      <div class="grid-top">
        <FeaturedPost
          to="/post"
          height="354"
          class="post"
          image="	https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-590x354.jpg"
          title="Mobile Google CEO Promises 11 Daydream-compatible phones"
          category="Tech"
          date="2 years ago"
        />
        <FeaturedPost
          to="/post"
          height="354"
          class="post"
          image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/blue-car-590x354.jpg"
          title="Ford1s 2018 Mustang GT can do 0-to-60 mph in under 4 seconds"
          category="Tech"
          date="2 years ago"
        />
      </div>

      <div class="grid-bottom">
        <PostBottom
          to="/post"
          image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/business-woman-400x240.jpg"
          title="Hulu hires Google marketing veteran Kelly Campbell as CMO"
          category="Tech"
          date="2 years ago"
        />
        <PostBottom
          to="/post"
          image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/airplane-400x240.jpg"
          title="NASA seeks to build a quieter supersonic plane for passenger flight"
          category="Tech"
          date="2 years ago"
        />
        <PostBottom
          to="/post"
          image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-computer-400x240.jpg"
          title="Microsoft Paint is finally dead, and the world Is a better place"
          category="Tech"
          date="2 years ago"
        />
        <PostBottom
          to="/post"
          image="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/video-screens-400x240.jpg"
          title="Netflix was the top grossing app in Q2, with mobile revenue up 233%"
          category="Tech"
          date="2 years ago"
        />
      </div>
    </section>

    <section class="more-news">
      <div class="widget-head">
        <h4><span class="pop-head">More News</span></h4>
      </div>
      <PostList :posts="lateralItens" />
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      treding: [
        {
          name: "The final 6 'Game of Thrones' episodes might feel like a full season",
          category: "Entertainment",
          date: "2",
          link: "/post",
          image: {
            desktop:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones-400x240.jpg",
            mobile:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones-80x80.jpg",
          },
        },
        {
          name: "'Girls Trip' already surpasses 'Rough Night' in opening weekend",
          category: "Entertainment",
          date: "2",
          link: "/post",
          image: {
            desktop:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-party-400x240.jpg",
            mobile:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-party-80x80.jpg",
          },
        },
        {
          name: "New Season 8 Walking Dead trailer flashes forward in time",
          category: "Entertainment",
          date: "2",
          link: "/post",
          image: {
            desktop:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/walking-dead-400x240.jpg",
            mobile:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/walking-dead-80x80.jpg",
          },
        },
        {
          name: "Mobile Google CEO Promises 11 Daydream-compatible phones",
          category: "Tech",
          date: "2",
          link: "/post",
          image: {
            desktop:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-400x240.jpg",
            mobile:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/vr-headset-80x80.jpg",
          },
        },
        {
          name: "The tremendous importance of owning a perfect piece of clothing",
          category: "Fashion",
          date: "2",
          link: "/post",
          image: {
            desktop:
              "	https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/model-couple-400x240.jpg",
            mobile:
              "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/model-couple-80x80.jpg",
          },
        },
      ],
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

#home {
  position: relative;
  height: 100%;

  section.main-content-home {
    @extend %container;
    display: flex;
    margin-bottom: 60px;

    .main {
      display: contents;
      .trending {
        margin-right: 2.325581395%;
        width: 26.6%; //26.6%

        & > h3 {
          position: relative;
          text-align: center;
          margin-bottom: 15px;
          width: 100%;

          &::before {
            content: "";
            background: #555;
            display: inline-block;
            position: absolute;
            left: 0;
            bottom: 50%;
            width: 100%;
            height: 1px;
            z-index: 0;
          }
        }

        .container {
          position: relative;
          width: 100%;

          .post {
            display: inline-block;
            cursor: pointer;
            background: $color--white;
            width: 100%;
            margin-top: 25px;
            counter-increment: mvp-trend;

            &:hover {
              .img-container {
                img {
                  opacity: 0.8;
                }
              }

              .info-container {
                h2 {
                  opacity: 0.6;
                }
              }
            }

            &:first-child {
              margin-top: 0;
            }

            .img-container {
              background: #000;
              line-height: 0;
              overflow: hidden;
              width: 100%;
              max-height: 135px;

              img {
                opacity: 1;
                width: 100%;
                height: auto;
                transition: 0.25s;

                &.mobile {
                  display: none;
                }
              }
            }

            .info-container {
              position: relative;
              padding: 15px 0 0 15%;

              &::before {
                @include title-font($color: #ccc, $size: 40px);
                content: counter(mvp-trend);
                margin-top: 32px;
                position: absolute;
                top: 0;
                left: 0;
                text-align: center;
                width: 13%;
              }

              h2 {
                @include title-font;
                opacity: 1;
                width: 100%;
                transition: 0.25s;
              }
            }
          }
        }
      }

      .main-posts {
        width: 45.615%;

        .post-main-2 {
          margin-top: 20px;
        }
      }
    }

    .lateral-content {
      margin-left: 20px;
      width: 320px;

      .ad-banner-container {
        line-height: 0;
        margin-bottom: 20px;
        text-align: center;
        width: 100%;
        a {
          display: inline-block;
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .posts-lists {
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
    }
  }

  section.category-2 {
    background: $color--black;
    padding: 40px 0 60px;
    width: 100%;
    margin-bottom: 60px;

    .content {
      @extend %container;
      width: 100%;

      .container {
        display: flex;
        .featured {
          width: 61.66666666666%;
        }

        .lateral {
          margin-left: 1.66666666%;
          width: 36.6666666666%;

          .post {
            display: flex;
            width: 100%;
            margin-bottom: 10px;
            .img-container {
              background: $color--black;
              line-height: 0;
              margin-right: 15px;
              overflow: hidden;
              max-width: 167px;
              img {
                width: 100%;
                height: auto;
                object-fit: cover;
                transition: 0.25s;
              }
            }

            .info-container {
              .category-time {
                .cat {
                  color: $color--primary;
                }
              }

              h2 {
                @include title-font($color: $color--white);
                transition: 0.25s;
              }
            }

            &:hover {
              .img-container {
                img {
                  opacity: 0.8;
                }
              }

              .info-container {
                h2 {
                  opacity: 0.6;
                }
              }
            }
          }
        }
      }
    }
  }

  section.category-1,
  section.category-3 {
    @extend %container;
    margin-bottom: 60px;

    .container {
      display: flex;
      width: 100%;
      .main {
        display: contents;
        width: 100%;
        .featured {
          &.right {
            margin-right: 1.5%;
          }
          &.left {
            margin-left: 1.5%;
          }
          width: 45%;
        }

        .lateral-main {
          width: 28%;
        }
      }

      .lateral {
        width: 320px;
        margin-left: 20px;
        .more {
          @include title-font($color: #ff005b, $size: 14px);
          display: inline-block;
          font-weight: 400;
          line-height: 1;
          text-transform: uppercase;
          text-align: center;
          width: 100%;
          margin-top: 20px;
        }
      }
    }

    &.right {
      .container {
        .main {
          .featured {
            margin-right: 1.5%;
          }
        }
      }
    }

    &.left {
      .container {
        .main {
          .featured {
            margin-left: 1.5%;
          }
        }
      }
    }
  }

  section.category-4 {
    @extend %container;
    margin-bottom: 60px;
    .grid-top,
    .grid-bottom {
      display: grid;
      gap: 20px;
    }
    .grid-top {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20px;
    }
    .grid-bottom {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  section.more-news {
    @extend %container;
  }

  @media screen and (max-width: 1003px) {
    padding-top: 15px;
    section.main-content-home {
      .main {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        .trending {
          margin: 20px 0 0;
          width: 100%;
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            .post {
              margin-top: 0;
            }
          }
        }
        .main-posts {
          width: 100%;
        }
      }

      .lateral-content {
        width: auto;
        min-width: 320px;
      }
    }

    section.category-1,
    section.category-3 {
      .container {
        .main {
          width: 63.8%;

          .featured {
            width: 100%;
            margin-bottom: 20px;
          }

          .lateral-main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 100%;
          }
        }
      }

      &.right {
        .container {
          .main {
            display: block;
            .featured {
              margin-right: 0;
            }
          }
        }
      }

      &.left {
        .container {
          .main {
            display: flex;
            flex-direction: column-reverse;
            .featured {
              margin-left: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 899px) {
    section.main-content-home {
      flex-direction: column;
      .main {
        flex-direction: row-reverse;
        .trending {
          width: 45%;
          margin: 0 0 0 2.747252747%;
          .container {
            display: block;
            .post {
              margin-top: 20px;
            }
          }
        }
        .main-posts {
          width: 100%;
        }
      }
      .lateral-content {
        border-top: 1px solid #ddd;
        margin-top: 20px;
        padding-top: 20px;
        margin-left: 0;
        min-width: 100%;
        .ad-banner-container {
          display: none;
        }
      }
    }

    section.category-2 {
      .content {
        .container {
          flex-direction: column;
          .featured {
            width: 100%;
            margin-bottom: 15px;

            a {
              ::v-deep {
                .img-container {
                  height: 56.9vw !important;
                }
              }
            }
          }

          .lateral {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-left: 0;
            gap: 20px;
            width: 100%;
            .post {
              flex-direction: column;
              .img-container {
                max-width: 100%;
                margin-right: 0;
                margin-bottom: 15px;
              }

              .info-container {
                .category-time {
                  .date {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
    }

    section.category-1,
    section.category-3 {
      .container {
        flex-direction: column;
        .main {
          width: 100%;
          .featured {
            width: 67.15%;
            margin-bottom: 0;
          }

          .lateral-main {
            display: block;
            width: 28%;
          }
        }

        .lateral {
          border-top: 1px solid #ddd;
          margin-top: 20px;
          padding: 20px 0;
          margin-left: 0;
          min-width: 100%;
          width: 100%;
        }
      }

      &.right {
        .container {
          .main {
            display: flex;
            flex-direction: row;
            .featured {
              margin-right: 2%;
            }
          }
        }
      }

      &.left {
        .container {
          .main {
            flex-direction: row;
            .featured {
              margin-left: 2%;
            }
          }
        }
      }
    }

    section.category-4 {
      .grid-top {
        grid-template-columns: repeat(2, 1fr);
        a {
          ::v-deep {
            .img-container {
              height: max(180px, 26vw) !important;
            }

            .info-container {
              h2 {
                font-size: 1.2rem !important;
              }
            }
          }
        }
      }
      .grid-bottom {
        grid-template-columns: repeat(2, 1fr);
        a {
          ::v-deep {
            max-width: 100%;

            .img-container {
              height: 26vw;
              max-height: initial;
            }

            .info-container {
              h2 {
                font-size: 1.1rem !important;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 707px) {
    section.main-content-home {
      .main {
        .trending {
          width: 50%;
          .container {
            .post {
              .info-container {
                padding: 10px 0 0 15%;
                &::before {
                  @include title-font($color: #ccc, $size: 34px);
                }
                h2 {
                  @include title-font($size: 1rem);
                }

                .category-time .date {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 659px) {
    section.category-2 {
      .content {
        .container {
          flex-direction: column;
          .featured {
            width: 100%;
            margin-bottom: 15px;
          }

          .lateral {
            display: block;
            margin-left: 0;
            width: 100%;
            .post {
              flex-direction: row;
              margin-bottom: 15px;
              .img-container {
                max-width: 167px;
                margin-right: 15px;
                margin-bottom: 0;
              }

              .info-container {
                width: 100%;
                .category-time {
                  .date {
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    section.main-content-home {
      .main {
        flex-direction: column-reverse;

        .trending {
          margin: 20px 0 0;
          width: 100%;
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            .post {
              margin-top: 0;
            }
          }
        }
      }
    }

    section.category-1,
    section.category-3 {
      .container {
        .main {
          width: 100%;
          flex-direction: column;
          .featured {
            width: 100%;
            margin-bottom: 20px;
          }

          .lateral-main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 100%;
          }
        }

        .lateral {
          margin-top: 0;
        }
      }

      &.right {
        .container {
          .main {
            flex-direction: column;
            .featured {
              margin-right: 0;
            }
          }
        }
      }

      &.left {
        .container {
          .main {
            flex-direction: column-reverse;
            .featured {
              margin-left: 0;
            }
          }
        }
      }
    }

    section.category-4 {
      .grid-top {
        grid-template-columns: repeat(1, 1fr);
        a {
          ::v-deep {
            .img-container {
              height: 300px !important;
            }

            .info-container {
              h2 {
                font-size: 1.6rem !important;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    padding-top: 0px;
    section.main-content-home {
      .main {
        .trending {
          .container {
            display: block;
            .post {
              display: flex;
              margin: 0 0 15px 0;
              width: 100%;

              .img-container {
                background: none;
                margin-right: 4.5454545454%;
                min-width: 80px;
                height: 80px;
                width: auto;
                img {
                  width: 100%;
                  height: 100%;

                  &.desktop {
                    display: none;
                  }

                  &.mobile {
                    display: block;
                  }
                }
              }

              .info-container {
                padding: 0;
                width: 100%;
                &::before {
                  display: none;
                }

                .category-time .date {
                  display: inline-block;
                }
              }
            }
          }
        }

        .main-posts {
          .post-main-1 {
            width: 100vw;
            margin-left: -10px;
          }
        }
      }
    }

    section.category-2 {
      .content {
        .container {
          .featured {
            a {
              ::v-deep {
                .info-container {
                  h2 {
                    font-size: 1.2em !important;
                  }
                }
              }
            }
          }

          .lateral {
            .post {
              .img-container {
                max-width: 80px;
                height: 80px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    section.category-1,
    section.category-3 {
      .container {
        .main {
          .lateral-main {
            display: block;
          }
        }
      }
    }

    section.category-4 {
      .grid-top {
        a {
          ::v-deep {
            .img-container {
              height: 52vw !important;
              min-height: 175px;
            }

            .info-container {
              h2 {
                font-size: 1.1rem !important;
              }
            }
          }
        }
      }
      .grid-bottom {
        display: block;
        a {
          ::v-deep {
            .img-container {
              height: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
