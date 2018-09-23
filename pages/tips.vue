<template lang="pug">
    .page-register
        FloatingMenuRegistration
        .container
            .row
                .col
                    .tips-content
                        h2 {{ parsedBlockTitle }}
                        div(v-html="parsedBlockHtml")


</template>

<style lang="scss" scoped>
.tips-content {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 800px;
    padding-bottom: 2rem;
}
</style>

<script>
import * as marked from 'marked'

import {getContentBlocks} from '~/api'

import FloatingMenuRegistration from '@/components/FloatingMenuRegistration.vue'

export default {
  components: {
      FloatingMenuRegistration
  },
  methods: {
  },
  computed: {
      parsedBlockTitle () {
          return this.block.fields.title
      },
      parsedBlockHtml () {
          return marked(this.block.fields.text)
      }
  },
  async asyncData () {
    const blocks = await getContentBlocks()

    return {
      block: blocks.items.filter(i => i.fields.uid == "Tips")[0]
    }
  }
}
</script>
