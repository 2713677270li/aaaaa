<template>
<div>
    <ul>
        <li>篮球</li>
        <li>足球</li>
        <li>羽毛球</li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    height: 35px;
    background: skyblue;
    display: flex;
    list-style: none;
    text-align: center;
    line-height: 35px;
    color: #fff;
}

ul li {
    flex: 1;
    border-right: 1px solid #fff
}
</style>
