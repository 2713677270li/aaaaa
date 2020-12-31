<template>
  <div>
    <!-- <button @click="add">数据</button> -->
    <div class="top">
      <div class="search">
        <i></i>
        <input
          type="text"
          placeholder="搜索歌曲、歌手、专辑"
          v-model="value"
          @input="mainshow1"
          @keydown.enter="searchlist"
        />
        <b v-show="value.length" @click="delete1"></b>
      </div>
    </div>

    <div class="main" v-show="value.length && mainshow">
      <ul>
        <li class="lione">搜索：</li>
        <li
          v-for="(item, index) in datalist3"
          :key="index"
          @click="keywordsearch(item.keyword)"
        >
          <i></i>
          <p>{{ item.keyword }}</p>
        </li>
      </ul>
    </div>

    <div class="hots" v-if="ifelse">
      热门搜索：
      <ul>
        <li
          v-for="(item, index) in datalist2"
          :key="index"
          @click="searchot(item.first)"
        >
          {{ item.first }}
        </li>
      </ul>
    </div>
    <ul class="ul" v-else>
      <li v-for="(item, index) in datalist" :key="index">
        <h3>{{ item.name }}</h3>
        <p>
          <i></i>{{ item.artists[0].name }}<span>-</span>{{ item.album.name }}
        </p>
        <div class="right"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      datalist: '',
      datalist2: '',
      datalist3: '',
      ifelse: true,
      mainshow: true,
    }
  },
  created() {
    this.getlist2()
    // this.getlist3()
  },
  methods: {
    add() {
      this.getlist3()
    },
    // 搜索建议
    mainshow1() {
      this.mainshow = true
      this.getlist3()
    },
    // 搜索建议 点击搜索
    keywordsearch(keyword) {
      this.value = keyword
      this.getlist()
      this.ifelse = false
      this.mainshow = false
    },
    // enter搜索
    searchlist() {
      this.getlist()
      this.ifelse = false
      this.mainshow = false
    },
    // 点击 清空
    delete1() {
      this.value = ''
      this.ifelse = true
    },
    // 点击 热搜词搜索
    searchot(item) {
      this.value = item
      this.getlist()
      this.ifelse = false
    },
    getlist() {
      this.http.get('/search?keywords=' + this.value).then((res) => {
        if (this.value != '') {
          this.datalist = res.data.result.songs
          // this.mainshow = true
        }
      })
    },
    getlist2() {
      this.http.get('/search/hot').then((res) => {
        this.datalist2 = res.data.result.hots
        // console.log(res.data.result.hots)
      })
    },
    getlist3() {
      this.http
        .get('/search/suggest?keywords= ' + this.value + '&type=mobile')
        .then((res) => {
          this.datalist3 = res.data.result.allMatch
          console.log(res)
        })
    },
  },
}
</script>
<style lang="less">
.top {
  padding: 15px 10px;
  .search {
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
    i {
      position: absolute;
      display: inline-block;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 13px;
      height: 13px;
      background: url(../../assets/search.svg);
    }
    input {
      width: 100%;
      height: 30px;
      line-height: 18px;
      background: rgba(0, 0, 0, 0);
      font-size: 14px;
      color: #333;
      border: none;
    }
    b {
      display: inline-block;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      line-height: 18px;
      background: url(../../assets/del.svg);
    }
  }
}
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
.hots {
  padding-left: 14px;
  li {
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    color: #333;
    border: 1px solid #eee;
    border-radius: 16px;
  }
}
.main {
  width: 100%;
  height: 800px;
  .lione {
    color: #507daf;
    padding-left: 10px;
  }
  li {
    height: 45px;
    width: 100%;
    padding-left: 10px;
    line-height: 45px;
    position: relative;
    i {
      position: absolute;
      display: inline-block;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 13px;
      height: 13px;
      background: url(../../assets/search.svg);
    }
    p {
      margin-left: 20px;
    }
  }
}
</style>
