const _hijack_main = () => {
    'use strict'
    console.log('start hijack')
    // 拦截事件注册
    const rewrite = (name, obj) => {
        Object.defineProperty(window, 'on' + name, obj)
        Object.defineProperty(document, 'on' + name, obj)
    }
    const invalid = {
        get() {
            console.log('get')
        },
        set(v) {
            console.log(`set: ${v}`)
        },
    }

    const originalEventTargetAddEventListener =
        EventTarget.prototype.addEventListener
    const originalHTMLElementAddEventListener =
        HTMLElement.prototype.addEventListener
    const originalWindowAddEventListener = Window.prototype.addEventListener
    const originalDocumentAddEventListener = Document.prototype.addEventListener

    const disallowed = [
        'visibilitychange',
        'focus',
        'focusin',
        'focusout',
        'blur',
        'fullscreenchange',
    ]

    disallowed.forEach((e) => rewrite(e, invalid))

    function allowCall(eventName) {
        return !disallowed.includes(eventName)
    }

    const eventHandlerRegister = (origin) => {
        return function (name, handler) {
            if (allowCall(name)) {
                const eventHandler = (e) => {
                    handler(e)
                }
                origin.call(this, name, eventHandler)
            }
        }
    }
    EventTarget.prototype.addEventListener = eventHandlerRegister(
        originalEventTargetAddEventListener
    )

    HTMLElement.prototype.addEventListener = eventHandlerRegister(
        originalHTMLElementAddEventListener
    )

    Window.prototype.addEventListener = eventHandlerRegister(
        originalWindowAddEventListener
    )

    Document.prototype.addEventListener = eventHandlerRegister(
        originalDocumentAddEventListener
    )

    // 拦截全屏事件
    let fullscr = {
        get() {
            return true
        },
    }

    if ('fullScreen' in window) {
        Object.defineProperty(window, 'fullScreen', fullscr)
    }
    Object.defineProperty(document, 'fullscreen', fullscr)
    Object.defineProperty(document, 'fullscreenElement', {
        get() {
            return document.documentElement
        },
    })

    const injectFullscrBtn = () => {
        const observer = new MutationObserver(() => {
            const ele = document.querySelector(
                '.el-message-box__btns .el-button.el-button--default.el-button--small.el-button--primary'
            )
            if (!ele) return
            if (
                !(
                    ele.innerHTML.includes('知道了') ||
                    ele.innerHTML.includes('开始答题')
                )
            )
                return
            ele.addEventListener('click', () => {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen()
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen()
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen()
                }
            })
            observer.disconnect()
        })
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
        })
    }
    if (window.location.href.includes('class_testPreview')) {
        injectFullscrBtn()
    } else {
        const interval = setInterval(() => {
            if (window.location.href.includes('class_testPreview')) {
                injectFullscrBtn()
                clearInterval(interval)
            }
        }, 500)
    }
}

try {
    _hijack_main()
    console.log('hijack success')
} catch (e) {
    console.error(e)
}
