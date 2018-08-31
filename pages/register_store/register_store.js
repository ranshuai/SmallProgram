//引入第三方验证插件
import WxValidate from '../../utils/wx_validate.js';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['服务', '超市'],
    index: 0,
    form: {
      storeName: '',
      storeType: 0,
      storeAddress: '',
      directorName: '',
      directorMobile: '',
      storeIntroduction:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  // 验证规则
  initValidate: function () {
    // 验证字段的规则  :'',

    const rules = {
      storeName: {
        required: true,
        maxlength: 11
      },
      storeAddress: {
        required: true,
        maxlength: 11
      },
      directorName: {
        required: true,
        maxlength: 11
      },
      directorMobile: {
        required: true,
        tel: true,
      },
      storeIntroduction:{
        required: false,
      }
    }

    //验证字段的提示信息
    const messages = {
      start: {
        required: '店铺名称是必填的'
      },
      end: {
        required: '店铺地址是必填的'
      },
      contacts: {
        required: '负责人是必填的'
      },
      mobile: {
        required: '手机号码是必填的'
      },

    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setData({
      'form.storeType': e.detail.value
    })
  },
  //提交
  submitForm(e) {
    const params = e.detail.value;
    Object.assign(params, { storeType: this.data.form.storeType})
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      // this.showModal(error)
      console.log(error);
      wx.showToast({
        title: error.msg,
        icon: 'none'
      })
      return false
    }
    //提交信息
    this.saveData(params);
  },
  saveData(params){
    console.log(params);

    wx.request({
      url: 'https://riseupall.cn/server/registerStore',
      method: 'POST',
      data: params,
      header: {
        userId: app.globalData.userInfo.userId
      },
      success: function (data) {
        wx.showToast({
          title: '注册成功',
          icon: 'none',
          success:function(){
            wx.navigateBack();
          }
        })
      },
      complete: function (data) {
        wx.hideLoading();
      }
    })

  }
})