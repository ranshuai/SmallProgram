Page({
  data: {
    goodsList: null,
    storeInfo:{}
  },
  onLoad: function (option) {
    this.setData({
      storeInfo: JSON.parse(option.info)
    });
    console.log(this.data);
    this.getGoods();
  },

  //加入购物车
  addCart: function (ev) {
    let goodsInfo = ev.currentTarget.dataset.goodsinfo;
    console.log(goodsInfo);
    
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
          goodsId: goodsInfo.goodsId,
          goodsName: goodsInfo.goodsName,
          shopPrice: goodsInfo.shopPrice,
          goodsImg: goodsInfo.originalImg,
          goodsNum:1
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

        if (status === 0) {
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
            goodsId: goodsInfo.goodsId,
            goodsName: goodsInfo.goodsName,
            shopPrice: goodsInfo.shopPrice,
            goodsImg: goodsInfo.originalImg,
            goodsNum: 1
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
  },
  //加载商品
  getGoods: function () {
    let self = this;
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://riseupall.cn/server/goods',
      method: 'GET',
      success: function (res) {
        self.setData({
          goodsList: res.data.result.list
        });
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  }
})