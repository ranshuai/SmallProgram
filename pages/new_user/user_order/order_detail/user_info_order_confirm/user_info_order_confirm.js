 
 const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo:null,
    canClick: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      orderInfo: JSON.parse(options.orderInfo)
    });
    console.log(this.data.orderInfo);
    
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
  goToPay: function () {
    let slef = this;
    if (this.data.canClick) {
      this.setData({
        canClick: false
      });
      wx.request({
        url: 'https://riseupall.cn/server/payUnifiedorder',
        method: 'GET',
        data: {
          orderCode: this.data.orderInfo.orderSn,
          money: this.data.orderInfo.payAmount,
          orderID: this.data.orderInfo.orderId,
          openId: app.globalData.userInfo.userOpenId
        },
        success: function (res) {
          let data = res.data.result;
          if (res.data.success) {
            wx.requestPayment(
              {
                'timeStamp': data.timeStamp,
                'nonceStr': data.nonceStr,
                'package': 'prepay_id=' + data.prepayId,
                'signType': 'MD5',
                'paySign': data.sign,
                'success': function (res) {
                  console.log(res);
                  wx.showToast({
                    title: res.msg,
                    icon: 'none'
                  })
                  //改变订单的状态
                  wx.request({
                    url: 'https://riseupall.cn/server/setOrderStatus',
                    method: 'POST',
                    data: {
                      payStatus: 1,
                      orderSnArr: slef.data.orderInfo.orderSnArr
                    },
                    success: function () {
                      wx.navigateTo({
                        url: '/pages/pay_success/pay_success',
                      })
                    }
                  })
                },
                'fail': function (res) {
                  console.log(res);
                  wx.showToast({
                    title: res.msg,
                    icon: 'none'
                  })
                },
                'complete': function (res) {
                  console.log('支付=》complete');
                  slef.setData({
                    canClick: true
                  });


                }
              })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
        },
        complete: function () {
        }
      })
    }
  }
})