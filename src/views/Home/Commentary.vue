<template>
  <div>
    <p>精彩评论</p>
    <!-- <button @click="add">数据</button> -->
    <div class="bravo">
      <ul>
        <li v-for="(item, index) in datalist.hotComments" :key="index">
          <div class="leftone">
            <img :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="rightone">
            <p>{{ item.user.nickname }}</p>
            <span>{{ item.time | dateFormat }}</span>
            {{ item.content }}
          </div>
        </li>
      </ul>
    </div>
    <p>精彩评论</p>
    <div class="bravo">
      <ul>
        <li v-for="(item, index) in datalist.comments" :key="index">
          <div class="leftone">
            <img :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="rightone">
            <p>{{ item.user.nickname }}</p>
            <span>{{ item.time | dateFormat }}</span>
            {{ item.content }}
          </div>
        </li>
      </ul>
    </div>
    <div class="foot">查看全部{{ datalist.total }}条评论></div>
    <div class="footer">
      <div class="left">打开</div>
      <div class="right">下载</div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    id: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
      datalist: [],
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    add() {
      console.log(this.datalist)
    },
    getlist() {
      // console.log(this.id)
      this.http.get('/comment/playlist?id=' + this.id).then((res) => {
        this.datalist = res.data
        // console.log(this.datalist.hotComments)
      })
    },
  },
  filters: {
    dateFormat(time) {
      return moment(time).format('YYYY' + '年' + 'MM' + '月' + 'DD' + '日')
    },
  },
}
</script>
<style lang="less" scoped>
p {
  margin-left: 15px;
  height: 30px;
  line-height: 30px;
}
.bravo {
  background-color: #fff;
  // height: 800px;
  ul {
    li {
      // height: 80px;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      .leftone {
        float: left;
        width: 20px;
        height: 20px;
        // background-color: aqua;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin: 20px 0 0 0;
        }
      }
      .rightone {
        // float: left;
        margin-left: 40px;
        color: #000;
        p {
          color: #666;
        }
        span {
          display: block;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
.foot {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 80px;
}
.footer {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  div {
    float: left;
    width: 47%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: rgb(255, 58, 58);
    border: 1px solid rgb(255, 58, 58);
    border-radius: 20px;
  }
  .left {
    margin-right: 10px;
  }
  .right {
    color: #fff;
    background-color: #ff3a3a;
  }
}
</style>
