<template>
  <div class="about">
    <div v-html="content"></div>
  </div>
</template>

<script>
  export default {
    name: "About",
    data: () => ({
      content: "",
    }),
    mounted() {
      this.getAbout();
    },
    methods: {
      async getAbout() {
        const r = await this.$firebase
          .firestore()
          .collection("Pages")
          .doc("About")
          .get();
        this.content = r.data().content;
      },
    },
  };
</script>

<style scoped>
  .about {
    width: 100vw;
    min-height: 100vh;
    padding-top: 120px;
    box-sizing: border-box;
  }
</style>
