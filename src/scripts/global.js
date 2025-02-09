import { _motionCover } from './motion/motion-cover'
import { _motionLinks } from './motion/motion-links'

document.addEventListener('DOMContentLoaded', () => {
    once()
    init()
})

function init() {
    _motionLinks()
    _motionCover()
}

function once() {

}