//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude: "",
    latitude: "",
    markers: [
    //   {
    //   iconPath: "/resources/others.png",
    //   id: 0,
    //   latitude: 23.099994,
    //   longitude: 113.324520,
    //   width: 50,
    //   height: 50
    // }
    ],
    controls: [
      {
        id: 1,
        iconPath: '../../resources/pin.png',
        position: {
          left: (app.globalData.iw - 22) / 2,
          top: (app.globalData.ih - 31) / 2 - 31,
          width: 22,
          height: 31
        }

      },
      {
        id: 2,
        iconPath: '../../resources/center.png',
        position: {
          left: 30,
          top: (app.globalData.ih - 100),
          width: 24,
          height: 23
        },
        clickable: true
      }
    ]

  },
  onLoad(){
    this.getMarkers();
  },
  onReady() {
    this.map = wx.createMapContext("map");
  },
 onShow(){
   wx.getLocation({
     type: 'gcj02',
     success: this.handleLocationSuccess.bind(this)
   })
 },
  handleLocationSuccess(res){
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
  },
  controltap(e){
    this.map.moveToLocation();
  },
  handlepublish(){
    wx.navigateTo({
      url: '../public/public'
    })
  },
  getMarkers(){
    wx.request({
      url: 'http://localhost:3000/list',
      method:"get",
      success:this.getMarkersData.bind(this)
    })
  },
  getMarkersData(data){
    var marData = data.data.map((item)=>{
      return {
      iconPath: "../../resources/"+item.type+".png",
      id: item.id,
      latitude: item.latitude,
      longitude: item.longitude,
      width: 30,
      height: 30
    }
    })
    console.log(marData);
    this.setData({
      markers: marData
    })
  },
  // 点击marker标志跳转到详情页面
  markertap(e){
      wx.navigateTo({
        url: '../detail/detail?id=' + e.markerId
      })
  },
  // 点击搜索跳转到搜索页面
  handlesearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  }
})
