Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneLevelNav: '', //点击的类型
    orderInfo: {
      0: [],
      1: [],
      2: [],
      3: []
    }
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
    
  },
  //点击一级导航
  oneLevelNavClick: function (ev) {
    var _this = this;
    if (ev.currentTarget.dataset.info == this.data.oneLevelNav) {
      return;
    }
    this.setData({
      oneLevelNav: ev.currentTarget.dataset.info
    })

    // this.getOrderInfo(this.data.oneLevelNav);

  }
})