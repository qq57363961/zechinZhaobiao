// pages/detail/detail.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/detail/shikexian.jpg',
      '/images/detail/jingmichongchuang.jpg',
      '/images/detail/buqiangji.jpg',
      '/images/detail/shoudongyingxiang.jpg',
      '/images/detail/ganmotuoshui.jpg',
      '/images/detail/shoubanji.jpg',
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    interval: 4000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    detailItem:{},
    rippleStyle:'',
    routers: [
      {
        name: '设备',
        url: '/pages/shebei/shebei',
        icon: '/images/detail/shebei.jpg',
        code: '10'
      },
      {
        name: '生产物料',
        url: '/pages/shengchanwuliao/shengchanwuliao',
        icon: '/images/detail/wuliao.jpg',
        code: '11'
      },
      {
        name: '辅料',
        url: '/pages/fuliao/fuliao',
        icon: '/images/detail/fuliao.jpg',
        code: '10'
      },
      {
        name: '包装材料',
        url: '/pages/baozhuangcailiao/baozhuangcailiao',
        icon: '/images/detail/baozhuang.jpg',
        code: '11'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
    //  leibie : app.globalData.leibie,
    //  title : app.globalData.title,
    //  subTitle : app.globalData.subTitle,
    //  detail : app.globalData.detail,
    //  riqi : app.globalData.riqi,
    //  tag : app.globalData.tag
    detailItem:app.globalData.detailItem
   })
  },
  containerTap: function (res) {
    var that = this
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    setTimeout(function () {
      that.setData({
        rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
      });
    }, 200)
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