const app = getApp();

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
  selectedReleaseType(e) {
    app.selfShowAuthorization().then(ev => {
      console.log(ev);
      if (ev) {
        if (e.currentTarget.dataset.releasetype == "freeRide") {
          wx.showActionSheet({
            itemList: ['人找车', '车找人', '天天拼'],
            itemColor: '#333',
            success: function (e) {
              console.log(e);
              wx.navigateTo({
                url: '/pages/release_detail/release_detail?tapIndex=' + e.tapIndex
              })
            }
          })
        }
        if (e.currentTarget.dataset.releasetype == "localService") {
          wx.navigateTo({
            url: '/pages/release_local_service/release_local_service'
          })
        }
      }
    });
  }
})