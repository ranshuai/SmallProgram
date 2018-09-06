//获取应用实例
const app = getApp()
Page({
  data: {
    cartdata: [],
    cartDataMap: null,
    cartDataMapArr: [],
    selectedGoods: []
  },
  checkboxChange: function (e) {
    this.setData({
      selectedGoods: e.detail.value
    });
  },
  //加入购物车
  confirm: function () {
    app.selfShowAuthorization().then(ev => {
      let self_arr = []
      this.data.cartDataMapArr.forEach(item => {
        item[1].forEach(_item => {
          if (_item.selected) {
            _item.selected = false;
          }
        })
      });

      if (ev) {
        if (this.data.selectedGoods.length <= 0) {
          wx.showToast({
            title: '请选择商品',
            icon: 'none'
          })
          return;
        }
        for (let i = 0; i < this.data.selectedGoods.length; i++) {
          let arr = this.data.selectedGoods[i].split('-');
          this.data.cartDataMapArr[arr[0]][1][arr[1]].selected = true;
        }
        for (let i = 0 ; i<this.data.cartDataMapArr.length; i++ ){
          let newArr = []
          newArr[0] = this.data.cartDataMapArr[i][0];
          newArr[1] = [];
          for (let j = 0; j < this.data.cartDataMapArr[i][1].length; j++) {
            if (this.data.cartDataMapArr[i][1][j].selected) {
              newArr[1].push(this.data.cartDataMapArr[i][1][j]);
            }
          }
          if (newArr[1].length > 0) {
            self_arr.push(newArr)
          }
        }
        app.globalData.orderConfirmInfo = self_arr
        wx.navigateTo({
          url: '/pages/order_confirm/order_confirm',
        })
      }
    });
  },
  onLoad: function () {

  },
  onShow: function () {
    let self = this;
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        self.setData({
          cartdata: res.data
        });
        const m = new Map();
        res.data.forEach((value) => {
          if (m.has(value.storeId)) {
            const arr = m.get(value.storeId);
            arr.push(value)
            m.set(value.storeId, arr);
          } else {
            m.set(value.storeId, [value]);
          }
        })
        self.setData({
          cartDataMapArr: [...m],
          cartDataMap: m
        });
      }
    })
  },

  //进入店铺列表
  goToStoreType(e) {
    wx.navigateTo({
      url: '/pages/search/search?type=' + e.currentTarget.dataset.storetype,
    })
  },

  showModal:function(){
    console.log('点击编辑');
    
  },
  closeModal:function(){
    console.log('关闭modal');
    //cart_edit_modal
    var query = wx.createSelectorQuery();
    query.select('#cart_edit_modal');
    console.log(query.select('#cart_edit_modal').boundingClientRect());

  }
})