<script>
import footerMenu from "./footerMenu.vue";
export default {
  components: {
    footerMenu,
  },

  data() {
    return {
      ArrFooter: [
        {
          id: "01",
          about: "about me",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
          link: {
            links: "Useful Links",
            book: "Latest Books",
            event: "Upcoming Events",
            articles: "Recent Articles",
            business: "Business Equiries",
            foundation: "Visit My Foundation",
          },
          contact: {
            info: "Contacts Info",
            address: "63 E. Studebaker Street Bolingbrook, IL 60400",
            number: "(800) 000 0000",
            mobile_number: "(800) 000 0000",
            email_adress: "info@your-company.com",
          },
          credits: {
            copyright: "Copyright 2012-2020",
            theme: "Avada Theme by ThemeFusion",
            right: "All Right Reserved",
            company: "Powered by WordPress",
          },
        },
      ],
    };
  },
};
</script>
<template>
  <footerMenu v-for="info in ArrFooter" :key="info.id" :footermenu="info" />
</template>

<style></style>
