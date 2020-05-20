// pages/home/home.js

//页面的js文件中必须调用Page方法并且给它传入一个对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "今天天气不错",
    name: '芦培培',
    students: [
      {id: 1, name: '李贵林', age: 13},
      {id: 2, name: '李静轩', age: 11},
      {id: 3, name: '李明洋', age: 16}
    ],
    count1: 0,
    count2: 0
  },
  increse1(){
    // 使用下面这种改变变量的方法，变量发生了改变，
    //但是界面上的数据不会响应式改变,所有不使用
    this.data.count1 += 1
    console.log(this.data.count1)
  },
  decrese1(){
    // 使用下面这种改变变量的方法，变量发生了改变，
    //但是界面上的数据不会响应式改变,所有不使用
    this.data.count1 -= 1
    console.log(this.data.count1)
  },
  increse2(){
    // 使用下面这种改变变量的方法，不仅变量发生了改变，
    //界面上的数据也响应式改变，推荐使用
    this.setData({
      count2: this.data.count2 += 1
    })
    
    console.log(this.data.count2)
  },
  decrese2(){
    // 使用下面这种改变变量的方法，不仅变量发生了改变，
    //界面上的数据也响应式改变，推荐使用
    this.setData({
      count2: this.data.count2 += 1
    })
    
    console.log(this.data.count2)
  }
})