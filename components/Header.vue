<template>
  <div>
    <Search :show="showSearch" v-on:onHide="hideSearch()" />
    <SideBar
      :menuItems="menuItems"
      :show="showSideBar"
      v-on:onHide="hideSideBar()"
    />
    <header id="main-header">
      <nav>
        <div class="main-nav-top">
          <div>
            <div class="hambuguer" v-on:click="openSideBar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div v-if="!title ? true : !this.scrolled" class="social-medias">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span class="fab fa-facebook-f" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span class="fab fa-twitter" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span class="fab fa-instagram" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span class="fab fa-youtube" />
              </a>
            </div>

            <div
              class="nav-top-mid"
              :class="{
                IsPost: !!title && this.scrolled,
              }"
            >
              <nuxt-link to="/" class="nav-logo-reg">
                <img
                  src="https://mvpthemes.com/zoxnews/wp-content/themes/zox-news/images/logos/logo-large.png"
                  alt="Zox News"
                />
              </nuxt-link>
              <nuxt-link to="/" class="nav-logo-small">
                <img
                  src="https://mvpthemes.com/zoxnews/wp-content/themes/zox-news/images/logos/logo-nav.png"
                  alt="Zox News"
                />
              </nuxt-link>

              <h2 v-if="!title ? false : this.scrolled">
                {{ title }}
              </h2>
            </div>

            <div v-if="!title ? true : !this.scrolled" class="nav-top-right">
              <span class="woo-cart-icon fa fa-shopping-cart" />
              <nuxt-link
                to="/cart"
                class="woo-cart"
                title="View your shopping cart"
              >
                <span class="woo-cart-num">0</span>
              </nuxt-link>
            </div>

            <span
              class="fa fa-search fa-2 search-click"
              v-on:click="openSearch"
            />
          </div>
        </div>

        <div class="main-nav-bot-cont">
          <div class="main-box">
            <div class="hambuguer" v-on:click="openSideBar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="nav-menu">
              <ul>
                <li
                  v-for="(item, index) in menuItems"
                  :key="index"
                  :class="{
                    hasDropDown: item.dropDownItems,
                  }"
                >
                  <nuxt-link class="menu-item" :to="item.path">
                    {{ item.name }}
                  </nuxt-link>
                  <div v-if="item.news" class="mega-dropdown">
                    <div>
                      <ul>
                        <li
                          v-for="(news_item, index) in item.news"
                          :key="index"
                        >
                          <nuxt-link to="/">
                            <div class="img-container">
                              <img
                                width="400"
                                height="240"
                                :src="news_item.image"
                                loading="lazy"
                              />
                              <div
                                v-if="news_item.isPhoto || news_item.isVideo"
                                class="icons"
                              >
                                <i
                                  v-if="news_item.isPhoto"
                                  class="fa fa-camera fa-3"
                                />
                                <i
                                  v-if="news_item.isVideo"
                                  class="fa fa-play fa-3"
                                />
                              </div>
                            </div>
                            <p>
                              {{ news_item.title }}
                            </p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <ul v-if="item.dropDownItems" class="submenu">
                    <li
                      v-for="(dropdown, index) in item.dropDownItems"
                      :key="index"
                      :class="{
                        hasDropDown: dropdown.subMenu,
                      }"
                    >
                      <nuxt-link class="sub-menu-item" :to="dropdown.link">
                        {{ dropdown.name }}
                      </nuxt-link>
                      <ul v-if="dropdown.subMenu" class="submenu">
                        <li
                          v-for="(subMenuItem, index) in dropdown.subMenu"
                          :key="index"
                        >
                          <nuxt-link
                            class="sub-menu-item"
                            :to="subMenuItem.link"
                          >
                            {{ subMenuItem.name }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="nav-search-container" v-on:click="openSearch">
              <span class="mvp-nav-search-but fa fa-search fa-2" />
            </div>
          </div>
        </div>
      </nav>
    </header>
    <ScrollToTop />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  data() {
    return {
      showSideBar: false,
      showSearch: false,
      scrolled: false,
      menuItems: [
        {
          name: "Features",
          path: "/",
          dropDownItems: [
            {
              name: "Featured Layouts",
              link: "/",
              subMenu: [
                { name: "Featured 1", link: "/" },
                { name: "Featured 2", link: "/" },
                { name: "Featured 3", link: "/" },
                { name: "Featured 4", link: "/" },
                { name: "Featured 5", link: "/" },
                { name: "Featured 6", link: "/" },
              ],
            },
            {
              name: "Post Layouts",
              link: "/",
              subMenu: [
                { name: "Post Template 1", link: "/" },
                { name: "Post Template 2", link: "/" },
                { name: "Post Template 3", link: "/" },
                { name: "Post Template 4", link: "/" },
                { name: "Post Template 5", link: "/" },
                { name: "Post Template 6", link: "/" },
                { name: "Post Template 8", link: "/" },
              ],
            },
            {
              name: "Page Layouts",
              link: "/",
              subMenu: [
                { name: "Meet The Team", link: "/" },
                { name: "Full-Width Page", link: "/" },
                { name: "Latest News", link: "/" },
              ],
            },
            {
              name: "Entertainment Skin",
              link: "/",
            },
            {
              name: "Small Navigation",
              link: "/",
            },
            {
              name: "Wallpaper Ad",
              link: "/",
            },
            {
              name: "RTL Homepage",
              link: "/",
            },
          ],
        },
        {
          name: "Buy Theme",
          path: "/",
          dropDownItems: null,
        },
        {
          name: "Entertainnemt",
          path: "/",
          news: [
            {
              isPhoto: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-400x240.jpg",
              title:
                "9 Celebrities who have spoken out about being photoshopped",
            },
            {
              isPhoto: false,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-brunette2-400x240.jpg",
              title: "Emily Ratajkowski channels back-to-school style",
            },
            {
              link: "/",
              isPhoto: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-400x240.jpg",
              title:
                "9 Celebrities who have spoken out about being photoshopped",
            },
            {
              isPhoto: false,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-brunette2-400x240.jpg",
              title: "Emily Ratajkowski channels back-to-school style",
            },
            {
              isPhoto: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-400x240.jpg",
              title:
                "9 Celebrities who have spoken out about being photoshopped",
            },
          ],
        },
        {
          name: "Politics",
          path: "/",
          news: [
            {
              isVideo: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg",
              title:
                "Mayors agree, Congress should invest in affordable housing",
            },
            {
              isVideo: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg",
              title:
                "Mayors agree, Congress should invest in affordable housing",
            },
            {
              isVideo: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
          ],
        },
        {
          name: "Fashion",
          path: "/",
          news: [
            {
              isPhoto: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-smile7-400x240.jpg",
              title: "These '90s fashion trends are making a comeback in 2017",
            },
            {
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/man-fedora-400x240.jpg",
              link: "/",
              title:
                "According to Dior Couture, this taboo fashion accessory is back",
            },
            {
              isPhoto: true,
              link: "/",

              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-smile7-400x240.jpg",
              title: "These '90s fashion trends are making a comeback in 2017",
            },
            {
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/man-fedora-400x240.jpg",
              link: "/",
              title:
                "According to Dior Couture, this taboo fashion accessory is back",
            },
            {
              link: "/",
              isPhoto: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-smile7-400x240.jpg",
              title: "These '90s fashion trends are making a comeback in 2017",
            },
          ],
        },
        {
          name: "Sports",
          path: "/",
          news: [
            {
              isVideo: true,
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg",
              title:
                "Mayors agree, Congress should invest in affordable housing",
            },
            {
              link: "/",
              isVideo: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg",
              title:
                "Mayors agree, Congress should invest in affordable housing",
            },
            {
              link: "/",
              isVideo: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
          ],
        },
        {
          name: "Tech",
          path: "/",
          news: [
            {
              link: "/",
              isVideo: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg",
              title:
                "Mayors agree, Congress should invest in affordable housing",
            },
            {
              link: "/",
              isVideo: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/apartments-400x240.jpg",
              title:
                "Mayors agree, Congress should invest in affordable housing",
            },
            {
              link: "/",
              isVideo: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/politics-400x240.jpg",
              title:
                "Illinois' financial crisis could bring the state to a halt",
            },
          ],
        },
        {
          name: "Business",
          path: "/",
          news: [
            {
              link: "/",
              isPhoto: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-400x240.jpg",
              title:
                "9 Celebrities who have spoken out about being photoshopped",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-brunette2-400x240.jpg",
              title: "Emily Ratajkowski channels back-to-school style",
            },
            {
              link: "/",
              isPhoto: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-400x240.jpg",
              title:
                "9 Celebrities who have spoken out about being photoshopped",
            },
            {
              link: "/",
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-brunette2-400x240.jpg",
              title: "Emily Ratajkowski channels back-to-school style",
            },
            {
              link: "/",
              isPhoto: true,
              image:
                "https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/woman-skate-400x240.jpg",
              title:
                "9 Celebrities who have spoken out about being photoshopped",
            },
          ],
        },
        {
          name: "Shop",
          path: "/",
        },
      ],
      lastScrollTop: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
    window.addEventListener("scroll", this.scrollUpAndDown, false);
  },

  methods: {
    scrollFunction() {
      const bannerHeight = document.querySelector(
        "#leader-wrap .mvp-leader1"
      ).offsetHeight;
      const headerHeight = document.querySelector("#main-header").offsetHeight;

      const size = headerHeight + bannerHeight - 50;

      try {
        if (
          document.body.scrollTop > size ||
          document.documentElement.scrollTop > size
        ) {
          document.getElementById("main-header").classList.add("scroll-header");
          this.scrolled = true;
        } else {
          document
            .getElementById("main-header")
            .classList.remove("scroll-header");
          this.scrolled = false;
        }
      } catch (e) {}
    },

    scrollUpAndDown() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        // downscroll code
        document.querySelector(
          "#main-header.scroll-header .main-nav-bot-cont"
        ).style.marginTop = "-50px";
      } else {
        // upscroll code
        document.querySelector(
          "#main-header.scroll-header .main-nav-bot-cont"
        ).style.marginTop = "0px";
      }

      this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },

    openSideBar() {
      this.showSideBar = true;
    },

    hideSideBar() {
      this.showSideBar = false;
    },

    openSearch() {
      this.showSearch = true;
    },

    hideSearch() {
      this.showSearch = false;
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollFunction);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/partials/_placeholders.scss";

#main-header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;

  nav {
    .hambuguer {
      cursor: pointer;
      width: 30px;
      height: 20px;
      span {
        display: block;
        height: 3px;
        position: absolute;
        border-radius: 2px;
        background: $color--default-black;
        transition: background 0.25s ease-in-out;

        &:nth-child(1) {
          width: 30px;
        }

        &:nth-child(2) {
          margin-top: 8px;
          width: 24px;
        }

        &:nth-child(3) {
          margin-top: 16px;
          width: 18px;
        }
      }

      &:hover {
        span {
          background: $color--primary !important;
        }
      }
    }

    .main-nav-top {
      position: relative;
      background: $color--black;

      > div {
        @extend %container;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 15px;
        padding-bottom: 15px;
        width: 100%;
        height: auto;

        .hambuguer {
          display: none;
          span {
            background: $color--gray-1;
          }
        }

        .social-medias {
          width: 220px;
          a {
            span {
              background: rgba(255, 255, 255, 0.15);
              color: $color--white;
              border-radius: 50%;
              display: inline-block;
              font-size: 20px;
              margin-right: 10px;
              padding-top: 10px;
              text-align: center;
              width: 40px;
              height: 40px;
            }

            &:nth-child(1) span:hover {
              background: #3b5997;
            }

            &:nth-child(2) span:hover {
              background: #00aced;
            }

            &:nth-child(3) span:hover {
              background: linear-gradient(
                45deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%
              );
            }

            &:nth-child(4) span:hover {
              background: #f00;
            }
          }
        }

        .nav-top-mid {
          &.IsPost {
            display: flex;
            align-items: center;
            width: 100%;
            overflow: hidden;
            h2 {
              color: white;
              margin-left: 20px;
              white-space: nowrap;
              font-size: 23px;
            }
          }
          .nav-logo-reg {
            height: 60px;
          }

          .nav-logo-small {
            display: none;
          }
        }

        .nav-top-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 220px;
          span.woo-cart-icon {
            color: rgba(255, 255, 255, 0.25);
            font-size: 20px;
            margin-right: 10px;
          }
          .woo-cart {
            background-color: rgba(255, 255, 255, 0.25);
            border-radius: 50%;
            padding: 5px 10px;
            span.woo-cart-num {
              color: $color--white;
              font-size: 12px;
              font-weight: 400;
              text-align: center;
            }
          }
        }

        .search-click {
          display: none;
          color: $color--gray-1;
          padding: 3px 0 7px;
          cursor: pointer;
          font-size: 20px;
          transition: color 0.25s;
          &:hover {
            color: $color--primary;
          }
        }
      }
    }

    .main-nav-bot-cont {
      width: 100%;
      height: 50px;
      background: $color--white;
      backface-visibility: hidden;
      position: relative;
      .main-box {
        @extend %container;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .nav-menu {
          display: flex;
          & > ul {
            display: flex;
            width: 100%;
            li {
              display: inline-block;
              .menu-item {
                @include title-font($color: $color--default-black, $size: 14px);
                position: relative;
                padding: 15px 12px;
                font-weight: 500;
                text-transform: uppercase;
              }

              &.hasDropDown {
                position: relative;

                .menu-item::after {
                  position: absolute;
                  border-style: solid;
                  border-width: 3px 3px 0 3px;
                  content: "";
                  top: 50%;
                  right: 0;
                  border-color: $color--default-black transparent transparent
                    transparent;
                }
              }

              &:hover {
                z-index: 9000;

                .menu-item {
                  z-index: 1;
                  border-bottom: 5px solid $color--primary;
                }

                .mega-dropdown {
                  opacity: 1;
                  overflow: visible;
                  transform: translateY(0);
                  height: auto;
                }

                .submenu {
                  opacity: 1;
                  overflow: visible;
                  transform: translateY(0);
                  height: auto;
                }
              }

              .mega-dropdown {
                opacity: 0;
                background: $color--white;
                border-top: 1px solid #ddd;
                box-shadow: 0 10px 10px 0 rgb(0 0 0 / 20%);
                width: 100%;
                top: 50px;
                height: 0;
                overflow: hidden;
                position: absolute;
                left: 0;
                transform: translateY(-999px);
                transition: opacity 0.2s;
                & > div {
                  @extend %container;
                  height: 100%;
                  ul {
                    display: flex;
                    li {
                      overflow: hidden;
                      padding: 20px 0 20px;
                      margin-left: 1.6666666666%;
                      width: 18.66666666666%;
                      a {
                        .img-container {
                          position: relative;
                          margin-bottom: 10px;
                          width: 100%;
                          background: $color--black;
                          max-height: 130px;
                          overflow: hidden;
                          img {
                            width: 100%;
                            height: 100%;
                            transition: 0.25s;
                          }

                          .icons {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: absolute;
                            top: 15px;
                            left: 15px;
                            width: 28px;
                            height: 28px;
                            font-size: 12px;
                            border-radius: 50%;
                            background: $color--primary;
                            color: $color--black;
                          }
                        }

                        p {
                          @include title-font($size: 1em);
                          font-weight: 400;
                          transition: 0.25s;
                        }
                      }

                      &:first-child {
                        margin-left: 0;
                      }

                      &:hover {
                        a {
                          .img-container {
                            img {
                              opacity: 0.8;
                            }
                          }

                          p {
                            opacity: 0.6;
                          }
                        }
                      }
                    }
                  }
                }
              }

              .submenu {
                opacity: 0;
                position: absolute;
                backface-visibility: hidden;
                background: $color--white;
                box-shadow: 0 10px 10px 0 rgb(0 0 0 / 20%);
                top: 37px;
                left: 0;
                overflow: hidden;
                max-width: 200px;
                height: 0;
                overflow: visible;
                transform: translateY(-999px);
                transition: opacity 0.2s;

                li {
                  display: block;
                  float: left;
                  position: relative;
                  width: 100%;
                  a {
                    float: left;
                    background: $color--white;
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                    color: $color--black;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 1.1;
                    padding: 12px 20px;
                    width: 160px;
                    transition: background 0.25s;
                    &:hover {
                      background: rgba(0, 0, 0, 0.1);
                    }
                  }
                  .submenu {
                    opacity: 0;
                    transform: translateY(-999px);
                  }
                  &.hasDropDown {
                    position: relative;

                    .sub-menu-item::after {
                      border-color: transparent transparent transparent #444;
                      border-style: solid;
                      border-width: 3px 0 3px 3px;
                      content: "";
                      position: absolute;
                      top: 14px;
                      right: 10px;
                    }
                  }
                  &:hover {
                    .submenu {
                      opacity: 1;
                      position: absolute;
                      top: 0;
                      left: 160px;
                      z-index: 1;
                      transform: translateY(0);
                      li .sub-menu-item::after {
                        display: none;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .nav-search-container {
          display: flex;
          span {
            width: 50px;
            text-align: right;
            cursor: pointer;
            font-size: 20px;
            line-height: 1;
            padding: 15px 0;
            color: $color--default-black;
            transition: color 0.25s;
            &:hover {
              color: $color--primary;
            }
          }
        }
      }
    }
  }

  &.scroll-header {
    position: fixed;
    top: 0;
    width: 100%;
    animation: 0.4s ease-in transition;
    nav {
      .main-nav-top {
        position: relative;
        z-index: 1;
        > div {
          .nav-top-mid {
            .nav-logo-reg {
              display: none;
            }
            .nav-logo-small {
              display: block;
            }
          }
        }

        .main-nav-bot-cont {
          display: none;
        }
      }

      .main-nav-bot-cont {
        transition: margin-top 0.4s;
        margin-top: -50px;
        box-shadow: 0 0 16px 0 rgb(0 0 0 / 20%);
      }
    }

    @keyframes transition {
      from {
        transform: translateY(-94px);
      }
      to {
        transform: translateY(0);
      }
    }
  }

  @media screen and (max-width: 940px) {
    nav {
      .main-nav-top {
        > div {
          padding-top: 10px;
          padding-bottom: 10px;
          .hambuguer {
            display: block;
          }

          .social-medias {
            display: none;
          }

          .nav-top-mid {
            .nav-logo-reg {
              display: none;
            }
            .nav-logo-small {
              display: block;
            }

            &.IsPost {
              display: block;
              width: auto;
              h2 {
                display: none;
              }
            }
          }

          .nav-top-right {
            display: none;
          }

          .search-click {
            display: block;
          }
        }

        .main-nav-bot-cont {
          display: none;
        }
      }
      .main-nav-bot-cont {
        display: none;
      }
    }
  }
}
</style>
