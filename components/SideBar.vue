<template>
  <div
    id="sidebar-component"
    :class="{
      show: this.show,
    }"
  >
    <div class="sidebar-fade" v-on:click="$emit('onHide')" />

    <div class="sidebar">
      <div class="sidebar-header">
        <div class="empty-div" />
        <img
          src="https://mvpthemes.com/zoxnews/wp-content/themes/zox-news/images/logos/logo-nav.png"
          alt="Zox News"
        />
        <div class="close" v-on:click="$emit('onHide')">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav class="sidebar-container">
        <ul>
          <li
            v-for="(menuitem, index) in menuItems"
            :key="index"
            :class="{
              hasDropDown: menuitem.dropDownItems,
            }"
            v-on:click="toogleDropDown"
          >
            <nuxt-link :to="menuitem.path">{{ menuitem.name }}</nuxt-link>
            <ul v-if="menuitem.dropDownItems" class="submenu">
              <li
                v-for="(dropdown, index) in menuitem.dropDownItems"
                :key="index"
                :class="{
                  hasDropDown: dropdown.subMenu,
                }"
                v-on:click="toogleDropDown"
              >
                <nuxt-link :to="dropdown.link">
                  {{ dropdown.name }}
                </nuxt-link>
                <ul v-if="dropdown.subMenu" class="submenu">
                  <li
                    v-for="(subMenuItem, index) in dropdown.subMenu"
                    :key="index"
                    c
                  >
                    <nuxt-link class="sub-menu-item" :to="subMenuItem.link">
                      {{ subMenuItem.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="sidebar-footer">
        <span class="connect-us">Connect with us</span>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="fab fa-facebook-f"></a></li>
          <li><a href="#" target="_blank" class="fab fa-twitter"></a></li>
          <li><a href="#" target="_blank" class="fab fa-pinterest-p"></a></li>
          <li><a href="#" target="_blank" class="fab fa-instagram"></a></li>
          <li><a href="#" target="_blank" class="fab fa-tiktok"></a></li>
          <li><a href="#" target="_blank" class="fab fa-youtube"></a></li>
          <li><a href="#" target="_blank" class="fab fa-linkedin"></a></li>
          <li><a href="#" target="_blank" class="fab fa-tumblr"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    menuItems: [],
    show: Boolean,
  },

  methods: {
    toogleDropDown(e) {
      e.stopPropagation();
      const dropdown = e.currentTarget;
      const className = "showDropdown";
      dropdown.classList.toggle(className);
    },
  },
};
</script>

<style scoped lang="scss">
#sidebar-component {
  transition: 0.25s;

  &.show {
    .sidebar {
      transform: translateX(0);
    }

    .sidebar-fade {
      opacity: 0.7;
      height: 100%;
    }
  }

  .sidebar-fade {
    background: #000;
    cursor: pointer;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    opacity: 0;
    height: 0;
  }

  .sidebar {
    background: #000000;
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    max-width: 370px;
    height: 100%;
    z-index: 999999;
    box-shadow: 0 0 16px 0 rgb(0 0 0 / 70%);
    padding: 30px 20px;
    transition: 0.25s;
    transform: translateX(-370px);

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30px;
      margin-bottom: 20px;

      img {
        height: 100%;
      }

      .close,
      .empty-div {
        width: 30px;
        height: 20px;
      }

      .close {
        float: left;
        position: relative;
        cursor: pointer;

        span {
          display: block;
          border-radius: 2px;
          height: 3px;
          position: absolute;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
          background: #777777;

          &:nth-child(1),
          &:nth-child(4) {
            top: 0.5px;
            left: 50%;
            width: 0%;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }

          &:nth-child(2),
          &:nth-child(3) {
            top: 8px;
            width: 30px;
          }
        }
      }
    }

    .sidebar-container {
      display: flex;
      width: 100%;
      max-height: 70%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        -webkit-border-radius: 6px;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 6px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.5);
      }

      &::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(255, 255, 255, 0.1);
      }

      ul {
        position: relative;
        width: 100%;
        li {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          float: left;
          position: relative;
          width: 100%;

          &:first-child {
            border-top: none;
          }
          a {
            color: #fff;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            line-height: 1;
            padding: 14px 0;
            text-transform: uppercase;
          }

          &.hasDropDown {
            & > a::after {
              content: "+";
              font-family: "Open Sans", sans-serif;
              font-size: 32px;
              font-weight: 700;
              position: absolute;
              right: 10px;
              top: 7px;
              color: $color--primary;
            }
            & > ul {
              display: none;
            }
            &.showDropdown {
              & > a {
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                width: 100%;
                &::after {
                  content: "_";
                  right: 14px;
                  top: -9px;
                }
              }

              & > ul {
                display: block;
              }
            }
          }

          .submenu {
            padding-left: 4%;
          }
        }
      }
    }

    .sidebar-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 30px;
      .connect-us {
        display: inline-block;
        color: $color--gray-1;
        font-size: 0.7rem;
        font-weight: 400;
        line-height: 1;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      .social-media-list {
        text-align: center;

        li {
          display: inline-block;
          margin-right: 2px;

          &:last-child {
            margin-right: 0px;
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 14px;
            color: $color--white;
            background: rgba(255, 255, 255, 0.15);
            line-height: 1;
            text-align: center;
            width: 32px;
            height: 32px;

            &:hover {
              color: $color--primary;
            }
          }
        }
      }
    }
  }
}
</style>
