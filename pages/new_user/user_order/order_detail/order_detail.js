// pages/new_user/user_order/order_detail/order_detail.js
import utils from "../../../../utils/util.js" 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: null,
    orderTime:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      orderInfo: JSON.parse(options.orderInfo),
      orderTime: utils.dateFormat(JSON.parse(options.orderInfo).endTime - 7200000, 'Y-m-d H:i:s')
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
  goToConfirmPayment(ev) {
    wx.navigateTo({
      url: "/pages/new_user/user_order/order_detail/user_info_order_confirm/user_info_order_confirm?orderInfo="+JSON.stringify(ev.currentTarget.dataset.orderinfo),

    })
  }
})