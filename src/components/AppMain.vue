<script>
import ebookApp from "./ebookApp.vue";
import newBook from "./newBook.vue";
import journalReview from "./journalReview.vue";
import event from "./event.vue";
import subscribeSection from "./subscribeSection.vue";
export default {
  components: {
    ebookApp,
    newBook,
    journalReview,
    event,
    subscribeSection,
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

      audiobook: [
        {
          photoSrc: "audible-app400.png",
          title: "New Audiobook",
          subheading: "no time to read? no problem.listen to it",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
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
  <div>
    <newBook
      v-for="element in audiobook"
      :key="element.title"
      :bookApp="element"
    />
  </div>
  <journalReview />
  <event />
  <subscribeSection />
</template>

<style lang="scss" scoped>
.container {
  background-color: #fef7e9;
  display: flex;
  justify-content: space-around;
}
</style>
