<template>
  <div id="app">
    <div class="background" />

    <top-nav />
    <router-view />
    <custom-footer />
  </div>
</template>

<script>
  import TopNav from "./components/TopNav";
  import CustomFooter from "./components/CustomFooter";

  export default {
    components: {
      TopNav,
      CustomFooter,
    },
  };
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  body {
    background: linear-gradient(-45deg, #18002a, #020016, #230a33);
    background-size: 400% 400%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    animation: gradient 5s ease infinite;
    color: white;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
  }

  /* .background::after {
    content: "";
    position: absolute;
    width: 200vw;
    height: 200vh;
    left: -50%;
    top: -50%;
    background-image: url(data:image/png;base64,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);
    animation: grain 1.5s steps(6) infinite;
  } */

  /* @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    30% {
      transform: translate(3%, -15%);
    }
    50% {
      transform: translate(12%, 9%);
    }
    70% {
      transform: translate(9%, 4%);
    }
    90% {
      transform: translate(-1%, 7%);
    }
  } */
</style>
