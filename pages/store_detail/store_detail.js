Page({

  //加入购物车
  addCart: function () {
    let statusJson = {
      "0": "加入购物车成功",
      "1": "购物车已有相同商品",
      "2": "购物车最多暂存10件商品"
    },
      status = 0;

    console.log('加入购物车');
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        var data = {
          goodsId: 10002,
          goodsName: '内部测试请勿购买',
          shopPrice: 100000,
          goodsImg:'http://snsall.oss-cn-qingdao.aliyuncs.com/DF4D69929FD7F405/goods/77856/f51d7675-07f7-4ebd-bf38-950be0b6ff90.jpg?x-oss-process=image/resize,m_fixed,h_336,w_336'
        };
        //如果有相同的商品就不添加

        if (res.data.length >= 10) {
          status = 2;
          return;
        }

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].goodsId == data.goodsId) {
            status = 1;
            break;
          }
        }

        res.data.push(data);

        if (status === 0){
          wx.setStorage({
            key: "cart",
            data: res.data
          });
        }

      },
      fail: function (res) {
        wx.setStorage({
          key: "cart",
          data: [{
            goodsId: 10001,
            goodsName: '内部测试请勿购买',
            shopPrice: 100000,
            goodsImg:'http://snsall.oss-cn-qingdao.aliyuncs.com/DF4D69929FD7F405/goods/77856/f51d7675-07f7-4ebd-bf38-950be0b6ff90.jpg?x-oss-process=image/resize,m_fixed,h_336,w_336'
          }]
        });
      },
      complete: function (res) {
        wx.showToast({
          title: statusJson[status],
          icon: 'none'
        })
      }
    });
  }
})