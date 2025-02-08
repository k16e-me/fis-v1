import { _q, _ql } from '@scripts/utils/snips'
import { animate, stagger } from 'motion'

export function _motionCover() {
    const section = _q('[data-motion]')
    const ts = _ql('h1 span', section)

    animate(ts,
        { y: [50,0], opacity: 1 },
        { delay: stagger(0.1), duration: 1, ease: 'circInOut' }
    )
}