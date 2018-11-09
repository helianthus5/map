//app.js
App({
  // 全局方法获取当前设备的宽高
  globalData:{
    iw:'',
    ih:''
  },
  onShow(){
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.globalData.iw = res.windowWidth;
        _this.globalData.ih = res.windowHeight;
      },
    })
  }
})