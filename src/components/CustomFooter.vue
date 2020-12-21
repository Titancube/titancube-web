<template>
  <div class="custom-footer">
    <div>
      <p>ⓒ2020 Gyubin Lee</p>
      <p>Website by me</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CustomFooter",
  };
</script>

<style scoped>
  .custom-footer {
    width: 100%;
    height: 100px;
    bottom: 0;
    text-align: center;
    font-size: 12px;
    /* background-color: lightslategray; */
  }

  .custom-footer > div {
    top: 50%;
    margin: auto 0;
  }
</style>
