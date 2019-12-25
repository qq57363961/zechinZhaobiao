// pages/user/user.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toubiao: 0, //我的投标数量
    shoucang: 0, //我的收藏数量
    userInfo: {}, //用户信息
    hasUserInfo: false, //是否已有用户信息，默认false
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //判断小程序的API，回调，参数，组件等是否在当前版本可用
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 如果全局变量中已有了userInfo,把全局的userInfo拿来使用
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) { //如果当前版本兼容小程序的API，回调，参数，组件等
      //由于getUserInfo是网络请求，可能会在Page.onLoad之后才返回
      //所以此处加入callback以防止这种情况
      app.userInfoReadyback = res =>{
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }else{
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          //res.userInfo就是用户信息
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo;
    if(e.detail.userInfo){
      //用户按了允许授权按钮
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }else{
      //用户按了拒绝按钮
      this.setData({
        userInfo: {},
        hasUserInfo: false
      })
    }
    
    // console.log(this.data.userInfo);
    // console.log(this.data.userInfo.nickName);
    // console.log(this.data.userInfo.avatarUrl);
    // console.log(this.data.userInfo.gender);
    // console.log(this.data.userInfo.province);
    // console.log(this.data.userInfo.city);
    // console.log(this.data.userInfo.country);
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