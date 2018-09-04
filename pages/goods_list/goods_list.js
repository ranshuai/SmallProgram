Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      this.getGoods(JSON.parse(options.json));
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
  //加载商品
  getGoods: function (json) {
    let self = this;
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://riseupall.cn/server/getGoods',
      method: 'GET',
      data: json,
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
      },
      complete: function (res) {
        wx.showToast({
          title: statusJson[status],
          icon: 'none'
        })
      }
    });
  },
})