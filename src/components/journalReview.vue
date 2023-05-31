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
        class="main-article"
        v-for="critic in store.ArticleCritic"
        :key="critic.id"
      >
        <h1>{{ critic.title }}</h1>
        <p>{{ critic.text }}</p>
        <div class="writer">
          <img :src="getlogoJournalPath(critic.logo)" alt="" />
          <h3>{{ critic.writer }}</h3>
          <h3>{{ critic.journal }}</h3>
        </div>
      </div>
      <div class="cardcontainer">
        <div
          class="card"
          v-for="element in store.ArrJournalReview"
          :key="element.id"
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
      font-size: 0.7rem;
      text-transform: uppercase;
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

    .btn {
      transition: all 0.8s ease-in-out;
    }

    .btn:hover {
      transform: rotate(360deg) scale(1.5);
    }
  }

  .cardbox {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    .main-article {
      flex: 0 0 60%;
      background-image: url("../assets/img/testimonial.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      text-align: center;
      border-radius: 0 0 10% 0;

      h1 {
        margin-top: 6rem;
        line-height: 4rem;
        border-bottom: 1px solid white;
      }

      p {
        line-height: 2rem;
        padding-inline: 4rem;
        margin-top: 1rem;
      }

      .writer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        margin: 1.5rem 0 3rem 0;

        img {
          width: 0.7rem;
          margin-right: 0.5rem;
        }
      }
    }

    .cardcontainer {
      display: flex;
      flex-direction: column;
      flex: 0 0 40%;
    }

    .card {
      flex: 0 0 50%;

      h1 {
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: center;
        margin-inline: 2rem;
        background-color: $bg-color;
      }

      p {
        font-size: 0.8rem;
        line-height: 1.5rem;
        text-align: center;
        padding: 0 3rem;
        margin-inline: 2rem;
        background-color: $bg-color;
      }

      .writer {
        display: flex;
        align-items: center;
        font-size: 0.6rem;
        margin-left: 3rem;
        padding: 0.5rem;

        img {
          width: 0.9rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
