<script>
import AppHeader from "./components/AppHeader.vue";
import AuthorDescription from "./components/AuthorDescription.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AuthorDescription,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <AuthorDescription />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
