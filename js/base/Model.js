// var model = Model({resourceName: 'Message'})  使用方法

window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'G1GlTnvldWNsQNVhDzykL9iQ-gzGzoHsz';
            var APP_KEY = '6BmhGV0R24I1AKmqy8keIcdz';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find() // Promise对象
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}