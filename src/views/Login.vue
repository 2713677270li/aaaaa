<template>
<div>
    <div class="outer_label">
    </div>
    <div class="login_form">
        <el-input type="text" style="margin-bottom:10px" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="userName"></el-input>
        <el-input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="password"></el-input>
        <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
        <div style="margin-top: 10px">
            <span style="color: #000099;" @click="login">司机账号登陆</span><span style="float: right;color: #A9A9AB">忘记密码？</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
            isBtnLoading: false
        }
    },
    created() {
        //登录页面初始化的时候如果登录过了，自动将用户名和密码进行回显
        if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
            this.userName = JSON.parse(localStorage.getItem('user')).userName;
            this.password = JSON.parse(localStorage.getItem('user')).password;
        }
    },
    methods: {
        login() {
            if (!this.userName) {
                this.$message.error('请输入用户名');
                return;
            }
            if (!this.password) {
                this.$message.error('请输入密码');
                return;
            }
            localStorage.setItem("username",this.userName);
            localStorage.setItem("password",this.password);
            //登录成功跳转页面
            this.$router.push("/home");
           
        }
    }
}
</script>

<style>
.login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
}

.qxs-ic_user {
    background-size: 13px 15px;
    background-position: 3%;
}

.qxs-ic_password {
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
}

.login_logo {
    height: 100%;
}

.login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099, #2154FA);
    /* 标准的语法 */
    filter: brightness(1.4);
}
</style>
