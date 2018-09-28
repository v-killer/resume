!function () {
    var view = document.querySelector('nav.menu')
    var controller = function (view) {
        let liTags = view.querySelectorAll('nav.menu > ul > li')
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                x.currentTarget.classList.remove('active')
            }
        }
        let aTags = view.querySelectorAll('nav.menu > ul > li > a')
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault()
                let a = x.currentTarget
                let href = a.getAttribute('href')
                let element = document.querySelector(href)
                let top = element.offsetTop

                let currentTop = window.scrollY
                let targetTop = top - 93
                var coords = { y: currentTop };
                var tween = new TWEEN.Tween(coords)
                    .to({ y: targetTop }, 500)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function () {
                        window.scrollTo(0, coords.y)
                    })
                    .start();
            }
        }
    }
    controller(view)
}.call()
