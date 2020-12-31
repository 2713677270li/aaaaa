/*
综合了所有的关于table数据的方法
*/

export default class linkEnum {
  constructor(value) {
    // console.log(value,"8888");
    this.value = value;
  }

  //获取相关的obj
  get(...val) {
    console.log(val);
    //如果当前的方法没有传入值，或者不是数组，我们就返回所有
    if (val.length === 0) {
      return this.value;
    }
    //否则就获取对应的数据
    //arr的作用就是返回得到的枚举数据
    let arr = [];
    //val是需要的数据
    val.forEach((item) => {
      //   console.log(item, "item")
      // console.log(this.value);
      this.value.forEach((name) => {
        //val的item和this.value的title进行一一匹配，从而获取对应的数据
        if (item === name.title) {
          arr.push(name);
        }
      });
    });
    return arr;
  }
  //过滤数据
  un(val, data) {
    //val是需要过滤的内容
    //data是需要过滤的数据源
    let arr = data;
    //判val是否是一个数组，如果是数组，则直接用，如果不是数组，则封装成数组
    let value = Array.isArray(val) ? val : [val];
    //过滤数据
    return arr.filter((item) => !value.includes(item.title));
  }

  //头部添加
  unshift(val, data) {
    //val是需要添加的内容
    //data是需要添加的数据源
    let arr = data;
    //判val是否是一个数组，如果是数组，则直接用，如果不是数组，则封装成数组
    let value = Array.isArray(val) ? val : [val];
    //拿整个大的数据源进行遍历查找，然后做添加操作
    this.value.forEach((item) => {
      value.forEach((name) => {
        if (name === item.title) {
          arr.unshift(item);
        }
      });
    });
    return arr;
  }

  //尾巴添加
  push(val, data) {
    //val是需要添加的内容
    //data是需要添加的数据源
    let arr = data;
    //判val是否是一个数组，如果是数组，则直接用，如果不是数组，则封装成数组
    let value = Array.isArray(val) ? val : [val];
    //拿整个大的数据源进行遍历查找，然后做添加操作
    this.value.forEach((item) => {
      value.forEach((name) => {
        if (name === item.title) {
          arr.push(item);
        }
      });
    });
    return arr;
  }

  //按照指定位置添加
  insert(val, index, data) {
    //val是需要添加的内容
    //index要添加的位置
    //data是需要添加的数据源
    let arr = data;
    //判val是否是一个数组，如果是数组，则直接用，如果不是数组，则封装成数组
    let value = Array.isArray(val) ? val : [val];
    //拿整个大的数据源进行遍历查找，然后做添加操作
    this.value.forEach((item) => {
      value.forEach((name) => {
        if (name === item.title) {
          arr.splice(index, 0, item);
        }
      });
    });
    return arr;
  }
}
