import { _ql, _q } from '@scripts/utils/snips'

export const _accordion = () => {
    if (!_q('.accordion')) return

    const menus = _ql('.accordion')

    menus.forEach(i => {
        const trigger = _q('.accordion__button', i)
        const icon = _q('.accordion__icon', i)
        const content = _q('.accordion__content', i)

        trigger.addEventListener('click', e => {
            e.preventDefault()

            if (!i.classList.contains('is-active')) expand(i, trigger, content, icon)
            else collapse(i, trigger, content, icon)

            return false
        })
    })

    function expand(a, b, c, d) {
        a.classList.add('is-active')
        b.setAttribute('aria-expanded', 'true')
        c.classList.remove('hidden')
        c.style.maxHeight = c.scrollHeight + 'px'
        d.classList.add('rotate-180')
    }

    function collapse(a, b, c, d) {
        a.classList.remove('is-active')
        b.setAttribute('aria-expanded', 'false')
        c.style.maxHeight = '0px'
        d.classList.remove('rotate-180')
        setTimeout(() => c.classList.add('hidden'), 250)
    }
}