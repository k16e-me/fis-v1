import { _q, _ql } from '@scripts/utils/snips'
import { animate, hover } from 'motion'

export function _motionLinks() {
    const spring = _ql('[data-link="hover"]')

    hover(spring, (i) => {
        animate(i, { scale: 1.15 }, { type: 'spring', duration: 0.35 })

        return () => animate(i, { scale: 1 }, { type: 'spring', duration: 1 })
    })
}