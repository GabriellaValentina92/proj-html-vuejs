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
          class="cardArticle"
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
    flex-wrap: wrap;

    .cardArticle {
      background-color: white;
      border: 40px solid white;
    }

    .cardArticle p {
      inline-size: 600px;
      margin-top: 1rem;
    }
  }

  .content {
    margin-top: 2rem;
    line-height: 1.5rem;

    .subtitle {
      font-size: 0.8rem;
      color: #c6c4c4;
    }
  }
}
</style>
