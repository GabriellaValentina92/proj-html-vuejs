<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    getImg(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="containerbig">
    <div class="title">
      <h1>Dig A Little Deeper Into Damon Vaughn</h1>
      <h3>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h3>
    </div>
    <div class="cardbox">
      <div class="card" v-for="info in store.ArrAboutAuthor" :key="info.title">
        <img :src="getImg(info.image)" alt="" />
        <div class="content">
          <h4>{{ info.title }}</h4>
          <h5>{{ info.subheading }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;

.containerbig {
  @include container-size;

  .title {
    text-align: center;
    margin-top: 4rem;
    line-height: 3rem;

    h3 {
      font-size: 0.8rem;
      color: #49a987;
    }
  }

  .cardbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 400px;
    position: relative;
    padding: 2rem;
  }

  .card img {
    filter: grayscale(0.5) contrast(0.8);
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .content {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 2rem;

    h4 {
      color: #ffffff;
    }

    h5 {
      color: #f4b429;
    }
  }
}
</style>
