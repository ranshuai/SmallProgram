//获取应用实例
const app = getApp()
Page({
  data: {
    specsModal: false,
    specsModalData: null,
    specsModalIndexArr:[],
    cartdata: [],
    cartDataMap: null,
    cartDataMapArr: [],
    selectedGoods: [],
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
        for (let i = 0; i < this.data.cartDataMapArr.length; i++) {
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

        console.log(self.data);
      }
    })
  },

  //进入店铺列表
  goToStoreType(e) {
    wx.navigateTo({
      url: '/pages/search/search?type=' + e.currentTarget.dataset.storetype,
    })
  },

  showModal: function (ev) {
    console.log(ev.currentTarget.dataset);
    this.data.specsModalIndexArr = ev.currentTarget.dataset.goodsindex;
    this.setData({
      specsModal: true,
      specsModalData: ev.currentTarget.dataset.goodsinfo
    });

  },
  closeModal: function () {
    console.log('关闭modal');
    this.setData({
      specsModal: false
    });
  },
  aa: function () {
    console.log('11');
  },
  delNum: function () {

    if (this.data.specsModalData.goodsNum == 1){
      return 
    }

    this.data.specsModalData.goodsNum = this.data.specsModalData.goodsNum - 1;
    this.setData({
      specsModalData: this.data.specsModalData
    });

  },
  addNum: function () {

    this.data.specsModalData.goodsNum = this.data.specsModalData.goodsNum + 1;
  this.setData({
    specsModalData: this.data.specsModalData
  });
  },
  saveCart(){
    let self = this;
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++){
          if (res.data[i].goodsId == self.data.specsModalData.goodsId){
            res.data[i].goodsNum = self.data.specsModalData.goodsNum
          }
        }
        wx.setStorage({
          key: "cart",
          data: res.data,
          success:function(){
            self.data.cartDataMapArr[self.data.specsModalIndexArr[0]][1][self.data.specsModalIndexArr[0]].goodsNum = self.data.specsModalData.goodsNum;
            self.setData({
              cartDataMapArr: self.data.cartDataMapArr
            });
          }
        });
      }
    })
    this.closeModal();


  }
})