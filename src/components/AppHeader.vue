<script>
import AppMenu from "./AppMenu.vue";
// import slider from "./slider.vue";
import bookrelease from "./bookrelease.vue";

export default {
  components: {
    AppMenu,
    bookrelease,
    // slider,
  },

  data() {
    return {
      logoImg: "author-logoImg.png",
      arrMenuHeader: [
        {
          name: "Home",
          src: "#",
        },

        {
          name: "About Me",
          src: "#",
        },

        {
          name: "Testimonials",
          src: "#",
        },

        {
          name: "My Blog",
          src: "#",
        },

        {
          name: "MeetUps",
          src: "#",
        },

        {
          name: "Shop",
          src: "#",
        },

        {
          name: "Contact Me",
          src: "#",
        },
      ],

      releaseBook: [
        {
          title: "Latest Book Release",
          author: "D. VAUGHIN AUTOBIOGRAPHY",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet error illum alias facere. Iusto, culpa assumenda fugit eveniet architecto omni.",
        },
      ],
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
  <header class="bg-img">
    <div class="container">
      <div class="logo-img">
        <img :src="getImagePath(logoImg)" alt="" />
      </div>
      <AppMenu
        v-for="menu in arrMenuHeader"
        :key="menu.name"
        :menuName="menu.name"
      />
      <div>
        <a class="icon" href="#"
          ><font-awesome-icon :icon="['fas', 'cart-shopping']"
        /></a>
      </div>
      <div class="slidertext">
        <h1>Damon Vaught</h1>
        <p>
          "Best-selling author and the most influential public intellectual in
          the western world right now"
        </p>
        <div class="nyt-paper">-The New York Times</div>
      </div>
    </div>
    <!-- <slider /> -->
    <bookrelease
      v-for="newBook in releaseBook"
      :key="newBook.author"
      :bookrelease="newBook"
    />
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;
@import url("https://fonts.googleapis.com/css2?family=Freehand&display=swap");
.bg-img {
  background-image: url("../assets/img/header-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;

  .container {
    @include container-size;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    img {
      width: 100px;
    }
  }

  .icon {
    color: white;
    font-size: 0.8rem;
  }

  .icon:hover {
    color: #f4b429;
  }

  .slidertext {
    position: absolute;
    right: 500px;
    top: 200px;

    h1 {
      font-family: "Freehand", cursive;
      font-weight: 300;
      font-size: 3.5rem;
      color: #f4b429;
    }

    p {
      font-size: 2rem;
      color: white;
      font-weight: bolder;
    }

    .nyt-paper {
      margin-top: 0.3rem;
      color: lightgray;
    }
  }
}
</style>
