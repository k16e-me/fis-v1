export const _fullres = () => {
    var fullres = document.createElement('script')
    fullres.async = true
    fullres.src = 'https://t.fullres.net/k16e.js?' + (new Date() - new Date() % 43200000)
    document.head.appendChild(fullres)
}