<template>
  <div>
    <!-- <button @click="add">最新音乐数据</button> -->
    <ul class="ul">
      <li
        v-for="(item, index) in newmusic"
        :key="index"
        @click="toPlayer(item)"
      >
        <h3>{{ item.name }}</h3>
        <p>
          <i></i>{{ item.song.artists[0].name }}<span>-</span
          >{{ item.song.name }}
        </p>
        <div class="right"></div>
      </li>
    </ul>
    <!-- {{ newmusic }} -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      newmusic: [],
    }
  },
  created() {
    this.newList()
  },
  methods: {
    toPlayer(data) {
      console.log(data)
      let obj = {
        path: '/player',
        query: {
          picUrl: data.picUrl,
          name: data.name,
          id: data.id,
          nickName: data.song.artists[0].name,
        },
      }
      this.$router.push(obj)
    },
    newList() {
      this.http.get('/personalized/newsong?limit=10').then((res) => {
        this.newmusic = res.data.result
      })
    },
    add() {
      console.log(this.newmusic)
    },
  },
}
</script>
<style lang="less" scoped>
.ul {
  width: 100%;
  li {
    color: #555;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #ddd;
    // line-height: 55px;
    padding-left: 10px;
    position: relative;
    h3 {
      margin-top: 8px;
      font-weight: 400;
      font-size: 18px;
    }
    p {
      margin-top: 3px;
      color: #777;
      font-size: 9px;
      span {
        display: inline-block;
        margin: 0 5px;
      }
      i {
        display: inline-block;
        width: 14px;
        height: 9px;
        background: url(../../assets/index_icon.png);
        background-size: 200px 100px;
        margin-right: 10px;
      }
    }
    .right {
      width: 22px;
      height: 22px;
      float: right;
      margin-top: -30px;
      margin-right: 20px;
      background: url(../../assets/index_icon.png) no-repeat -24px 0;
      background-size: 166px 97px;
    }
  }
}
</style>
