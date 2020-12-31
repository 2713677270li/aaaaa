import Vue from 'vue'
import VueI18n from 'vue-i18n' 

import zh from './zh'
import en from './en'

Vue.use(VueI18n)

//设置系统的语言环境
//获取浏览器的当前的语言状态
// console.log(navigator.language);
const navLang = navigator.language;

let localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
if(localLang === 'zh-CN'){
    localLang = 'zh'
}else if(localLang === 'en-US'){
    localLang = 'en'
}

// 获取localStorage的语言状态，如果系统没有设置默认的语言环境，如果浏览器默认也没有语言环境，就设置为中文
let lang = localStorage.getItem("lang") || localLang || 'zh'
// console.log(localStorage.getItem("lang"));
// console.log(lang);

 // localStorage存储最新的语言信息
 localStorage.setItem("lange",lang);

const i18n = new VueI18n({
       //设置默认的语言
       locale: localStorage.getItem("lange") || 'zh',
    //    locale: 'en',
       messages:{
          zh,
          en
       }
})

export default i18n