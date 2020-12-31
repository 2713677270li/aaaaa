<template>
  <div>
    <ul>
      <li @click="changeRouter('mingxing')">明星</li>
      <li @click="changeRouter('zongyi')">综艺</li>
      <li @click="changeRouter('bagua')">八卦</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
        changeRouter(val) {
            this.$router.push('/yule/' + val)
        }
  },
};
</script>

<style scoped>
ul {
  height: 35px;
  background: cyan;
  display: flex;
  list-style: none;
  text-align: center;
  line-height: 35px;
  color: #fff;
}

ul li {
  flex: 1;
  border-right: 1px solid #fff;
}
</style>
