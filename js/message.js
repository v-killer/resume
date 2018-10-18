!function () {
    var view = View('section.message')

    var model = Model({resourceName: 'Message'})

    var controller = Controller({
        messageList: null,
        form: null,
        init: function(view,controller){
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
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
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save({
                'name': name,'content': content
            }).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                let content = myForm.querySelector('input[name=content]').value = ''
            })
        }
    })



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