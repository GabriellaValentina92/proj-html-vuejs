<script>
import AppHeader from "./components/AppHeader.vue";
import AuthorDescription from "./components/AuthorDescription.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AuthorDescription,
    AppMain,
  },
};
</script>

<template>
  <AppHeader />
  <AuthorDescription />
  <AppMain />
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
