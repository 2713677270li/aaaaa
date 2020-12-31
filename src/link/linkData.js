//处理数据的方法
import LinkEnum from './methodsData'
//引入国际化
import i18n from '@/lang/index.js'
console.log(i18n);
// console.log(i18n.t('Instant_delivery'));

//罗列表格用到的字段
/*
key      对应的是table中的prop属性，就是接受到的后端传过来的数据
title    我们自己定义的方便维护和查询数据
titleName 显示的列表名称（拓展国际化功能）
width    表格的宽度
*/
const hdmc = {
    key : 'hdmc',
    title : '活动名称',
    titleName : i18n.t('The_name'),
    width : 170,
}
const hdqy = {
    key : 'hdqy',
    title : '活动区域',
    titleName : i18n.t('Active_area'),
    width : 170
}

const hdsj = {
    key : 'hdsj',
    title : '活动时间',
    titleName : i18n.t('The_activit'),
    width : 170
}


const jsps = {
    key : 'jsps',
    title : '即时配送',
    titleName : i18n.t('Instant_delivery'),
    width : 170
}

const hdxz = {
    key : 'hdxz',
    title : '活动性质',
    titleName : i18n.t('Nature_of_activities'),
    width : 170
}

const tszy = {
    key : 'tszy',
    title : '特殊资源',
    titleName : i18n.t('Special_resources'),
    width : 170
}

const hdxs = {
    key : 'hdxs',
    title : '活动形式',
    titleName : i18n.t('Activity_form'),
    width : 170
}

const ms = {
    key : 'ms',
    title : '美食',
    titleName : i18n.t('food'),
    width : 230
}

const dthd = {
    key : 'dthd',
    title : '地推活动',
    titleName : i18n.t('To_push_the_activity'),
    width : 170
}

const DataObj = [
    hdmc,
    hdqy,
    hdsj,
    jsps,
    hdxz,
    tszy,
    hdxs,
    ms,
    dthd
]

export default new LinkEnum(DataObj)


