Page({

  //加入购物车
  addCart:function(){
    console.log('加入购物车');

    wx.navigateTo({
      url: '/pages/order_confirm/order_confirm',
    })
  }

})