<template>
  <footer id="main-footer">
    <div class="foot-top">
      <div class="container">
        <nuxt-link class="logo" to="/">
          <img
            src="https://mvpthemes.com/zoxnews/wp-content/themes/zox-news/images/logos/logo-large.png"
            alt="Zox News"
          />
        </nuxt-link>
        <ul class="social-medias">
          <li><a href="#" target="_blank" class="fab fa-facebook-f"></a></li>
          <li><a href="#" target="_blank" class="fab fa-twitter"></a></li>
          <li><a href="#" target="_blank" class="fab fa-pinterest-p"></a></li>
          <li><a href="#" target="_blank" class="fab fa-instagram"></a></li>
          <li><a href="#" target="_blank" class="fab fa-tiktok"></a></li>
          <li><a href="#" target="_blank" class="fab fa-youtube"></a></li>
          <li><a href="#" target="_blank" class="fab fa-linkedin"></a></li>
          <li><a href="#" target="_blank" class="fab fa-tumblr"></a></li>
        </ul>

        <ul class="menu-items">
          <li>
            <nuxt-link to="/">Buy theme</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Entertainnemt</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Politics</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Fashion</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Sports</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Tech</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Business</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-bot">
      <div class="container">
        <p>
          Copyright © 2022 Zox News Theme. Theme by MVP Themes, powered by
          <a href="https://wordpress.org/" target="_blank">WordPress</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/partials/_placeholders.scss";

#main-footer {
  background: #111;
  .container {
    @extend %container;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .foot-top {
    padding: 40px 0;

    .logo {
      margin-bottom: 20px;
    }
    .social-medias {
      width: 100%;
      text-align: center;
      margin: 20px;

      li {
        display: inline-block;
        margin: 0 10px 5px 0;

        a {
          background: rgba(255, 255, 255, 0.15);
          color: $color--white;
          border-radius: 50%;
          display: inline-block;
          font-size: 20px;
          padding-top: 10px;
          text-align: center;
          width: 40px;
          height: 40px;
        }
      }
    }

    .menu-items {
      text-align: center;
      width: 100%;
      li {
        display: inline-block;
        margin: 0 0 10px 10px;
        &:first-child {
          margin-left: 0;
        }
        a {
          @include title-font($color: #888, $size: 0.9rem);
          font-weight: 400;
          text-transform: uppercase;
          &:hover {
            color: $color--white;
          }
        }
      }
    }
  }

  .foot-bot {
    background: #000;
    padding: 20px 0;

    p {
      text-align: center;
      color: $color--gray-1;
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.4;
    }

    a {
      color: $color--primary;
      &:hover {
        color: $color--white;
      }
    }
  }

  @media screen and (max-width: 479px) {
    .foot-top {
      padding: 30px 0;
      .social-medias {
        li {
          a {
            width: 30px;
            height: 30px;
            font-size: 16px;
            padding-top: 7px;
          }
        }
      }

      .menu-items {
        li {
          a {
            font-size: 0.8rem;
          }
        }
      }
    }
    .foot-bot {
      p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
