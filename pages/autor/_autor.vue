<template>
  <div id="autor-container">
    <div class="autor-info-container">
      <div class="thumb">
        <img
          alt=""
          src="https://secure.gravatar.com/avatar/ace9a57f1346d0657bcedfa39507830e?s=200&amp;d=mm&amp;r=g"
          height="200"
          width="200"
          loading="lazy"
        />
      </div>

      <div class="content">
        <h1>Zox News Staff</h1>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
        <ul class="social-medias">
          <a
            href="http://www.facebook.com/envato"
            alt="Facebook"
            target="_blank"
          >
            <li class="fab fa-facebook-f"></li>
          </a>
          <a
            href="https://www.twitter.com/mvpthemes"
            alt="Twitter"
            target="_blank"
          >
            <li class="fab fa-twitter"></li>
          </a>
          <a
            href="http://www.pinterest.com/envato"
            alt="Pinterest"
            target="_blank"
          >
            <li class="fab fa-pinterest-p"></li>
          </a>
          <a
            href="http://www.instagram.com/envato"
            alt="Instagram"
            target="_blank"
          >
            <li class="fab fa-instagram"></li>
          </a>
          <a
            href="http://www.linkedin.com/company/envato"
            alt="LinkedIn"
            target="_blank"
          >
            <li class="fab fa-linkedin"></li>
          </a>
        </ul>
      </div>
    </div>
    <PostList
      disabledImage
      title="STORIES BY ZOX NEWS STAFF"
      :posts="lateralItens"
    />
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
#autor-container {
  @extend %container;
  .autor-info-container {
    display: flex;
    margin-bottom: 30px;
    padding: 40px 5%;
    .thumb {
      border: 8px solid #ddd;
      min-width: 200px;
      width: 200px;
      height: 200px;
      margin-right: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      h1 {
        @include title-font($size: 3.3rem, $color: $color--black);
        font-weight: 900;
        margin-bottom: 15px;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 150%;
        width: 100%;
        color: #555;
        margin-bottom: 20px;
      }

      .social-medias {
        a {
          li {
            background: #888;
            border-radius: 50%;
            color: #fff;
            display: inline-block;
            font-size: 20px;
            line-height: 1;
            margin-right: 8px;
            padding-top: 10px;
            text-align: center;
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 899px) {
    .autor-info-container {
      padding: 20px 3%;
      .thumb {
        min-width: 150px;
        width: 150px;
        height: 150px;
        margin-right: 30px;
      }

      .content {
        h1 {
          @include title-font($size: 2.3rem, $color: $color--black);
          font-weight: 900;
          margin-bottom: 15px;
        }

        p {
          font-size: 1rem;
          line-height: 150%;
          margin-bottom: 15px;
        }

        .social-medias {
          a {
            li {
              font-size: 15px;
              margin-right: 4px;
              padding-top: 8px;
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .autor-info-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 20px 3%;
      .thumb {
        margin-right: 0;
        margin-bottom: 20px;
      }

      .content {
        h1 {
          @include title-font($size: 2.3rem, $color: $color--black);
          font-weight: 900;
          text-align: center;
        }

        p {
          font-size: 0.9rem;
          text-align: center;
        }

        .social-medias {
          text-align: center;
          a {
            li {
              font-size: 20px;
              margin-right: 4px;
              padding-top: 10px;
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
