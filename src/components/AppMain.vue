<script>
import AuthorDescription from "./AuthorDescription.vue";
import ebook from "./ebookApp.vue";
export default {
  components: {
    AuthorDescription,
    ebook,
  },

  data() {
    return {
      arrEbook: [
        {
          Edevice: "ebay-logotanbiancoenero.png",
          src: "#",
        },

        {
          Edevice: "audible-logobianconero.png",
          src: "#",
        },

        {
          Edevice: "bb-logotanbiancoenero.png",
          src: "#",
        },

        {
          Edevice: "kindlefire-logotanbiancoenero.png",
          src: "#",
        },
      ],
    };
  },

  methods: {
    getimgPath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <AuthorDescription />
  <ebook />
</template>

<style lang="scss" scoped></style>
