<template>
  <div id="columnist-container">
    <div class="columnists">
      <div class="widget-head">
        <h4><span class="pop-head">Meet the team</span></h4>
      </div>
      <div class="grid">
        <section v-for="(columnist, index) in columnists" :key="index">
          <div class="thumb">
            <img
              alt=""
              src="https://secure.gravatar.com/avatar/ace9a57f1346d0657bcedfa39507830e?s=150&amp;d=mm&amp;r=g"
              class="avatar"
              height="150"
              width="150"
              loading="lazy"
            />
          </div>
          <a
            class="name"
            href="https://mvpthemes.com/zoxnews/author/mvpthemes/"
          >
            Zox News Staff
          </a>
          <h2 class="mvp-authors-latest">
            <a
              href="https://mvpthemes.com/zoxnews/illinois-financial-crisis-could-bring-the-state-to-a-halt/"
              rel="bookmark"
            >
              Illinois' financial crisis could bring the state to a halt
            </a>
          </h2>
        </section>
      </div>
    </div>

    <AsidePosts />
  </div>
</template>

<script>
export default {
  name: "columnist",
  data() {
    return {
      columnists: ["", "", ""],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/partials/_placeholders.scss";
#columnist-container {
  @extend %container;
  display: flex;
  padding-top: 10px;
  padding-bottom: 100px;
  .columnists {
    flex: 1;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        .thumb {
          border: 5px solid #ddd;
          border-radius: 50%;
          width: 150px;
          height: 150px;
          overflow: hidden;
          margin-bottom: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .name {
          @include title-font($size: 1.6rem);
          text-align: center;
          border-bottom: 1px solid $color--primary;
          display: inline-block;
          margin-bottom: 15px;
          padding-bottom: 15px;
        }

        h2 {
          text-align: center;
          a {
            @include title-font($size: 1.2rem, $color: $color--black);
            font-weight: 400;
          }
        }
      }
    }
  }

  @media screen and (max-width: 899px) {
    flex-direction: column;
    padding-bottom: 60px;
    .columnists {
      margin-bottom: 100px;
    }
  }

  @media screen and (max-width: 600px) {
    .columnists {
      margin-bottom: 60px;
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media screen and (max-width: 479px) {
    padding-top: 15px;
    .columnists {
      margin-bottom: 0;
      .grid {
        grid-template-columns: repeat(1, 1fr);

        section {
          border-top: 1px solid #ddd;
          padding: 18px 0;
          &:first-child {
            border-top: none;
          }
          .thumb {
            width: 120px;
            height: 120px;
            margin-bottom: 10px;
          }

          .name {
            @include title-font($size: 1.4rem);
            margin-bottom: 10px;
            padding-bottom: 10px;
          }

          h2 {
            padding: 0 30px;
            a {
              @include title-font($size: 1rem, $color: $color--black);
              font-weight: 400;
            }
          }
        }
      }
    }
  }
}
</style>
