<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    getlogoJournalPath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="containerbigsize">
    <div class="headline">
      <div class="title">
        <h1>What the Critics Say</h1>
        <h2>testimonials from around the world</h2>
      </div>
      <div class="btn"><a href="#"> Read All Testimonials</a></div>
    </div>
    <div class="cardbox">
      <div
        class="card"
        v-for="element in store.ArrJournalReview"
        :key="element.writer"
      >
        <h1>{{ element.title }}</h1>
        <p>{{ element.text }}</p>
        <div class="writer">
          <img :src="getlogoJournalPath(element.logo)" alt="" />
          <h3>{{ element.writer }}</h3>
          <h3>{{ element.journal }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;

.containerbigsize {
  @include container-size;

  .headline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
    line-height: 2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;

    .title h2 {
      font-size: 0.9rem;
      color: #49a987;
    }

    .btn a {
      font-size: 0.7rem;
      text-decoration: none;
      color: white;
      background-color: #f4b429;
      padding: 0.6rem 1.5rem;
      border-radius: 0.5rem;
    }
  }

  .cardbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .card {
      flex: 0 0 40%;

      .writer {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
