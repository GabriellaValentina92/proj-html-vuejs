<script>
import AppMenu from "./AppMenu.vue";
import bookrelease from "./bookrelease.vue";

export default {
  components: {
    AppMenu,
    bookrelease,
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
    </div>
    <bookrelease
      v-for="newBook in releaseBook"
      :key="newBook.author"
      :bookrelease="newBook"
    />
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;
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

    img {
      width: 100px;
    }
  }

  .icon {
    color: white;
    font-size: 0.8rem;
  }
}
</style>
