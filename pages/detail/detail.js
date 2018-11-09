// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    obj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id:options.id
    })
      wx.request({
        url: 'http://localhost:3000/list',
        method:"get",
        success:this.getDetailData.bind(this)
      })
  },
  getDetailData(data){
    console.log(data.data);
    var chooseObj = data.data.filter((item)=>{
      return item.id==this.data.id;
    })
    
    this.setData({
      obj: chooseObj[0]
    })
    console.log(this.data.obj);
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

  }
})