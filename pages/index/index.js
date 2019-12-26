// pages/about/about.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    zechinInfo: '则成电子（股票代码837821）成立于2003年，为国家级高新技术企业。公司专注于FPC应用的定制化传感器模组模块的JDM制造服务商，产品主要应用包括汽车电子、医疗监护、指纹识别、通讯和消费电子等领域。公司拥有成熟完善的运作平台和管理体系实现与国际接轨，秉持顾客和技术双轮驱动的发展理念。则成电子在基于FPC运用的传感器JDM制造服务领域始终保持领先性，并由此成为众多世界500强企业的优秀供应商和合作伙伴。展望未来，以“创造-则成健康完美的人生”为愿景，发扬“诚信、和谐、创新、高效”的企业精神，则成电子将持续不断地扩大对世界的贡献。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广东则成科技有限公司是则成电子的全资子公司，根据企业产业布局和发展规划，新建年产45万平方米线路板“智造”工厂，此项目位于珠海市富山工业园富山片区高栏港高速东侧，2019年5月23日正式开工建设，预计2020年12月份建成投产。现就广东则成科技有限公司线路板生产设备、材料、工艺方案等全球供应链招商，欢迎专业厂商和朋友洽谈。',
    fold: true,
    foldText: '展开',
    zhaobiaoList: [{
        "leibie": "设备",
        "title": "FPC精密冲床",
        "subTitle": "60T精密冲床1台，和10T高速精密冲床3台",
        "detail": "均用于FPC和R-FPC的冲切，高速精密冲床;60T冲床，3台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护;10T冲床，1台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护",
        "riqi": "2019-05-09 14:37:50",
        "tag": "FPC精密冲床"
      }, {
        "leibie": "设备",
        "title": "FPC 真空蚀刻线",
        "subTitle": "用于FPC和软硬结合板的高精密线路蚀刻和退膜",
        "detail": "专业的FPC和软硬结合板 真空蚀刻线，附带退膜和烘干;板厚加工范围：0.03~2.0mm;最小线宽/线距：0.03/0.03mm;板宽加工范围：100*100mm~500*500mm;输送速度：0~5m/min，建议2.5m/min;符合环保要求;价格要求：面谈",
        "riqi": "2019-05-09 14:23:22",
        "tag": "E00001"
      }, {
        "leibie": "设备",
        "title": "自动贴PI补强机",
        "subTitle": "用于FPC自动贴PI补强",
        "detail": "用于FPC的自动贴PI补强机;要求精度±0.05mm，要有防漏贴和防重复贴功能;卷料PI补强，在PI补强机上自动冲切--自动贴合--自动上下料;效率需高于0.8s/pcs",
        "riqi": "2019-05-09 14:44:32",
        "tag": "自动贴PI补强机"
      }, {
        "leibie": "设备",
        "title": "干膜脱水机",
        "subTitle": "用于FPC的干膜脱水机",
        "detail": "FPC退干膜后废渣的脱水装置;减少FPC的废渣重量，符合环保要求;具有经济效益",
        "riqi": "2019-05-09 14:45:37",
        "tag": "干膜脱水机"
      },
      {
        "leibie": "设备",
        "title": "二次元（手动影像测量仪）",
        "subTitle": "手动影像测量仪，即二次元",
        "detail": "二次元，测量FPC的线路或外形长度;测量宽幅：300*400mm;测量精度：+/-0.005mm",
        "riqi": "2019-05-09 14:45:08",
        "tag": "二次元（手动影像测量仪）"
      },
      {
        "leibie": "设备",
        "title": "自动切割干膜收板机",
        "subTitle": "FPC卷对卷压膜后，自动裁切成片",
        "detail": "FPC卷对卷压膜后，自动裁切成片，再叠放整齐;匹配志胜压膜机，需带机械手;压膜后产品厚度在100~1000um范围内;要避免产品滚轮印、刮痕、压伤和裁斜等问题",
        "riqi": "2019-05-09 14:46:07",
        "tag": "自动切割干膜收板机"
      },
      {
        "leibie": "设备",
        "title": "FPC精密冲床",
        "subTitle": "60T精密冲床1台，和10T高速精密冲床3台",
        "detail": "均用于FPC和R-FPC的冲切，高速精密冲床;60T冲床，3台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护;10T冲床，1台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护",
        "riqi": "2019-05-09 14:37:50",
        "tag": "FPC精密冲床"
      }, {
        "leibie": "设备",
        "title": "FPC 真空蚀刻线",
        "subTitle": "用于FPC和软硬结合板的高精密线路蚀刻和退膜",
        "detail": "专业的FPC和软硬结合板 真空蚀刻线，附带退膜和烘干;板厚加工范围：0.03~2.0mm;最小线宽/线距：0.03/0.03mm;板宽加工范围：100*100mm~500*500mm;输送速度：0~5m/min，建议2.5m/min;符合环保要求;价格要求：面谈",
        "riqi": "2019-05-09 14:23:22",
        "tag": "E00001"
      }, {
        "leibie": "设备",
        "title": "自动贴PI补强机",
        "subTitle": "用于FPC自动贴PI补强",
        "detail": "用于FPC的自动贴PI补强机;要求精度±0.05mm，要有防漏贴和防重复贴功能;卷料PI补强，在PI补强机上自动冲切--自动贴合--自动上下料;效率需高于0.8s/pcs",
        "riqi": "2019-05-09 14:44:32",
        "tag": "自动贴PI补强机"
      }, {
        "leibie": "设备",
        "title": "干膜脱水机",
        "subTitle": "用于FPC的干膜脱水机",
        "detail": "FPC退干膜后废渣的脱水装置;减少FPC的废渣重量，符合环保要求;具有经济效益",
        "riqi": "2019-05-09 14:45:37",
        "tag": "干膜脱水机"
      },
      {
        "leibie": "设备",
        "title": "二次元（手动影像测量仪）",
        "subTitle": "手动影像测量仪，即二次元",
        "detail": "二次元，测量FPC的线路或外形长度;测量宽幅：300*400mm;测量精度：+/-0.005mm",
        "riqi": "2019-05-09 14:45:08",
        "tag": "二次元（手动影像测量仪）"
      },
      {
        "leibie": "设备",
        "title": "自动切割干膜收板机",
        "subTitle": "FPC卷对卷压膜后，自动裁切成片",
        "detail": "FPC卷对卷压膜后，自动裁切成片，再叠放整齐;匹配志胜压膜机，需带机械手;压膜后产品厚度在100~1000um范围内;要避免产品滚轮印、刮痕、压伤和裁斜等问题",
        "riqi": "2019-05-09 14:46:07",
        "tag": "自动切割干膜收板机"
      },
    ],
    fontColorList: ['#FA0039', '#008BFB', '#FC7317', '#9D005B', '#18723A', '#5B20FA'],
    detailList: [],
    zhaobiaoListLength: 0, //最新招标数量
    showIndex: -1
  },
  unfold: function(e) {
    var page = this;
    let value = !this.data.fold;
    var text = '';
    if (value) {
      text = '展开';
    } else {
      text = '收起';
    }
    this.setData({
      fold: value,
      foldText: text
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取招标数量
    this.getZhaoBiaoListLength();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //获取招标信息数量
  getZhaoBiaoListLength: function() {
    //zhaobiaoList的长度
    var len = this.data.zhaobiaoList.length;
    this.setData({
      zhaobiaoListLength: len
    });
  },

  loadMore: function() { //触发加载更多
    // if (this.data.flag) {
    //   this.requestData(); 
    // }
    console.log("已经滑动到最底部了，继续加载数据。。。");
  },
  //点击列表，跳转到详情页面，把index传过去
  toDetail: function(e) {
    //showIndex是被选中的item的index，否则为-1
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: -1
      })
    }
    var index = e.currentTarget.dataset.index;
    //使用全局变量传值
    app.globalData.detailItem = this.data.zhaobiaoList[index];
    setTimeout(function(){
      wx.switchTab({
        url: '/pages/detail/detail',
        //switchTab默认跳转后不会刷新，需设置
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        }
      })
    },1000)
  },
  // 页面触摸水波纹效果
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
})