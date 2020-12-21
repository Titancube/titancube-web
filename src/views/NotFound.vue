<template>
  <div class="notfound">
    <p>ACCESS DENIED</p>
  </div>
</template>

<script>
  export default {
    name: "NotFound",
  };
</script>

<style scoped>
  .notfound {
    width: 100vw;
    height: 100vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .notfound > p {
    z-index: 2;
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: bold;
  }
</style>
