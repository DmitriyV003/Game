import vue from 'vue'
import toastComponent from './Toast.vue'

const ToastConstructor = vue.extend(toastComponent)

function showToast(text, type, duration = 10000) {
    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data: function () {
            return {
                text,
                type,
                show: true
            }
        }
    })
    
    document.body.appendChild(toastDom.$el)
    
    setTimeout(() => { toastDom.show = false }, duration)
}

function registryToast() {
    vue.prototype.$gtoast = showToast
}

export default registryToast
