<script>
export default {
  props: {
    ebook: String,
  },

  methods: {
    getimgPath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="ebookcontainer">
    <img :src="getimgPath(ebook)" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;

.ebookcontainer {
  img {
    @include container-size;
  }
}
</style>
