<script>
export default {
  props: {
    bookrelease: Object,
  },
  data() {
    return {
      bookwidget: "book-widget.png",
    };
  },

  methods: {
    getImageBookPath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="box">
    <div class="newBook">
      <div class="bookImg">
        <img :src="getImageBookPath(bookwidget)" alt="" />
      </div>
      <div class="text">
        <h2>{{ bookrelease.title }}</h2>
        <h3>{{ bookrelease.author }}</h3>
        <p>{{ bookrelease.text }}</p>
      </div>
      <div class="btn">
        <a href="#"
          ><font-awesome-icon :icon="['fab', 'amazon']" /> Buy on Amazon</a
        >
        <a href="#">
          <font-awesome-icon :icon="['fab', 'apple']" /> Buy on AppleStore</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: flex-end;
  margin-top: 7rem;
}
.newBook {
  width: 450px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  background-color: white;

  .bookImg img {
    flex: 0 0 50%;
    width: 150px;
  }

  .text {
    flex: 0 0 50%;
    line-height: 2rem;

    h2 {
      font-size: 1rem;
    }

    h3 {
      font-size: 0.6rem;
      color: #f4b429;
    }

    p {
      font-size: 0.6rem;
      line-height: 1rem;
    }
  }

  .btn {
    width: 100%;
    text-align: center;
    padding: 0.6rem;
    margin-top: 1.5rem;

    a {
      transition: box-shadow 0.3s;
      width: 50px;
      font-size: 0.8rem;
      text-decoration: none;
      color: black;
      font-weight: bold;
      padding: 0.6rem;
      border: 1px solid #49a987;
      border-radius: 0.5rem;
    }
  }
}

.btn a:hover {
  box-shadow: 0 0 11px #227055;
}
</style>
