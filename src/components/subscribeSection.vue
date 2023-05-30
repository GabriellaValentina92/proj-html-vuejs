<script>
export default {};
</script>
<template>
  <div class="bg-container">
    <div class="container-small">
      <h1>Subscribe To My Newsletter</h1>
      <h3>BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</h3>
      <div class="btnInput">
        <input type="email" name="" id="" placeholder=" insert email..." />
        <a href="#"> Subscribe</a>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, autem!
        Nemo numquam excepturi mollitia, earum obcaecati rem quo.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partial/variables.scss" as *;
.bg-container {
  background-image: url("../assets/img/banner-2.jpg");

  .container-small {
    @include container-small;
    text-align: center;
    color: white;
    line-height: 2rem;

    h1 {
      margin-top: 10rem;
    }

    h3 {
      font-size: 0.8rem;
      color: #f4b429;
    }

    .btnInput input {
      width: 200px;
      height: 30px;
      border-radius: 0.4rem;
    }
    .btnInput a {
      font-family: sans-serif;
      font-size: 0.8rem;
      text-decoration: none;
      padding: 0.6rem 2rem;
      color: white;
      background-color: #49a987;
      border-radius: 0.6rem;
      margin-left: 1rem;
    }

    p {
      color: #c6c4c4;
      margin-bottom: 2rem;
    }
  }
}
</style>
