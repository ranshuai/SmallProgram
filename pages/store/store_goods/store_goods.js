Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneLevelNav: 1, //点击的类型 
    storeInfo: null,
    storeGoodsList: [],
    inputValue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      storeInfo: options.info
    });
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
    this.getStoreList({ type: 1, storeId: JSON.parse(this.data.storeInfo).storeId, keywords: this.data.inputValue});

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
  oneLevelNavClick: function (ev) {
    var _this = this;
    if (ev.currentTarget.dataset.info == this.data.oneLevelNav) {
      return;
    }
    this.setData({
      oneLevelNav: ev.currentTarget.dataset.info
    });
    this.getStoreList({ type: this.data.oneLevelNav, storeId: JSON.parse(this.data.storeInfo).storeId, keywords: this.data.inputValue});
  },
  goToAdd() {
    wx.navigateTo({
      url: "/pages/store/store_goods/store_goods_add/store_goods_add?info=" + this.data.storeInfo,
    })
  },
  getStoreList(json) {
    let self = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://riseupall.cn/server/getGoods',
      method: 'Get',
      data: json,
      success: function (res) {
        self.setData({
          storeGoodsList: res.data.result.list
        }
        )
      },
      complete: function () { 
        wx.hideLoading();
      },
      fail: function () {

      }
    })
  },
  //监听input事件
  bindKeyInput: function (e) {
    console.log(e);
    this.setData({
      inputValue: e.detail.value
    })
  },
  search(){
    this.getStoreList({ type: this.data.oneLevelNav, storeId: JSON.parse(this.data.storeInfo).storeId, keywords: this.data.inputValue })
  }
})