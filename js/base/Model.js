/*
* var model = Model({
*   resourceName:'表名'
* })
* */
window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = '0ThF52S9FmPkVAqsCJJ3FPgM-gzGzoHsz';
            var APP_KEY = '7dUlHfVVAV3St4CsMT3Bwkq0';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch:function(){
            var query = new AV.Query(resourceName);
            var now = new Date()
            query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo

            query.limit(10);// 最多返回 10 条结果
            query.descending('createdAt');
            return query.find()  // Promise 对象
        },
        save:function(object){
            var x = AV.Object.extend(resourceName)
            var x = new x()
            return x.save(object)
        }
    }
}