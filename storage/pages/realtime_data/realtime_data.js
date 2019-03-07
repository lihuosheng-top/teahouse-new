// storage/pages/realtime_data/realtime_data.js
import * as echarts from '../../../component/ec-canvas/echarts';
var app = getApp();
function initChart(canvas, width, height){
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart);

  var option = {
    title: {
      text: '实时仓储温度(°C)',
      left: 'center'
    },
    color: ['#37A2DA'],
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      name: '时间',
      type: 'time',
      boundaryGap: false,
      splitLine: {
        show: false
      },

    },
    yAxis: {
      name: '温度(℃)',
      position: 'right',
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      name: 'temperature',
      type: 'line',
      smooth: false, //曲线是否平滑
      data: [18, 36, 65, 30, 78, 40, 33]
    }]
  }
  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    currentTab: 0,
  },

  clickTab: function(e){
    // 切换选项卡
    var current = e.target.dataset.current,
        _this = this;
    if(_this.data.currentTab !== current){
      _this.setData({
        currentTab: current
      })
    }
  },

  swiperTab: function(e){
    // 滑动切换选项卡
    var current = e.detail.current;
    this.setData({
      currentTab: current
    })
  },

  getCurrentTime: function(){
    var currentTime = app.formatDate(new Date().getTime());
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})