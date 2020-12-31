<template>
  <div>
    <button @click="add">最新音乐数据</button>
    <ul class="ul">
      <li v-for="(item, index) in datalist2" :key="index">
        <div class="leftli">
          {{ (index + 1).toString().padStart(2, '0') }}
        </div>
        <div class="liright">
          <h3>{{ item.name }}</h3>
          <p><i></i>{{ item.ar[0].name }}<span>-</span>{{ item.al.name }}</p>
          <div class="right"></div>
        </div>
      </li>
    </ul>
    <!-- {{ newmusic }} -->
  </div>
</template>
<script>
export default {
  props: {
    datalist2: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  // data() {
  //   return {
  //     newmusic: this.datalist2,
  //   }
  // },
  methods: {
    add() {
      console.log(this.datalist2)
    },
  },
}
</script>
<style lang="less" scoped>
.ul {
  width: 100%;
  li:nth-child(1) {
    .leftli {
      color: red;
    }
  }
  li:nth-child(2) {
    .leftli {
      color: orange;
    }
  }
  li:nth-child(3) {
    .leftli {
      color: coral;
    }
  }
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
.leftli {
  float: left;
  width: 30px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.liright {
  margin-left: 40px;
}
</style>
