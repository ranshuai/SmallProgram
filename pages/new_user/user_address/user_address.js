const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData: [],
    type: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果type = 2 就是从确认订单页进入地址列表页goToAddress的，
    this.setData({
      type: options.type
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
    this.getAddress();

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
  goToAddNewAddress() {
    wx.navigateTo({
      url: "/pages/new_user/user_address/add_new_address/add_new_address?type=1"
    })
  },
  goToAddress(e) {
    let addressInfo = e.currentTarget.dataset.addressinfo;
    if (this.data.type == 2) {
      app.globalData.addressInfo = addressInfo
      wx.navigateBack();
      return
    }
    wx.navigateTo({
      url: '/pages/new_user/user_address/add_new_address/add_new_address?type=2&addressData=' + JSON.stringify(addressInfo),
    })
  },

  //查询地址
  getAddress() {
    let self = this;
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://riseupall.cn/server/address',
      method: 'POST',
      header: {
        type: 3,
        userId: app.globalData.userInfo.userId
      },
      success: function (res) {
        let data = res.data
        if (data.success) {
          self.setData({
            addressData: data.result
          });
        }
      },
      complete: function () {
        wx.hideLoading();
      }
    })

  }
})