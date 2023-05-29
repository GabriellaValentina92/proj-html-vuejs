<script>
import ebookApp from "./ebookApp.vue";
export default {
  components: {
    ebookApp,
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
};
</script>

<template>
  <div class="container">
    <ebookApp
      v-for="appdevice in arrEbook"
      :key="appdevice.Edevice"
      :ebook="appdevice.Edevice"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #fef7e9;
  display: flex;
  justify-content: space-around;
}
</style>
