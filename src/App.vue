<template>
  <div id="app">
    <div class="top">
      <img src="./assets/logo.png" alt="" />
      <div class="right">下载APP</div>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ color: index == coloridx }"
        @click="listpath(index, item.path)"
      >
        <span :class="{ borbottom: index == coloridx }">{{ item.title }}</span>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: '/home',
          title: '推荐音乐',
        },
        {
          path: '/hotsong',
          title: '热歌榜',
        },
        {
          path: '/search',
          title: '搜索',
        },
      ],
      coloridx: 0,
    }
  },
  mounted() {
    // 刷新页面判断coloridx的值
    if (window.location.hash.split('/')[1] == 'home') {
      this.coloridx = 0
    } else if (window.location.hash.split('/')[1] == 'hotsong') {
      this.coloridx = 1
    } else if (window.location.hash.split('/')[1] == 'search') {
      this.coloridx = 2
    }
  },
  methods: {
    listpath(index, path) {
      this.coloridx = index
      this.$router.push(path)
    },
  },
}
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  height: 84px;
  background-color: #d43c33;
  position: relative;
  img {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .right {
    width: 100px;
    height: 36px;
    color: #d43c33;
    background-color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    border-radius: 16px;
  }
}
ul {
  width: 100%;
  height: 40px;
  // color: #d43c33;
  display: flex;
  list-style: none;
  border-bottom: 1px solid #ddd;
  li {
    width: 33%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    font-weight: 400;
    span {
      display: inline-block;
      height: 40px;
    }
  }
}
.color {
  color: #dd001b;
}
.borbottom {
  border-bottom: 2px solid#dd001b;
}
</style>
