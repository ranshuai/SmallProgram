//获取应用实例
const app = getApp()
Page({
  data: {
    cartdata: [],
    selectedGoods: []
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    this.setData({
      selectedGoods: e.detail.value
    });
  },
  //加入购物车
  confirm: function () {
    if (!app.globalData.userInfo){
      wx.showToast({
        title: '请去个人中心页面授权',
        icon: 'none'
      })
      return 
    }
    if (this.data.selectedGoods.length <= 0) {
      wx.showToast({
        title: '请选择商品',
        icon:'none'
      })
      return;
    }
    let selectedGoodsArr = [];

    for (let i = 0; i < this.data.selectedGoods.length; i++){
      selectedGoodsArr.push(this.data.cartdata[this.data.selectedGoods[i]]);
    }
    app.globalData.orderConfirmInfo = selectedGoodsArr;
    
    wx.navigateTo({
      url: '/pages/order_confirm/order_confirm',
    })
  },

  onLoad: function () {
   
  },
  onShow:function(){
    let self = this;
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        self.setData({
          cartdata: res.data
        });
        console.log(res.data);
      }
    })
  },

  //进入店铺列表
  goToStoreType(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/search/search?type=' + e.currentTarget.dataset.storetype,
    })
  }
})