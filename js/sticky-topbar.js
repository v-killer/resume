!function(){
    var model = {
      init(){
        var APP_ID = 'LYTi05MMIc57UImfDVL3jnbe-gzGzoHsz'
        var APP_KEY = 'taDtbGQLjgfI2F9DWmlsvIVR'
        AV.init({ appId: APP_ID, appKey: APP_KEY })
      },
      fetch: function(){ 
        var query = new AV.Query('X');
        return query.find() // Promise 对象
      },
      // 创建数据
      save: function(name){
        var Message = AV.Object.extend('X');
        var message = new Message();
        return message.save({  // Promise 对象
          'name': name
        })
      }
    }
  
    var view = View('#topNavBar')
  
    var controller = {
      view: null,
      init: function(view){
        this.view = view
        this.bindEvents()
        // this.bindEvnets.call(this)
      },
      bindEvents: function(){
        var view = this.view
        window.addEventListener('scroll', (x) => {
          if(window.scrollY > 0){
            this.active()
          }else{
            this.deactive()
          }
        })
        // 箭头函数没有 this
      },
      active: function(){
        this.view.classList.add('sticky')
      },
      deactive: function(){
        this.view.classList.remove('sticky')
      }
  
    }
    controller.init(view)
    // controller.init.call(controller, view)
  }.call()
  