const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', //searchValue
    selfType:'', //店铺类型
    storeType:null,
    storesList:[]
  },
  // 拨打电话
  phoneCall:function(e){
    wx.showLoading({
      title: '加载中',
    })
    wx.makePhoneCall({
      phoneNumber:e.currentTarget.dataset.replyPhone,
      success:function(){
      },
      complete:function(){
        wx.hideLoading();
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {
        inputValue: options.key,
        selfType: options.type,
        storeType: options.type == "shop" ? 1: 0
      }
    )
    this.getStoreDate();
    console.log(this.data)
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

  //监听input事件
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //搜索
  search: function () {
    if (!this.data.inputValue){
      wx.showToast({
        title: '请输入需要查询的店铺名称',
        icon: 'none'
      })
      return 
    }
    wx.showLoading({
      title: '加载中',
    });

    setTimeout(function(){
      wx.hideLoading();
    },1000)
  },
  //预览图片
  previewImg: function () {
    wx.previewImage({
      urls: ['https://riseupall.oss-cn-beijing.aliyuncs.com/static/1533874622727_tmp_9bc1c2ce20572804173fa2aa060db633.jpg', 'https://riseupall.oss-cn-beijing.aliyuncs.com/static/1533874622727_tmp_9bc1c2ce20572804173fa2aa060db633.jpg'],
    })

  },
  //进店
  goToStore(ev){
    //如果当前用户的id和店铺信息里面的userId一样就跳店铺管理页面
    let info = JSON.stringify(ev.currentTarget.dataset.info);
    if (ev.currentTarget.dataset.info.userId == app.globalData.userInfo.userId){
        wx.navigateTo({
        url: "/pages/store/store_index/store_index?info=" + info,
        })
      return 
    }
    wx.navigateTo({
      url: "/pages/store_detail/store_detail?info=" + info,
    })

  },
  getStoreDate:function(){
    let self = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://riseupall.cn/server/getStore',
      method:'GET',
      data:{
        storeType: this.data.storeType
      },
      success:function(res){
        self.setData({
          storesList: res.data.result.list
        })
      },
      complete:function(){
        wx.hideLoading();
      }
    })
  }






})