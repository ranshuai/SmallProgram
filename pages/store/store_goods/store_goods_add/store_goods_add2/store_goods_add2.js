var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    successUp: 0,
    successImage: [],
    successImageNew: [],
    subData: {
      images: []
    },
    storeInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.canClick = true;

    console.log(JSON.parse(options.info))
    this.setData({
      storeInfo: JSON.parse(options.info)
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
              'goods': 'prod'  //其他额外的formdata，可不写
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
                var arr = self.data.successImageNew.concat(self.data.successImage);
                setTimeout(()=>{
                  self.setData({
                    successImageNew: arr
                  });
                },1000);
                self.setData({
                  'subData.images': arr
                })
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
  saveGoods() {
    if (app.globalData.canClick) {
      app.globalData.canClick = false;
      wx.showLoading({
        title: '加载中...',
      })
      Object.assign(this.data.subData, this.data.storeInfo)
      wx.request({
        url: 'https://riseupall.cn/server/releaseGoods',
        method: 'POST',
        data: this.data.subData,
        success: function (res) {
          if (res.data.success) {
            wx.navigateBack({
              delta: 2
            })
          }else{
            wx.showToast({
              title: '商品发布失败',
              icon:'none'
            })
          }
        },
        complete: function (res) {
          wx.hideLoading();
          app.globalData.canClick = true;
        },
        fail: function (res) {
         
        }
      })
    }
  }
})