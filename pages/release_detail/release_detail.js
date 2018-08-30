//引入第三方验证插件
import WxValidate from '../../utils/wx_validate.js'
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    _type: '0',
    array: ['1人', '2人', '3人', '4人', '5人', '6人', '7人', '8人', '9人', '10人以上'],
    index: 0,
    multiArray: [['2018-08-13', '2018-08-14', '2018-08-15', '2018-08-16', '2018-08-17', '2018-08-18', '2018-08-19', '2018-08-20', '2018-08-21', '2018-08-22', '2018-08-23', '2018-08-24', '2018-08-25', '2018-08-26', '2018-08-27', '2018-08-28', '2018-08-29', '2018-08-30', '2018-08-31', '2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04', '2018-09-05', '2018-09-06', '2018-09-07', '2018-09-08', '2018-09-09', '2018-09-10', '2018-09-11', '2018-09-12', '2018-09-13', '2018-09-14', '2018-09-15', '2018-09-16', '2018-09-17', '2018-09-18', '2018-09-19', '2018-09-20', '2018-09-21', '2018-09-22', '2018-09-23', '2018-09-24', '2018-09-25', '2018-09-26', '2018-09-27', '2018-09-28', '2018-09-29', '2018-09-30'], ['01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'], ['00分', '01分', '02分', '03分', '04分', '05分', '06分', '07分', '08分', '09分', '10分', '11分', '12分', '13分', '14分', '15分', '16分', '17分', '18分', '19分', '20分', '21分', '22分', '23分', '24分', '25分', '26分', '27分', '28分', '29分', '30分', '31分', '32分', '33分', '34分', '35分', '36分', '37分', '38分', '39分', '40分', '41分', '42分', '43分', '44分', '45分', '46分', '47分', '48分', '49分', '50分', '51分', '52分', '53分', '54分', '55分', '56分', '57分', '58分', '59分',]],
    multiIndex: [0, 0, 0],
    form: {
      start: '',
      end: '',
      contacts: '',
      mobile: '',
    },
    subData: {
      describe: '',
      persion: '1人',
      time: '2018-08-13 01时:00分'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    options.tapIndex = parseInt(options.tapIndex)+1;
    console.log(options.tapIndex);
    this.setData({
      _type: options.tapIndex
    })
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
    console.log(this.data);
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
  //时间选择器
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    //{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}}:{{multiArray[2][multiIndex[2]]}}
    this.setData({
      'subData.time': this.data.multiArray[0][this.data.multiIndex[0]] + ' ' + this.data.multiArray[1][this.data.multiIndex[1]] + ':' + this.data.multiArray[2][this.data.multiIndex[2]]
    });
  },
  //时间选择器
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },
  //乘车人数
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setData({
      'subData.persion': e.detail.value
    })
  },
  // 验证规则
  initValidate: function () {
    // 验证字段的规则  :'',

    const rules = {
      start: {
        required: true,
        maxlength: 11
      },
      end: {
        required: true,
        maxlength: 11
      },
      contacts: {
        required: true,
        maxlength: 11
      },
      mobile: {
        required: true,
        tel: true,
      }
    }

    //验证字段的提示信息
    const messages = {
      start: {
        required: '出发地是必填的'
      },
      end: {
        required: '目的地是必填的'
      },
      contacts: {
        required: '联系人是必填的'
      },
      mobile: {
        required: '手机号码是必填的'
      },

    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  },
  //提交
  submitForm(e) {
    const params = e.detail.value
    Object.assign(params, this.data.subData, { releaseType:this.data._type})
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
    console.log(params)
    this.saveData(params);
    wx.showToast({
      title: '发布成功',
      icon: 'none'
    })
  },
  //编辑需求
  bindTextAreaBlur: function (e) {
    this.setData({
      'subData.describe': e.detail.value
    })
  },
  //提交数据
  saveData: function (data) {
    wx.showLoading({
      title: '加载中',
    })
    var data = {
      startStation: data.start, // 始发站
      endStation: data.end, // 终点站
      goOff: data.time, //出发时间
      customerNum: data.persion, //顾客人数
      releasePersonName: data.contacts, //发布者的名字
      releasePersonMobile: data.mobile, // 发布者的手机号
      releaseDescribe: data.describe, // 备注信
      releaseType: data.releaseType
    }

    wx.request({
      url: 'https://riseupall.cn/server/release',
      method: 'POST',
      data: data,
      header:{
        userId: app.globalData.userInfo.userId
      },
      success: function (data) {
        wx.navigateBack()
      },
      complete: function (data) {
        wx.hideLoading();
      }
    })
  }
})