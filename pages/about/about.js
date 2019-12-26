// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rippleStyle: '',
    //轮播的图片
    imgUrls: [
      '/images/zechin/zechinIndex.jpg',
      '/images/zechin/zechinIntr1.jpg',
      '/images/zechin/zechinIntr2.jpg',
      '/images/zechin/zechinIntr3.jpg',
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    interval: 4000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    zechinInfo: '则成电子（股票代码837821）成立于2003年，为国家级高新技术企业。公司专注于FPC应用的定制化传感器模组模块的JDM制造服务商，产品主要应用包括汽车电子、医疗监护、指纹识别、通讯和消费电子等领域。公司拥有成熟完善的运作平台和管理体系实现与国际接轨，秉持顾客和技术双轮驱动的发展理念。则成电子在基于FPC运用的传感器JDM制造服务领域始终保持领先性，并由此成为众多世界500强企业的优秀供应商和合作伙伴。展望未来，以“创造-则成健康完美的人生”为愿景，发扬“诚信、和谐、创新、高效”的企业精神，则成电子将持续不断地扩大对世界的贡献。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广东则成科技有限公司是则成电子的全资子公司，根据企业产业布局和发展规划，新建年产45万平方米线路板“智造”工厂，此项目位于珠海市富山工业园富山片区高栏港高速东侧，2019年5月23日正式开工建设，预计2020年12月份建成投产。现就广东则成科技有限公司线路板生产设备、材料、工艺方案等全球供应链招商，欢迎专业厂商和朋友洽谈。'
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