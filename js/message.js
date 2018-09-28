!function () {
    var view = document.querySelector('section.message')

    var model = {
        // 获取数据
        init: function () {
            var APP_ID = 'G1GlTnvldWNsQNVhDzykL9iQ-gzGzoHsz';
            var APP_KEY = '6BmhGV0R24I1AKmqy8keIcdz';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function(){
            var query = new AV.Query('Message')
            return query.find() // Promise对象
        },
        // 新建数据
        save: function(name, content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({  // Promise 对象
                'name': name,
                'content': content
            })
        }
    }

    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view) {
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function () {
            this.model.fetch().then(
                    (messages) => {
                        let array = messages.map((item) => item.attributes)
                        array.forEach((item) => {
                            let li = document.createElement('li')
                            li.innerText = `${item.name}: ${item.content}`
                            this.messageList.appendChild(li)
                        })
                    }
                )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                this.saveMessage()
            }.bind(this))
        },
        saveMessage: function () {
            myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                let content = myForm.querySelector('input[name=content]').value = ''
            })
        }
    }




    controller.init(view,model)

}.call()























/*
// 创建TestObject 表
var X = AV.Object.extend('Leo2');
// 在表中创建一行数据
var o = new X();
// 数据内容是   words: 'Hello World' 保存
// 如果保存成功，则运行alert('')
o.save({
  words: 'Fuck World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})*/