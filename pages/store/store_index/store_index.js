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
    let info = JSON.stringify(this.data.storeInfo);
    wx.navigateTo({
      url: '/pages/store/store_goods/store_goods?info=' + info,
    })
  },
  goToOrder(){
    let info = JSON.stringify(this.data.storeInfo);
    
    wx.navigateTo({
      url: '/pages/store/store_order/store_order?info=' + info,
    })
  }
})