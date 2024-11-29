;(() => {
    'use strict'
    globalThis.hijack ??= false
    if (globalThis.hijack) {
        return
    }

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

    console.log('hijack success')
    globalThis.hijack = true
})()
