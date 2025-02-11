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

    const sequence = [
        [
            ts,
            { y: [48, 0], opacity: [0, 1], rotateX: [90, 0] },
            { delay: stagger(0.1), duration: 0.5, type: 'spring' }
        ],
        [
            ellipsis,
            { y: [4, 0], opacity: [0, 1] },
            { delay: stagger(0.1), duration: 0.5, ease: 'linear' }
        ],
        [
            symbol,
            { x: [-48, 0], opacity: [0, 1] },
        ],
        [
            logo,
            { y: [48, 0], opacity: [0, 1] },
            { duration: 0.5 }
        ],
        [
            caption,
            { x: [48, 0], opacity: [0, 1] },
            { duration: 0.5, at: '-0.3' }
        ],
        [
            link,
            { x: [48, 0], opacity: [0, 1] },
        ],
        [ // I want this to repeat infinitely
            ellipsis,
            { scale: [1, 1.25, 0.67, 1] },
            { delay: stagger(0.1), duration: 0.5, times: [0, 0.25, 0.5, 1], ease: 'linear', type: 'spring' }
        ]
    ]

    animate(sequence, {
        defaultTransition: {
            duration: 0.3,
            ease: 'circInOut',
            delay: 0.5
        }
    })
}