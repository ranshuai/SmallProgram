const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneLevelNav: '', //点击的类型
    storeInfo: null,
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
    console.log(options);
    this.setData({
      storeInfo: JSON.parse(options.info)
    });
    this.getOrderInfo(0);
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

    this.getOrderInfo(this.data.oneLevelNav);

  },

  getOrderInfo(type) {
    let self = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://riseupall.cn/server/getorder',
      method: 'GET',
      data: {
        type: type,
        storeId: this.data.storeInfo.storeId
      },
      header: {
        userId: app.globalData.userInfo.userId
      },
      success: function (res) {
        if (type === 0) {
          self.setData({
            orderInfo: {
              0: res.data.result.list
            }
          });
        }
        if (type === 1) {
          self.setData({
            'orderInfo.1': res.data.result.list
          });
        }
        if (type === 2) {
          self.setData({
            'orderInfo.2': res.data.result.list
          });
        }
        console.log(self.data.orderInfo);
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  //接单
  orderTaking(ev) {
  
    let self = this;
    wx.showModal({
      title: '确认接单吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '加载中...',
          })
          console.log('用户点击确认');
          wx.request({
            url: 'https://riseupall.cn/server/setOrderStatus',
            method: 'POST',
            data: {
              orderStatus: 1,
              orderSnArr: [{ orderSn: ev.currentTarget.dataset.orderinfo.orderSn}]
            },
            success: function (res) {
              console.log(res.data);
              wx.showToast({
                title: '请刷新页面',
                icon: 'none'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  //去发货
  goToDelivery(ev){
    let self = this;
    wx.showModal({
      title: '确认发货吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确认');
          wx.request({
            url: 'https://riseupall.cn/server/setOrderStatus',
            method: 'POST',
            data: {
              shippingStatus: 1,
              orderSnArr: [{ orderSn: ev.currentTarget.dataset.orderinfo.orderSn }]
            },
            success: function (res) {
              console.log(res.data);
              wx.showToast({
                title: '请刷新页面',
                icon: 'none'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  orderConfirm(ev){
    wx.showModal({
      title: '确认签收吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确认');
          wx.request({
            url: 'https://riseupall.cn/server/setOrderStatus',
            method: 'POST',
            data: {
              orderStatus: 6,
              orderSnArr: [{ orderSn: ev.currentTarget.dataset.orderinfo.orderSn }]
            },
            success: function (res) {
              console.log(res.data);
              wx.showToast({
                title: '请刷新页面',
                icon: 'none'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onScrollLowe(){
    console.log('111')
  },
  onPullDownRefresh() {
    this.getOrderInfo(this.data.oneLevelNav);
    wx.stopPullDownRefresh()
    // 上拉刷新
    // if (!this.loading) {
    //   this.fetchArticleList(1, true).then(() => {
    //     // 处理完成后，终止下拉刷新
    //     wx.stopPullDownRefresh()
    //   })
    // }
  }
})