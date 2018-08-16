//引入第三方验证插件
import WxValidate from '../../../../utils/wx_validate.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    addressId: 0,
    form: {
      consignee: '',
      mobile: '',
      address: '',
      isDefault: ''
    }
  },
  // 验证规则
  initValidate: function () {
    // 验证字段的规则  :'',

    const rules = {
      consignee: {
        required: true,
        maxlength: 11
      },
      mobile: {
        required: true,
        tel: true,
      },
      address: {
        required: true
      },
      isDefault: {
        required: false
      }
    }

    //验证字段的提示信息
    const messages = {
      consignee: {
        required: '姓名是必填的'
      },
      mobile: {
        required: '手机号码是必填的'
      },
      address: {
        required: '详细地址是必填的'
      },

    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type);
    if (options.type) {
      this.setData({
        type: options.type
      })
    }
    console.log(options.addressData);
    if (options.addressData) {
      let data = JSON.parse(options.addressData)
      this.setData({
        form: {
          consignee: data.consignee,
          mobile: data.mobile,
          address: data.address,
          isDefault: data.isDefault
        },
        addressId: data.addressId
      });
    }

    this.initValidate()
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
  //保存地址
  submitForm(e) {
    if (!app.globalData.userInfo.userId) {
      wx.showToast({
        title: '用户没有授权，不能设置地址',
        icon: 'none'
      });
      return
    }

    const params = e.detail.value;
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      console.log(error);
      wx.showToast({
        title: error.msg,
        icon: 'none'
      })
      return false
    }
    // //提交信息
    var data = {
      consignee: params.consignee,
      mobile: params.mobile,
      address: params.address,
      isDefault: params.isDefault.length > 0 ? true : false
    }
    if (this.data.type == 2) {
      Object.assign(data, { addressId: this.data.addressId, })
    }
    console.log(data)
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://riseupall.cn/server/address',
      method: 'POST',
      data: data,
      header: {
        type: this.data.type,
        userId: app.globalData.userInfo.userId
      },
      success: function () {
        wx.showToast({
          title: '保存成功',
          icon: 'none'
        });
        wx.navigateBack();
      },
      fail: function () {
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        })
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  deleteAddress() {
    let self = this;
    wx.showModal({
      title: '确认删除此地址吗？',
      content: '',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://riseupall.cn/server/address',
            method: 'POST',
            data: {
              addressId: self.data.addressId
            },
            header: {
              type: 4,
              userId: app.globalData.userInfo.userId
            },
            success: function () {
              wx.navigateBack();
            }
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})