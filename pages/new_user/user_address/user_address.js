const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData: []
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
    wx.navigateTo({
      url: '/pages/new_user/user_address/add_new_address/add_new_address?type=2&addressData=' + JSON.stringify(addressInfo),
    })
  },

  //查询地址
  getAddress() {
    let self = this;
    console.log(app.globalData.userInfo);
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://riseupall.cn/server/address',
      method: 'POST',
      header: {
        type: 3,
        userId: 1000
      },
      success: function (res) {
        console.log(res.data.success);
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