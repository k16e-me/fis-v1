export const _siblings = el => {
    let siblings = []
    if (!el.parentNode) return siblings
    let sibling = el.parentNode.firstChild

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== el) siblings.push(sibling)
        sibling = sibling.nextSibling
    }

    return siblings
}