<template lang="pug">
  .page-index
    // == Menu
    FloatingMenu
    // == Hero BG
    .hero-bg
    // == Start of Hero
    .container.hero-container
      .row
        .col.align-self-center
          h1 CEEGS 2018
          h2 Ludic Expressions
          h2 October 11-13rd, Prague
    // == End of Hero
    // == Start of Content Blocks
    .content-block(v-for="block in parsedBlocks", :id="block.uid")
      .container
        .row
          .col
            .text-block
              h2 {{ block.title }}
              div(v-html="block.html")        
    // == End of Content Blocks
</template>

<style lang="scss">
.hero-bg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-repeat: repeat-x;
  background-image: url('/images/hero_bg.svg');
  background-position: -0px 500px;

  @media (max-width: 768px) {
    background-position: bottom;
  }
}
.hero-container {
  height: 100vh;

  .row {
    height: 80vh;
  }

  .col {
    text-align: left;
  }

  h1 {
    font-weight: 600;
    font-size: 6rem;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}

.content-block {
  width: 100%;
  background-color: #fff;
  padding: 5rem 0;

  &:nth-child(2n+1) {
    background-color: #F9F4CF;
  }

  .text-block {
    display: block;
    @media(min-width: 768px) {
      max-width: 800px;
    }
    @media(max-width: 767px) {
      width: 100%;
      overflow: hidden;
    }
    margin: 0 auto;
  }

  h2 {
    display: inline-block;
    font-weight: 600;
    border-bottom: 4px solid #000;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2rem;
    &:first-of-type {
      margin-top: 0;
    }
  }

  p {
    line-height: 2rem;
  }

  table {
    width: 100%;
    margin: 2rem 0rem;

    td:first-child {
      font-weight: 700;
    }
  }
}
</style>

<script>
import * as marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true,
  smartLists: true,
  smartypants: true
})

import FloatingMenu from '@/components/FloatingMenu.vue'
import {getContentBlocks} from '@/api'

const shortcodes = {
  '[[RegisterButton]]': '<a href="/register" class="btn btn-primary btn-register-block">Register now</a>',
  '[[GoogleMap]]': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1h32F70XXvF5D2chcqR06YwpsjtkRU4RY" height="480" class="google-maps"></iframe>'
}

const applyShortcodes = (t) => {
  Object.keys(shortcodes).map(key => {
    t = t.replace(key, shortcodes[key])
  })

  return t
}

export default {
  components: {
    FloatingMenu
  },

  computed: {
    parsedBlocks () {
      return this.blocks.slice(0).sort((a, b) => (a.fields.order - b.fields.order)).map(b => {
        return {
          title: b.fields.title,
          uid: b.fields.uid,
          html: applyShortcodes(marked(b.fields.text))
        }
      })
    }
  },

  mounted () {
    var scroll = SmoothScroll('a[href*="#"]', {
      offset: 50
    })
  },

  async asyncData () {
    const blocks = await getContentBlocks()

    return {
      blocks: blocks.items
    }
  }
}
</script>