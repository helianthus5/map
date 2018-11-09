// pages/search/search.js
Page({
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getSearchData(e){
    // json-server全局检索
    console.log(e);
    var value = e.detail.value;
    wx.request({
      url: 'http://localhost:3000/list?q='+value,
      method:'get',
      success:this.getSearchDataSuccess.bind(this)
    })
  },
  getSearchDataSuccess(data){
    console.log(data);
    this.setData({
      list:data.data
    })
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