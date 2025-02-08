import { marked } from 'marked'
import { markedSmartypants } from 'marked-smartypants'

marked.use(markedSmartypants())

export { marked }