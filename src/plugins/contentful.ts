import { createClient } from 'contentful'
import { DELIVERY_ACCESS_TOKEN, PREVIEW_ACCESS_TOKEN, SPACE_ID } from '@/utils/const'

export const contentfulClientApi = createClient({
  space: SPACE_ID,
  accessToken: DELIVERY_ACCESS_TOKEN
});

export const contentfulPreviewClientApi = createClient({
  space: SPACE_ID,
  accessToken: PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com'
})