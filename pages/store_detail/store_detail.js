Page({
  data: {
    goodsList: null,
    storeInfo: {},
    num: 0
  },
  onLoad: function (option) {
    let self = this;
    this.setData({
      storeInfo: JSON.parse(option.info)
    });
    this.getGoods();
    wx.getStorage({
      key: 'cart',
      complete: function (res) {
        console.log(res);
        if (res.data){
          self.setData({
            num: res.data.length
          });
        }
      }
    })
  },

  //加入购物车
  addCart: function (ev) {
    let self = this;
    let goodsInfo = ev.currentTarget.dataset.goodsinfo;
    let statusJson = {
      "0": "加入购物车成功",
      "1": "购物车已有相同商品",
      "2": "购物车最多暂存10件商品"
    },
      status = 0;

    wx.getStorage({
      key: 'cart',
      success: function (res) {
        var data = {
          goodsId: goodsInfo.goodsId,
          goodsName: goodsInfo.goodsName,
          shopPrice: goodsInfo.shopPrice,
          goodsImg: goodsInfo.images[0],
          goodsSpecs: goodsInfo.goodsSpecs,
          goodsNum: 1
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
            goodsImg: goodsInfo.images[0],
            goodsSpecs: goodsInfo.goodsSpecs,
            goodsNum: 1
          }]
        });
        self.setData({
          num: 1
        });
      },
      complete: function (res) {
        wx.getStorage({
          key: 'cart',
          success: function (res) {
            console.log(res);
            self.setData({
              num: res.data.length
            });

          }
        })
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
      url: 'https://riseupall.cn/server/getGoods',
      method: 'GET',
      data: {
        storeId: this.data.storeInfo.storeId
      },
      success: function (res) {
        self.setData({
          goodsList: res.data.result.list
        });
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  goToCart() {
    wx.switchTab({
      url: "/pages/cart/cart",
    });
  },
})