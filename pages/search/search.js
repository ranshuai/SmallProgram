Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', //searchValue
    selfType:'' //店铺类型
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
        selfType: options.type
      }
    )

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
      urls: ['/img/server_1.jpeg'],
    })

  },
  //进店
  goToStore(ev){
    console.log(ev);
    wx.navigateTo({
      url: "/pages/store_detail/store_detail",
      // data: ev.currentTarget.dataset.info
    })

  }






})