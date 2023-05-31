<script>
import store from "../store";
export default {
  data() {
    return {
      store,
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
  <div class="bg-color">
    <div class="containerbig">
      <h1>Upcoming Events</h1>
      <h2>MEET THE AUTHOR IN PERSON</h2>
      <div class="cardcontainer">
        <div
          class="eventcard"
          v-for="event in store.ArrEvent"
          :key="event.title"
        >
          <img :src="getimgPath(event.photo)" alt="" />
          <div class="text">
            <h3>{{ event.title }}</h3>
            <p>{{ event.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;

.bg-color {
  background-color: $bg-color;

  .cardcontainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: all 2s ease-in-out;
  }
}
.containerbig {
  @include container-size;

  h1,
  h2 {
    text-align: center;
    line-height: 3rem;
  }

  h2 {
    font-size: 0.9rem;
    color: #f4b429;
  }
}
.eventcard {
  text-align: center;
  padding: 2rem;
  transition: transform 1s ease-in-out;

  .text {
    background-color: white;
    padding: 1.5rem;

    h3 {
      line-height: 3rem;
      border-bottom: 1px solid lightgray;
    }

    p {
      line-height: 1.5rem;
      margin-top: 0.8rem;
    }
  }
}

.eventcard:hover {
  transform: scale(1.1);
}
.eventcard img {
  width: 100%;
  background-size: cover;
  display: block;
}
</style>
