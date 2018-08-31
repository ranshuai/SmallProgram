//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
    })
    console.log(app.globalData.userInfo)
    wx.getSetting({
      success: function (e) {
        console.log(e)
      },
      complete: function (e) {
        console.log(e);
      }
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
    })

    // 登录 
    wx.login({
      success: function (res) {
        //使用
        wx.request({
          method: 'POST',
          url: 'https://riseupall.cn/server/signup',
          data: {
            code: res.code,
            userName: app.globalData.userInfo.nickName,
            userMobile: '',
            userPicture: app.globalData.userInfo.avatarUrl
          },
          success: function (res) {
            if (res.data.success) {
              app.globalData.userInfo.userMobile = res.data.result.userMobile || '';
              app.globalData.userInfo.userId = res.data.result.userId || '';
              app.globalData.userInfo.userOpenId = res.data.result.userOpenId || '';
              console.log(app.globalData.userInfo);

              wx.setStorage({
                key: 'seltUser',
                data: {
                  userMobile: res.data.result.userMobile || '',
                  userId: res.data.result.userId || '',
                  userOpenId: res.data.result.userOpenId||''
                },
              })
            }
          }
        })
      }
    });
  },

  goToUserAddress(){
    wx.navigateTo({
      url: '/pages/new_user/user_address/user_address',
    })
  },
  goToUserOrder(){
    wx.navigateTo({
      url: '/pages/new_user/user_order/user_order',
    })
  },
  goToUserRelease(){
    wx.navigateTo({
      url: '/pages/new_user/user_release/user_release',
    })
  }
  


})