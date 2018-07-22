Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneLevelNav:'', //点击的类型
    releaseList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://riseupall.cn/server/getrelease',
      data: {
        releaseType: '0'
      },
      success: function (data) {
        console.log(data);
        data = data.data;
        if(data.success){
          _this.setData({
            releaseList: data.result.list
          })
          console.log(_this.data.releaseList);
        }else{
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        }
      }
    })
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
  //点击一级导航
  oneLevelNavClick: function (ev) {
    wx.showLoading({
      title: '加载中',
    })
    var _this = this;
    if (ev.currentTarget.dataset.info == this.data.oneLevelNav) {
      return;
    }
    this.setData({
      oneLevelNav: ev.currentTarget.dataset.info
    })
    wx.request({
      url: 'https://riseupall.cn/server/getrelease',
      data:{
        releaseType: this.data.oneLevelNav
      },
      success: function (data) {
        console.log(data);
        var data = data.data
        if(data.success){
          _this.setData({
            releaseList: data.result.list
          })
        }else{
          wx.showToast({
            title: data.msg,
            icon: 'none'
          })
        }
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
})