import { _q, _ql } from '@scripts/utils/snips'
import { animate, stagger } from 'motion'

export function _motionCover() {
    const section = _q('[data-motion]')
    const ts = _ql('h1 span', section)
    const symbol = _q('[data-motion="symbol"]', section)
    const link = _q('[data-motion="link"]', section)
    const logo = _q('[data-motion="logo"]', section)
    const caption = _q('[data-motion="caption"]', section)

    animate(ts,
        { y: [50,0], opacity: [0,1] },
        { delay: stagger(0.1), duration: 1, ease: 'circInOut' }
    )

    animate(symbol,
        { x: [-100,0], opacity: [0,1] },
        { delay: 1, duration: 0.35, ease: 'circInOut' }
    )
    animate(link,
        { y: [100, 0], opacity: [0, 1] },
        { delay: 1.5, duration: 0.75, ease: 'circInOut' }
    )
}