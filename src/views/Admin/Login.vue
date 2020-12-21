<template>
  <div class="login">
    <input type="mail" />
    <input type="password" />
    <div class="button" @click="move()">LOGIN TEST</div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    mounted() {},
    methods: {
      move() {
        this.$router.push("/admin");
      },
    },
  };
</script>

<style scoped>
  .login {
    width: 100vw;
    min-height: 100vh;
    padding-top: 120px;
    box-sizing: border-box;
  }
  .button {
    width: 100px;
    height: 30px;
    background-color: rgba(56, 13, 59, 1);
    cursor: pointer;
  }
</style>
