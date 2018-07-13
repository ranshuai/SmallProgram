

Page({
  data: {
    oneLevelNav: 0,
    inputValue: ''
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
        icon:'none'
      })
      return
    }
    wx.navigateTo({
      url: '/pages/search/search?key='+this.data.inputValue,
    })
  },
  //二级导航店铺
  goToStoreType(e){
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
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 1000);
  },
  //加载更多
  onScrollLowe: function (ev) {
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 1000);
  },
  //顺风车
  goToFreeRide:function(e){
    wx.navigateTo({
      url: '/pages/free_ride/free_ride',
    })
  }
})