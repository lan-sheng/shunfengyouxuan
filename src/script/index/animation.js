// 获取元素的css属性
function getstyle(el, property) {
    if (getComputedStyle) {
        return getComputedStyle(el)[property]
    } else {
        return el.currentstyle[property];
    }
}
// class Getstyle {
//     constructor() {
//         this.
//     }
//     init() {
//         this.animate(el, property)
//     }
//     animate(el, property) {
//         clearInterval(el.timerId)
//         el.timerId = setInterval(function() {
//             for (var property in properties) {
//                 var current;
//                 var target = properties[property];
//                 if (property === 'opacity') {
//                     current = Math.round(parseFloat(getstyle(el, 'opacity')) * 100)
//                 } else {
//                     current = parseInt(getstyle(el, property))
//                 }
//                 var speed = (target - current) / 30;
//                 speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//                 if (property === 'opacity') {
//                     el.style.opacity = ((current + speed) / 100)
//                 } else {
//                     el.style[property] = (current + speed) + 'px';
//                 }
//             }
//         }, 10)
//     }
//     getstyle(el, property) {
//         if (getComputedStyle) {
//             return getComputedStyle(el)[property]
//         } else {
//             return el.currentstyle[property];
//         }
//     }
// }
// new Getstyle().init();

//修改元素css属性
function animate(el, properties) { //el:元素;properties{property:属性;target:目标};
    clearInterval(el.timerId)
    el.timerId = setInterval(function() {
        for (var property in properties) {
            var current;
            var target = properties[property];
            if (property === 'opacity') {
                current = Math.round(parseFloat(getstyle(el, 'opacity')) * 100)
            } else {
                current = parseInt(getstyle(el, property))
            }
            var speed = (target - current) / 30;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (property === 'opacity') {
                el.style.opacity = ((current + speed) / 100)
            } else {
                el.style[property] = (current + speed) + 'px';
            }
        }
    }, 10)
}

// class Animate {
//     constructor(el, properties) {
//         el.timerId = setInterval(function() {
//             for (var property in properties) {
//                 var current;
//                 var target = properties[property];
//                 if (property === 'opacity') {
//                     current = Math.round(parseFloat(getstyle(el, 'opacity')) * 100)
//                 } else {
//                     current = parseInt(getstyle(el, property))
//                 }
//                 var speed = (target - current) / 30;
//                 speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//                 if (property === 'opacity') {
//                     el.style.opacity = ((current + speed) / 100)
//                 } else {
//                     el.style[property] = (current + speed) + 'px';
//                 }
//             }
//         }, 10)
//     }
// }