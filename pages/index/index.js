//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    // 全局变量的获取
    test: app.data.test,
    // 轮播图图片地址数据
    image: [
      app.globalData.url + '/upload/20181101/66d07e1b7f6e2fb807e02dba5f4cab0b.png',
      app.globalData.url + '/upload/20181128/eb9826b6cbef8a7a581d7cd55726612f.jpg',
      app.globalData.url + '/upload/20181128/31d02b855e58a946d5c8dddbb278376b.jpg',
    ],
   
    circular: 'true',
    indicatorDots: 'true',
    interval:'2000',
    autoplay:'true',
    // 小喇叭图片地址
    laba:'img/u206.png',
    // 关闭图片地址
    close:'img/close.png',
    // 更多图片地址
    more:'img/more.png',
    nav:[
      {
        url:'img/u103.png',
        text:'商品分类'
      },
      {
        url: 'img/u266.png',
        text: '我的消息'
      },
      {
        url: 'img/u105.png',
        text: '买茶入仓'
      },
      {
        url: 'img/u107.png',
        text: '出仓提货'
      },
      {
        url: 'img/u242.png',
        text: '茶山走势'
      },

    ],
  // 商品信息
    routers: [
      {
        name: '双骄',
        url: '/pages/Course/course',
        icon: 'img/u160.jpg',
        code: '10',
        selling:[
          '新益号',
          '普洱茶'
        ],
        price_img: 'img/u182.png'
        
      },
      {
        name: '双骄',
        url: '/pages/Course/course',
        icon: 'img/u160.jpg',
        code: '10',
        selling: [
          '新益号',
          '普洱茶'
        ],
        price_img: 'img/u182.png',
        jiage: '￥120.0/片'
      },
      {
        name: '双骄',
        url: '/pages/Course/course',
        icon: 'img/u160.jpg',
        code: '10',
        selling: [
          '新益号',
          '普洱茶'
        ],
        price_img: 'img/u182.png',
        jiage: '￥120.0/片'
      },
     
      {
        name: 'Python',
        url: '/pages/Course/course',
        icon: 'img/u160.jpg',
        code: '10',
        selling: [
          '新益号',
          '普洱茶'
        ],
        price_img: 'img/u182.png',
        jiage: '￥120.0/片'
      },
    
    ],
    // 分享信息
    share: [
    ]

    },
  onShow: function () {
    var that = this;
  wx.request({
    url: app.globalData.tiltes + 'teacenter_recommend',
    data: {
    },
    method: "post",
    // header: {
    //   "Content-Type": "json" // 默认值

    // },
    success: function (res) {
      console.log(res);
      that.setData({
        share: res.data.data,
      });
      //  添加字段到等级数组
      for (var index in that.data.share) {
        var sexParam = "share[" + index + "].url";
        that.setData({
          [sexParam]: app.globalData.img_url,
        })

      }


    },
    fail: function () {

    },
    complete: function () {
      wx.hideLoading()
    }

  });

    
  }
 
})
