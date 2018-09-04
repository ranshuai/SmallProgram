const app = getApp();

const utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: null,
    orderConfirmInfo: null,
    orderTotal: null,
    orderInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAddress();
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
    this.setData({
      addressInfo: app.globalData.addressInfo,
      orderConfirmInfo: app.globalData.orderConfirmInfo,
    });

    let totalPrice = 0;
    for (let i = 0; i < this.data.orderConfirmInfo.length; i++) {
      totalPrice = totalPrice + Number(this.data.orderConfirmInfo[i].shopPrice) * Number(this.data.orderConfirmInfo[i].goodsNum)
    }

    this.setData({
      orderTotal: totalPrice
    })
    console.log(this.data.orderTotal);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //清除
    // app.globalData.orderConfirmInfo = null;
    console.log(app.globalData.orderConfirmInfo);
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

  //订单支付
  goToOrderPay: function (ev) {
    let self = this;
    wx.showLoading({
      title: '加载中',
    })
    //生成订单
    let sendOrderInfo = {
      addressId: this.data.addressInfo.addressId,//地址Id
      goodsInfo: this.data.orderConfirmInfo, //商品信息
    }
    console.log(sendOrderInfo);
    wx.request({
      url: 'https://riseupall.cn/server/prepare/order',
      method: 'POST',
      data: sendOrderInfo,
      header: {
        userId: app.globalData.userInfo.userId
      },
      success: function (res) {
        self.data.orderInfo = res.data;
        //清除购物车
        wx.getStorage({
          key: 'cart',
          success: function (res) {
            let newArr = [];
            for(let i = 0; i<res.data.length; i++){
              if (!utils.findArr(res.data, self.data.orderInfo.result.goodsInfoArr[i])) {
                newArr.push(res.data[i]);
              } 
            }
            wx.setStorage({
              key: 'cart',
              data: newArr,
            })
          }
        });
        wx.navigateTo({
          url: '/pages/order_pay/order_pay?orderInfo=' + JSON.stringify(self.data.orderInfo.result),
        })
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })


  },
  goToAddress() {
    wx.navigateTo({
      url: "/pages/new_user/user_address/user_address?type=2",
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
          for (let i = 0; i < data.result.length; i++) {
            if (data.result[i].isDefault) {
              app.globalData.addressInfo = data.result[i];
              self.setData({
                addressInfo: data.result[i]
              });
              break;
            }
          }

        }
      },
      complete: function () {
        wx.hideLoading();
      }
    })

  },
  //买家备注
  bindinput(ev) {
    this.data.orderConfirmInfo[ev.currentTarget.dataset.remarkindex].remark = ev.detail.value;
  }



})