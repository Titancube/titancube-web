<template>
  <div id="top-nav">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><router-link to="/works">WORKS</router-link></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TopNav",
  };
</script>

<style scoped>
  #top-nav {
    width: 100vw;
    height: 60px;
    line-height: 60px;
    padding: 0 30px;
    text-align: center;
    position: fixed;
    z-index: 3;
    background: rgba(56, 13, 59, 1);
  }

  ul > li {
    list-style: none;
    float: left;
    margin-right: 30px;
  }

  #top-nav > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #top-nav a {
    font-weight: bold;
    text-decoration: none;
    color: #f55157;
  }

  #top-nav a.router-link-exact-active {
    color: white;
  }
</style>
