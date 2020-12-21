<template>
  <div class="home">
    <spinner v-if="!isReady" />
    <div class="text" v-if="isReady">asdfasdf</div>
  </div>
</template>

<script>
  import Spinner from "../components/Spinner";

  export default {
    name: "Home",
    components: {
      Spinner,
    },
    data: () => ({
      isReady: false,
    }),
    mounted() {
      this.isReady = true;
    },
  };
</script>

<style>
  .home {
    width: 100vw;
    margin: 0 auto;
    min-height: 100vh;
    padding-top: 120px;
    box-sizing: border-box;
  }

  .text {
    width: 1000px;
  }

  p {
    width: 100%;
    margin: 0;
  }
</style>
