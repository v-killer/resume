!function () {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        }, // 这里的this是controller
        bindEvents: function () {
            var view = this.view  // 这个this，是this.bindEvents的this,所以也是controller
            window.addEventListener('croll',(x) => { // 箭头函数没有this,所以用上面的this 也是controller
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
}.call()
