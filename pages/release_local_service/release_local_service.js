const app = getApp();
//引入第三方验证插件
import WxValidate from '../../utils/wx_validate.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    successUp: 0,
    successImage: [],
    successImageNew: [],
    form: {
      releaseLocalTitle: '',
      releasePersonName: '',
      releasePersonMobile: '',
    },
    subData:{
      describe:'',
      images:[]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initValidate()
  },
  // 验证规则
  initValidate: function () {
    // 验证字段的规则  :'',
    const rules = {
      releaseLocalTitle: {
        required: true,
        maxlength: 11
      },
      releasePersonName: {
        required: true,
        maxlength: 11
      },
      releasePersonMobile: {
        required: true,
        tel: true,
      }
    }
    //验证字段的提示信息
    const messages = {
      releaseLocalTitle: {
        required: '标题是必填的'
      },
      releasePersonName: {
        required: '联系人是必填的'
      },
      releasePersonMobile: {
        required: '手机号码是必填的'
      },

    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  },

  //编辑需求
  bindTextAreaBlur: function (e) {
    this.setData({
      'subData.describe': e.detail.value
    })
  },

  /**
   * 打开相册
   */
  openChooseImage() {
    var self = this;
    this.data.successUp = 0;
    this.data.successImage = [];
    this.data.successImageNew = [];

    wx.showLoading({
      title: '加载中',
    })
    if (app.ISDEBUGGER) {
      console.log('打开相册');
    }
    wx.chooseImage({
      count: 3, //默认9张
      sizetype: [],//可以指定是原图还是压缩图默认两者都是
      sourceType: ['album', 'camera'], //可以指定来源相册还是相机默认两者都是
      success: function (res) {
        console.log(res);
        var temFilePaths = res.tempFilePaths;
        for (let i = 0; i < temFilePaths.length; i++) {
          wx.uploadFile({
            url: 'https://riseupall.cn/server/release/uploadImg',
            filePath: temFilePaths[i],
            name: 'file',
            header: {
              "Content-Type": "multipart/form-data",
              'accept': 'application/json',
              // 'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略
            },
            formData: {
              'user': 'test'  //其他额外的formdata，可不写
            },
            success: function (res) {
              let data = JSON.parse(res.data)
              self.data.successUp++;
              self.data.successImage.push(data.result.images[0])
            },
            fail: function (res) {
              console.log('fail');
            },
            complete: function (res) {
              if (self.data.successUp == temFilePaths.length) {
                var arr = self.data.successImageNew.concat(self.data.successImage)
                self.setData({
                  successImageNew: arr
                });
                self.setData({
                  'subData.images': arr
                })
                // self.data.successImageNew = self.data.successImage;
                // wx.showToast({
                //   title: '总共' + self.data.successUp + '张上传成功,',
                // })
              }
            }
          })
        }


      },
      fail: function () {

      },
      complete: function () {
        wx.hideLoading();
      }
    })

  },
  /**
   * 
   **/
  submitForm(e) {
    const params = e.detail.value
    Object.assign(params, this.data.subData)
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

  //提交数据
  saveData: function (data) {
    console .log(data);
    wx.showLoading({
      title: '加载中',
    })
    var data = {
      releaseLocalTitle: data.releaseLocalTitle, // 始发站
      releasePersonName: data.releasePersonName, //发布者的名字
      releasePersonMobile: data.releasePersonMobile, // 发布者的手机号
      releaseDescribe: data.describe, // 备注信
      releaseImages: data.images
    }

    wx.request({
      url: 'https://riseupall.cn/server/releaselocal',
      method: 'POST',
      data: data,
      success: function (data) {
        wx.navigateBack()
      },
      complete: function (data) {
        wx.hideLoading();
      }
    })
  }


})