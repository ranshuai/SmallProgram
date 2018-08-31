Page({
  data: {
    goodsList: null,
    storeInfo: {}
  },
  onLoad: function (option) {
    this.setData({
      storeInfo: JSON.parse(option.info)
    });
    console.log(this.data);
  },
  goToGoods(){
    wx.navigateTo({
      url: '/pages/store/store_goods/store_goods',
    })
  },
  goToOrder(){
    wx.navigateTo({
      url: '/pages/store/store_order/store_order',
    })
  }
})