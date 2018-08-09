Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  // 支付

  goToPay: function () {

    wx.requestPayment(
      {
        'timeStamp': '1533725279',
        'nonceStr': 'l710bsje2w',
        'package': 'prepay_id=wx0818475981459296444966de2376722170',
        'signType': 'MD5',
        'paySign': 'E77543BD85FF35C892F6681CDF9CBBDD',
        'success': function (res) { 
          console.log('支付=success');
        },
        'fail': function (res) { 
          console.log(res);
        },
        'complete': function (res) {
          console.log('支付=》complete');
          
         }
      })



  }
})