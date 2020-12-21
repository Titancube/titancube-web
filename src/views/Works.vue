<template>
  <div class="works">
    <spinner v-if="!isReady" />
    <div class="list" v-if="isReady">
      <div
        class="list-card"
        v-for="item in items"
        :key="item.title"
        @click="item.on = !item.on"
        :class="{ on: item.on }"
      >
        <div class="thumbnail"><img :src="item.image" alt="" /></div>
        <div class="title">
          <span class="song-name">{{ item.title }}</span
          ><span>{{ item.shortDesc }}</span>
        </div>
        <div class="detail" v-if="item.on">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Spinner from "../components/Spinner";
  export default {
    name: "Works",
    components: {
      Spinner,
    },
    data: () => ({
      isReady: false,
      isOn: false,
      items: [],
    }),
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        // Initialize
        this.data = [];
        this.isReady = false;

        // Get data
        const r = await this.$firebase
          .firestore()
          .collection("Works")
          .orderBy("releaseDate", "desc")
          .get();
        r.forEach((v) => {
          const {
            title,
            image,
            releaseDate,
            desc,
            links,
            shortDesc,
          } = v.data();
          this.items.push({
            title,
            image,
            releaseDate,
            desc,
            links,
            shortDesc,
            on: false,
          });
        });
        this.isReady = true;
      },
    },
  };
</script>

<style scoped>
  .works {
    width: 100vw;
    min-height: 100vh;
    padding-top: 120px;
    box-sizing: border-box;
  }

  .list {
    width: 1000px;
    margin: 0 auto;
  }

  .list-card {
    width: 100%;
    height: 100px;
    margin: 0 auto 30px auto;
    background: #1b0927;
    cursor: pointer;
    transition: 0.2s;
  }

  .list-card:hover {
    background: #3e1458;
    transition: 0.2s;
  }

  .on {
    height: 300px;
    transition: 0.2s;
  }

  .thumbnail {
    width: 100px;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
    transition: 0.2s;
    position: relative;
  }

  .on > .thumbnail {
    width: 300px;
    height: 300px;
    transition: 0.2s;
  }

  .on > .thumbnail > img {
    width: 300px;
    height: 300px;
    transition: 0.2s;
  }

  .thumbnail > img {
    display: inline-block;
    width: 100px;
    height: 100px;
    transition: 0.2s;
  }

  .title {
    width: 900px;
    height: 100px;
    line-height: 100px;
    display: inline-block;
    padding: 0 30px;
    box-sizing: border-box;
    vertical-align: top;
    transition: 0.2s;
  }

  .on > .title {
    width: 700px;
    transition: 0.2s;
  }

  .title > span {
    vertical-align: top;
  }

  .song-name {
    font-weight: bold;
    font-size: 30px;
    margin-right: 30px;
  }

  .detail {
    display: inline-block;
  }
</style>
