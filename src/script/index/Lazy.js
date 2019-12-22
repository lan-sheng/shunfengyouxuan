class Lazy {


    constructor() {
        let index = 0;
    }
    isInSight(el) {
        const bound = el.getBoundingClientRect(); //这个方法返回一个名为ClientRect的DOMRect对象，包含了top、right、botton、left、width、height这些值。
        const clientHeight = window.innerHeight;
        //如果只考虑向下滚动加载
        //const clientWidth=window.innerWeight;
        return bound.top <= clientHeight + 100;
    }



    checkImgs() {
        const imgs = document.querySelectorAll('.lazy');
        for (let i = index; i < imgs.length; i++) {
            if (isInSight(imgs[i])) {
                loadImg(imgs[i]);
                index = i;
            }
        }

    }

    loadImg(el) {
            if (!el.src) {
                const source = el.dataset.src;
                el.src = source;
            }
        }
        //以下为函数节流
    throttle(fn, mustRun = 500) {
        const timer = null;
        let previous = null;
        return function() {
            const now = new Date();
            const context = this;
            const args = arguments;
            if (!previous) {
                previous = now;
            }
            const remaining = now - previous;
            if (mustRun && remaining >= mustRun) {
                fn.apply(context, args);
                previous = now;
            }
        }
    }
}
window.onload = checkImgs;
window.onscroll = throttle(checkImgs);
export { Lazy }