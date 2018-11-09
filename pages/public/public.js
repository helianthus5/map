// pages/public/public.js
Page({
  data: {
    address:"点击选择！要勾选哦",
    flag:false
  },
  info:{
    type:'',
    detail:'',
    tel:'',
    
  },
  radioChange(e){
    this.info.type = e.detail.value;
  },
  detailChange(e){
    this.info.detail = e.detail.value;
  },
  telChange(e) {
    this.info.tel = e.detail.value;
  },
  getAddress(){
    var _this = this;
    wx.chooseLocation({
      success:this.getaddressInfo.bind(this)
    })
  },
  getaddressInfo(obj){
    console.log(obj);
    this.info.address = obj.address;
    this.info.latitude = obj.latitude;
    this.info.longitude = obj.longitude;
    this.setData({
      address: obj.address
    })
  },
  pushInfo(){
    var _this = this;
    // 把info传送到服务器
    wx.request({
      url: 'http://localhost:3000/list',
      data:this.info,
      method:'post',
      success:this.pushInfoSucc.bind(this)
    })
  },
  pushInfoSucc(data){
    this.setData({
      flag:true
    })
  },
  backHome(){
    wx.navigateTo({
      url: '../index/index',
    })
  }
})