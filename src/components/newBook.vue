<script>
export default {
  props: {
    bookApp: Object,
  },

  data() {
    return {
      logoAudible: "audible-logo.png",
      logoBarnes: "bb-logotanbiancoenero.png",
      logoKindle: "kindle-logo.png",
    };
  },

  methods: {
    getImgPathAudiobook(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },

    getImgPathlogo(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="bg-img">
    <div class="containerSize">
      <div class="audibleImg">
        <img :src="getImgPathAudiobook(bookApp.photoSrc)" alt="" />
      </div>
      <div class="content">
        <h2>{{ bookApp.title }}</h2>
        <h3>{{ bookApp.subheading }}</h3>
        <p>{{ bookApp.text }}</p>
        <img :src="getImgPathlogo(logoAudible)" alt="" />
        <img :src="getImgPathlogo(logoBarnes)" alt="" />
        <img :src="getImgPathlogo(logoKindle)" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;
.bg-img {
  background-image: url("../assets/img/banner-2.jpg");
  .containerSize {
    @include container-small;
    display: flex;

    .audibleImg {
      flex: 0 0 50%;
      margin-top: 3rem;
      margin-bottom: -0.4rem;

      img {
        display: block;
        width: 300px;
      }
    }

    .content {
      flex: 0 0 50%;
      align-self: flex-end;
      font-family: sans-serif;
      text-align: center;
      line-height: 2rem;
      color: white;
    }

    h3 {
      font-size: 1rem;
      color: #f4b429;
    }

    p {
      font-size: 0.8rem;
      color: #c6c4c4;
    }

    .content img {
      padding: 1rem;
      width: 120px;
    }
  }
}
</style>
