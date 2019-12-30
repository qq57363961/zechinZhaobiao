// pages/list/list.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbarTitle: [],
    currentTab: 0,
    zhaobiaoList: [{
        "id": 1,
        "leixing": "设备",
        "title": "FPC精密冲床",
        "subTitle": "60T精密冲床1台，和10T高速精密冲床3台",
        "detail": "均用于FPC和R-FPC的冲切，高速精密冲床;60T冲床，3台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护;10T冲床，1台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护",
        "riqi": "2019-05-09 14:37:50",
        "tag": "FPC精密冲床"
      }, {
        "id": 2,
        "leixing": "设备",
        "title": "FPC 真空蚀刻线",
        "subTitle": "用于FPC和软硬结合板的高精密线路蚀刻和退膜",
        "detail": "专业的FPC和软硬结合板 真空蚀刻线，附带退膜和烘干;板厚加工范围：0.03~2.0mm;最小线宽/线距：0.03/0.03mm;板宽加工范围：100*100mm~500*500mm;输送速度：0~5m/min，建议2.5m/min;符合环保要求;价格要求：面谈",
        "riqi": "2019-05-09 14:23:22",
        "tag": "E00001"
      }, {
        "id": 3,
        "leixing": "设备",
        "title": "自动贴PI补强机",
        "subTitle": "用于FPC自动贴PI补强",
        "detail": "用于FPC的自动贴PI补强机;要求精度±0.05mm，要有防漏贴和防重复贴功能;卷料PI补强，在PI补强机上自动冲切--自动贴合--自动上下料;效率需高于0.8s/pcs",
        "riqi": "2019-05-09 14:44:32",
        "tag": "自动贴PI补强机"
      }, {
        "id": 4,
        "leixing": "设备",
        "title": "干膜脱水机",
        "subTitle": "用于FPC的干膜脱水机",
        "detail": "FPC退干膜后废渣的脱水装置;减少FPC的废渣重量，符合环保要求;具有经济效益",
        "riqi": "2019-05-09 14:45:37",
        "tag": "干膜脱水机"
      },
      {
        "id": 5,
        "leixing": "设备",
        "title": "二次元（手动影像测量仪）",
        "subTitle": "手动影像测量仪，即二次元",
        "detail": "二次元，测量FPC的线路或外形长度;测量宽幅：300*400mm;测量精度：+/-0.005mm",
        "riqi": "2019-05-09 14:45:08",
        "tag": "二次元（手动影像测量仪）"
      },
      {
        "id": 6,
        "leixing": "设备",
        "title": "自动切割干膜收板机",
        "subTitle": "FPC卷对卷压膜后，自动裁切成片",
        "detail": "FPC卷对卷压膜后，自动裁切成片，再叠放整齐;匹配志胜压膜机，需带机械手;压膜后产品厚度在100~1000um范围内;要避免产品滚轮印、刮痕、压伤和裁斜等问题",
        "riqi": "2019-05-09 14:46:07",
        "tag": "自动切割干膜收板机"
      },
      {
        "id": 7,
        "leixing": "设备",
        "title": "FPC精密冲床",
        "subTitle": "60T精密冲床1台，和10T高速精密冲床3台",
        "detail": "均用于FPC和R-FPC的冲切，高速精密冲床;60T冲床，3台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护;10T冲床，1台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护",
        "riqi": "2019-05-09 14:37:50",
        "tag": "FPC精密冲床"
      }, {
        "id": 8,
        "leixing": "辅料",
        "title": "FPC 真空蚀刻线",
        "subTitle": "用于FPC和软硬结合板的高精密线路蚀刻和退膜",
        "detail": "专业的FPC和软硬结合板 真空蚀刻线，附带退膜和烘干;板厚加工范围：0.03~2.0mm;最小线宽/线距：0.03/0.03mm;板宽加工范围：100*100mm~500*500mm;输送速度：0~5m/min，建议2.5m/min;符合环保要求;价格要求：面谈",
        "riqi": "2019-05-09 14:23:22",
        "tag": "E00001"
      }, {
        "id": 9,
        "leixing": "生产物料",
        "title": "自动贴PI补强机",
        "subTitle": "用于FPC自动贴PI补强",
        "detail": "用于FPC的自动贴PI补强机;要求精度±0.05mm，要有防漏贴和防重复贴功能;卷料PI补强，在PI补强机上自动冲切--自动贴合--自动上下料;效率需高于0.8s/pcs",
        "riqi": "2019-05-09 14:44:32",
        "tag": "自动贴PI补强机"
      }, {
        "id": 10,
        "leixing": "包装材料",
        "title": "干膜脱水机",
        "subTitle": "用于FPC的干膜脱水机",
        "detail": "FPC退干膜后废渣的脱水装置;减少FPC的废渣重量，符合环保要求;具有经济效益",
        "riqi": "2019-05-09 14:45:37",
        "tag": "干膜脱水机"
      },
      {
        "id": 11,
        "leixing": "包装材料",
        "title": "二次元（手动影像测量仪）",
        "subTitle": "手动影像测量仪，即二次元",
        "detail": "二次元，测量FPC的线路或外形长度;测量宽幅：300*400mm;测量精度：+/-0.005mm",
        "riqi": "2019-05-09 14:45:08",
        "tag": "二次元（手动影像测量仪）"
      },
      {
        "id": 12,
        "leixing": "辅料",
        "title": "自动切割干膜收板机",
        "subTitle": "FPC卷对卷压膜后，自动裁切成片",
        "detail": "FPC卷对卷压膜后，自动裁切成片，再叠放整齐;匹配志胜压膜机，需带机械手;压膜后产品厚度在100~1000um范围内;要避免产品滚轮印、刮痕、压伤和裁斜等问题",
        "riqi": "2019-05-09 14:46:07",
        "tag": "自动切割干膜收板机"
      },
      {
        "id": 13,
        "leixing": "生产物料",
        "title": "FPC精密冲床",
        "subTitle": "60T精密冲床1台，和10T高速精密冲床3台",
        "detail": "均用于FPC和R-FPC的冲切，高速精密冲床;60T冲床，3台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护;10T冲床，1台：工作尺寸需大于500*350mm，精度GB（JIS）1 Class，要求多级安全保护",
        "riqi": "2019-05-09 14:37:50",
        "tag": "FPC精密冲床"
      }, {
        "id": 14,
        "leixing": "设备",
        "title": "FPC 真空蚀刻线",
        "subTitle": "用于FPC和软硬结合板的高精密线路蚀刻和退膜",
        "detail": "专业的FPC和软硬结合板 真空蚀刻线，附带退膜和烘干;板厚加工范围：0.03~2.0mm;最小线宽/线距：0.03/0.03mm;板宽加工范围：100*100mm~500*500mm;输送速度：0~5m/min，建议2.5m/min;符合环保要求;价格要求：面谈",
        "riqi": "2019-05-09 14:23:22",
        "tag": "E00001"
      }, {
        "id": 15,
        "leixing": "辅料",
        "title": "自动贴PI补强机",
        "subTitle": "用于FPC自动贴PI补强",
        "detail": "用于FPC的自动贴PI补强机;要求精度±0.05mm，要有防漏贴和防重复贴功能;卷料PI补强，在PI补强机上自动冲切--自动贴合--自动上下料;效率需高于0.8s/pcs",
        "riqi": "2019-05-09 14:44:32",
        "tag": "自动贴PI补强机"
      }, {
        "id": 16,
        "leixing": "包装材料",
        "title": "干膜脱水机",
        "subTitle": "用于FPC的干膜脱水机",
        "detail": "FPC退干膜后废渣的脱水装置;减少FPC的废渣重量，符合环保要求;具有经济效益",
        "riqi": "2019-05-09 14:45:37",
        "tag": "干膜脱水机"
      },
      {
        "id": 17,
        "leixing": "生产物料",
        "title": "二次元（手动影像测量仪）",
        "subTitle": "手动影像测量仪，即二次元",
        "detail": "二次元，测量FPC的线路或外形长度;测量宽幅：300*400mm;测量精度：+/-0.005mm",
        "riqi": "2019-05-09 14:45:08",
        "tag": "二次元（手动影像测量仪）"
      },
      {
        "id": 18,
        "leixing": "包装材料",
        "title": "自动切割干膜收板机",
        "subTitle": "FPC卷对卷压膜后，自动裁切成片",
        "detail": "FPC卷对卷压膜后，自动裁切成片，再叠放整齐;匹配志胜压膜机，需带机械手;压膜后产品厚度在100~1000um范围内;要避免产品滚轮印、刮痕、压伤和裁斜等问题",
        "riqi": "2019-05-09 14:46:07",
        "tag": "自动切割干膜收板机"
      },
    ],
    fontColorList: ['#FA0039', '#008BFB', '#FC7317', '#9D005B', '#18723A', '#5B20FA'],
    detailList: [],
    fold: true,
    foldText: '展开',
    showIndex: -1,
    zhaobiaoListLength: 0, //最新招标数量
    detailItem: null,
    getLeixing: null, //从其它页面传入的类型名
    getId: 0, //从其它页面传入进来的id

  },
  /**
   * 导航标签选择
   */
  swichNav: function(e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  /**
   * 导航页面显示
   */
  swiperChange: function(e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },
  changeToggle: function(e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: -1
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    //getnavbarTitle()类别数组去重，以获取导航栏条目
    this.setData({
      navbarTitle: this.getnavbarTitle(this.data.zhaobiaoList)
    });
    //获取页面跳转后显示的类型和要展开的对应的id
    this.setData({
      showIndex: app.globalData.detailItem.id - 1,
      getLeixing: app.globalData.detailItem.leixing
    })
    // this.requestData();
    // //获取屏幕高度
    // var self = this;
    // wx.getSystemInfo({
    //   success: function(res) {
    //     self.setData({
    //       windowHeight:res.windowHeight
    //     })
    //   },
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //页面跳转过来到navbar哪一项
    for (var i = 0; i < this.data.navbarTitle.length; i++) {
      if (this.data.getLeixing == this.data.navbarTitle[i]) {
        this.setData({
          currentTab: i
        });
      }
    }
    //获取招标信息
    //this.getZhaobiaoList(); //3.
    //获取招标数量
    this.getZhaoBiaoListLength();
  },
  onReady: function() {
    //获取招标信息的列表中的detail列表
    this.getDetailList();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取招标列表中的详情
  getDetailList: function() {
    var self = this;
    var detailArr = [];
    for (var i = 0; i < self.data.zhaobiaoList.length; i++) {
      detailArr[i] = self.data.zhaobiaoList[i].detail.split(";");
    }
    self.setData({
      detailList: detailArr
    })
    //console.log(self.data.detailList);
  },
  //访问网络，获取招标信息1.
  /*
  requestData: function() {
    this.setData({
      flag:false
    })
    var that = this;
    wx.request({
      url: app.globalData.zhaobiaoUrl,
      data: {
        a: 'getPortalList',
        catid: '5',
        page: that.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.result.length < 5) {//请求到的数据length<5时候，表示已经是最后一页，关掉开关
          var f = false;
        } else {

          var f = true;
        }

        var list = that.data.list.concat(res.data.result)
        var page = ++that.data.page;
        that.setData({
          list: list,
          page: page,
          flag: f
        })
      }
    })
  },
  */
  loadMore() { //出发加载更多
    // if (this.data.flag) {
    //   this.requestData(); 
    // }
    console.log("已经滑动到最底部了，继续加载数据。。。");
  },
  //获取招标信息数量
  getZhaoBiaoListLength: function() {
    //zhaobiaoList的长度
    var len = this.data.zhaobiaoList.length;
    this.setData({
      zhaobiaoListLength: len
    });
  },
  getnavbarTitle: function(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      newArr.push(array[i].leixing);
    }
    console.log(newArr);
    return Array.from(new Set(newArr));
  }
})