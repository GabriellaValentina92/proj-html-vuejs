<script>
export default {
  props: {
    footermenu: Object,
  },

  data() {
    return {
      image: "author-logoImg.png",
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
  <div class="bg-footer">
    <div class="containerSize">
      <div class="imglogo">
        <img :src="getImagePath(image)" alt="" />
      </div>

      <div class="container-menu">
        <ul>
          <li>
            <h2>
              {{ footermenu.about }}
            </h2>
          </li>
          <li>
            {{ footermenu.text }}
          </li>
        </ul>

        <ul>
          <li>
            <h2>
              {{ footermenu.link.links }}
            </h2>
          </li>
          <ul>
            <li>
              <a href="#">{{ footermenu.link.book }}</a>
            </li>
            <li>
              <a href="#">{{ footermenu.link.event }}</a>
            </li>
            <li>
              <a href="#">{{ footermenu.link.articles }}</a>
            </li>
            <li>
              <a href="#">{{ footermenu.link.business }}</a>
            </li>
            <li>
              <a href="#">{{ footermenu.link.foundation }}</a>
            </li>
          </ul>
        </ul>

        <ul>
          <li>
            <h2>
              {{ footermenu.contact.info }}
            </h2>
          </li>
          <ul>
            <li>{{ footermenu.contact.address }}</li>
            <li>Phone: {{ footermenu.contact.number }}</li>
            <li>mobile: {{ footermenu.contact.mobile_number }}</li>
            <li>
              Email: <a href="#">{{ footermenu.contact.email_adress }}</a>
            </li>
            <li></li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="credits">
      <span>{{ footermenu.credits.copyright }}</span>
      <span class="border">{{ footermenu.credits.theme }}</span>
      <span class="border">{{ footermenu.credits.right }}</span>
      <span class="border">{{ footermenu.credits.company }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;

.bg-footer {
  background-image: url("../assets/img/footer-3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.containerSize {
  @include container-size;
  display: flex;
  align-items: center;
  justify-content: center;

  .imglogo {
    flex: 0 0 20%;
  }

  .imglogo img {
    width: 100px;
  }

  .container-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    margin-top: 6rem;
    color: white;

    ul {
      flex: 0 0 30%;
      padding: 1rem;
    }

    ul li {
      list-style: none;
      line-height: 1.5rem;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }
}
.credits {
  padding: 2rem;
  color: white;
  text-align: center;

  span {
    font-size: 0.6rem;
    padding: 0 0.4rem;
    color: lightgray;
  }

  .border {
    border-left: 1px solid lightgray;
  }
}
</style>
