<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    getImagePath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="bgcolor">
    <div class="contanerSize">
      <div class="title">
        <div class="heading">
          <h1>Recent Articles</h1>
          <div class="subheading">READ THE LATEST ENTRIES</div>
        </div>
        <div class="btn-article">
          <a href="#"> All Articles</a>
        </div>
      </div>
      <div class="cardArticlesBox">
        <div
          class="recent-article"
          v-for="article in store.mainArticle"
          :key="article.id"
        >
          <img :src="getImagePath(article.image)" alt="" />
          <div class="content">
            <h3>{{ article.title }}</h3>
            <span class="subtitle">
              {{ article.writer }}
              {{ article.date }}
              {{ article.categories }}
              {{ article.comment }}
            </span>
            <p>{{ article.text }}</p>
          </div>
        </div>

        <div class="card-box">
          <div
            class="card"
            v-for="articles in store.ArrArticles"
            :key="articles.id"
          >
            <img :src="getImagePath(articles.image)" alt="" />
            <div class="content">
              <h3>{{ articles.title }}</h3>
              <span class="subtitle">
                {{ articles.writer }}
                {{ articles.date }}
                {{ articles.categories }}
                {{ articles.comment }}
              </span>
              <p>{{ articles.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;
.bgcolor {
  background-color: $bg-color;
}

.contanerSize {
  @include container-size;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 2.5rem;
    margin-top: 3rem;

    .subheading {
      font-size: 0.8rem;
      color: #49a987;
    }
  }

  .btn-article a {
    text-decoration: none;
    padding: 0.5rem 2rem;
    border-radius: 0.4rem;
    color: white;
    background-color: #f4b429;
  }

  .cardArticlesBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: sans-serif;
    margin: 1.5rem 0 3rem 0;

    .recent-article {
      flex: 0 0 50%;
      padding-right: 4rem;
      background-color: white;
      border: 10px solid white;

      .content {
        font-family: sans-serif;
        h3 {
          font-weight: 500;
          margin: 1rem 0 0.5rem 0;
        }

        span {
          font-size: 0.7rem;
          color: lightgray;
        }

        p {
          font-size: 0.9rem;
          line-height: 1.5rem;
          margin: 1rem 0;
          color: rgb(148, 147, 147);
        }
      }
    }

    .card-box {
      flex: 1 0 0;
      border: 10px solid white;
      background-color: white;

      .card {
        .content {
          font-family: sans-serif;
          h3 {
            font-weight: 500;
            margin: 0.2rem 0 0.2rem 0;
          }

          span {
            font-size: 0.7rem;
            color: lightgray;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>
