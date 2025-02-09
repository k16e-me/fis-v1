import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { getImage } from 'astro:assets'

export const statusOrder = ['progress', 'review', 'slated', 'done', 'blocked'] as const

async function imageTransform(src: string) {
    if (src.startsWith('@images/')) {
        const { src: optimizedSrc } = await getImage({ src: src.replace('@images/', '/content/images/') })
        return optimizedSrc
    }
    return src
}

const flexibleSchema = z.record(
    z.string(),
    z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
        z.record(z.string(), z.any())
    ])
)

const meta = defineCollection({
    loader: glob({ pattern: 'meta.{yaml,yml,json}', base: './content' }),
    schema: flexibleSchema
})


const pages = defineCollection({
    loader: glob({ pattern: 'pages/**/[^_]*.{md,mdx,json,yml,yaml}', base: './content'}),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().max(224),
        cover: z.object({
            src: image().transform(imageTransform),
            alt: z.string(),
        }),
    })
})

export const collections = {
    meta,
    pages
}