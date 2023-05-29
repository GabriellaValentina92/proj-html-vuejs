<script>
export default {
  props: {
    menuName: String,
  },
};
</script>

<template>
  <ul class="menu">
    <li>
      <a href="#"> {{ menuName }} </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu li {
  list-style: none;

  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: white;
    padding: 0.4rem;
  }
}
</style>
