

Page({
  data: {
    oneLevelNav: 0,
    inputValue: '',
    releaseList: [],
  },
  //点击一级导航
  oneLevelNavClick: function (ev) {
    if (ev.currentTarget.dataset.info == this.data.oneLevelNav) {
      return;
    }
    this.setData({
      oneLevelNav: ev.currentTarget.dataset.info
    })
  },
  //搜索店铺
  goToStores: function () {
    if (!this.data.inputValue) {
      wx.showToast({
        title: '请输入需要查询的店铺名称',
        icon: 'none'
      })
      return
    }

    wx.navigateTo({
      url: '/pages/search/search?key=' + this.data.inputValue,
    })

  },
  //二级导航店铺
  goToStoreType(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/search/search?type=' + e.currentTarget.dataset.storetype,
    })
  },
  //监听input事件
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var _this = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://riseupall.cn/server/getreleaselocal',
      success: function (data) {
        data = data.data;
        if (data.success) {
          _this.setData({
            releaseList: data.result.list
          })
        } else {
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        }
      },
      complete: function () {
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
      }
    })
  },
  //加载更多
  onScrollLowe: function (ev) {
    // wx.showNavigationBarLoading();
    // setTimeout(function () {
    //   wx.stopPullDownRefresh();
    //   wx.hideNavigationBarLoading();
    // }, 1000);
  },
  //顺风车
  goToFreeRide: function (e) {
    wx.navigateTo({
      url: '/pages/free_ride/free_ride',
    })
  },
  onLoad: function (options) {
    this.getHomeData();
  },
  //获取首页数据
  getHomeData: function () {
    wx.showLoading({
      title: '加载中...',
    });
    var _this = this;
    wx.request({
      url: 'https://riseupall.cn/server/getreleaselocal',
      success: function (data) {
        data = data.data;
        if (data.success) {
          _this.setData({
            releaseList: data.result.list
          })
        } else {
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        }
      }, complete: function () {
        wx.hideLoading();
      }
    })
  },
  // 拨打电话
  phoneCall: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
      },
      complete: function () {
        wx.hideLoading();
      }
    });
  },
  //预览图片
  previewImg: function (ev) {
    wx.previewImage({
      urls: this.data.releaseList[ev.currentTarget.dataset.index].releaseImages,
    })
  }
})