import {createClient} from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
})

export function getContentBlocks () {
    return client.getEntries({
        'content_type': 'contentBlock'
    })
}