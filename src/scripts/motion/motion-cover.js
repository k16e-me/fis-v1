import { _q, _ql } from '@scripts/utils/snips'
import { animate, stagger } from 'motion'

export function _motionCover() {
    const wrapper = _q('[data-motion-wrapper]')
    const ts = _ql('[data-motion="heading"]', wrapper)
    const symbol = _q('[data-motion="symbol"]', wrapper)
    const link = _q('[data-motion="link"]', wrapper)
    const logo = _q('[data-motion="logo"]', wrapper)
    const caption = _q('[data-motion="caption"]', wrapper)
    const ellipsis = _ql('[data-motion="ellipsis"]', wrapper)

    animate([
        [
            ts,
            { y: [48, 0], opacity: [0, 1] },
            { delay: stagger(0.1), duration: 0.4, ease: 'circInOut' }
        ],
        [
            ellipsis,
            { y: [4, 0], opacity: [0, 1] },
            { delay: stagger(0.1), duration: 0.4, ease: 'linear' }
        ],
        [
            link,
            { x: [48, 0], opacity: [0, 1] },
            { duration: 0.3, ease: 'circInOut' }
        ],
        [
            symbol,
            { x: [-48, 0], opacity: [0, 1] },
            { duration: 0.3, ease: 'circInOut' }
        ],
        [
            logo,
            { y: [48, 0], opacity: [0, 1] },
            { duration: 0.5, ease: 'circInOut' }
        ],
        [
            caption,
            { x: [48, 0], opacity: [0, 1] },
            { duration: 0.5, ease: 'circInOut' }
        ]
    ])
}