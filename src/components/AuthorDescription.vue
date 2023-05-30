<script></script>

<template>
  <div class="container">
    <h1>More About Damon Vaughn</h1>
    <p>
      Damon Vaughn is a professor of psychologist at the University of Toronto,
      a clinical psychologist and the author of the multi-million copy
      best-seller "The story of my life"
    </p>
    <div class="btn">
      <a href="#"> Meet the Author</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;

.container {
  @include container-size;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    color: #f4b429;
    line-height: 6rem;
  }

  p {
    font-family: sans-serif;
    font-weight: 500;
    line-height: 2rem;
  }

  .btn {
    margin-top: 2rem;
    transition: all 1s ease-in-out;

    a {
      font-family: sans-serif;
      font-size: 0.7rem;
      text-decoration: none;
      padding: 0.6rem 1.5rem;
      border-radius: 0.7rem;
      background-color: #49a987;
      color: white;
    }
  }
}

.btn:hover {
  transform: scale(1.2);
}
</style>
