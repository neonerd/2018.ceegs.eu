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
          img(src="/images/ceegs_2018_logo_white.svg").logo
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
    // == Start of footer
    .content-block
      .container
        .row
          .col
            .text-block
              h2.social-heading Stay in touch
              p.social
                a(href="https://www.facebook.com/CEEGameStudies/", target="_blank").fab.fa-facebook
                a(href="https://twitter.com/ceegsconf", target="_blank").fab.fa-twitter
                a(href="mailto: contact@ceegs.eu").fas.fa-envelope
              p.copyright
                | &copy; CEEGS 2018
</template>

<style lang="scss" scoped>

  .logo {
    display: block;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

</style>

<style lang="scss">


.hero-bg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  // background-repeat: repeat-x;
  // background-image: url('/images/hero_bg.svg');
  // background-position: -0px 500px;
  background: linear-gradient(to bottom, #fd0, #42a62a, #13235b);

  @media (max-width: 768px) {
    background-position: bottom;
  }
}
.hero-container {
  height: 100vh;

  .row {
    height: 100vh;
  }

  .col {
    text-align: left;
  }

  color: #fff;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 6rem;
    text-align: center;
    

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
  h2 {
    text-align: center;
    

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}

.content-block {
  width: 100%;
  background-color: #fff;
  padding: 5rem 0;

  a {
    text-decoration: underline;
  }

  &:nth-child(2n+1) {
    // background-color: #F9F4CF;
    background-color: #13235b;
    color: #fff;

    h2::after {
      background-color: #fff;
    }
  
    a {
      color: #fff;
    }
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
    // border-bottom: 4px solid #000;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;

    &::after {
      display: block;
      content: ' ';
      height: 12px;
      margin-top: 2rem;
      width: 60px;
      background-color: #13235b;
    }
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

.social {
  text-align: center;
  .fab, .fas {
    margin: 0rem 1rem;
    text-decoration: none;
    font-size: 3rem;
  }
}
.social-heading {
  text-align: center;
  display: block !important;
  &::after {
    margin: 0 auto;
  }
}

.copyright {
  text-align: center;
  margin-top: 4rem;
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
    if (window.location.hash) {
      scroll.animateScroll(document.getElementById(window.location.hash.replace('#', '')))
    }
  },

  async asyncData () {
    const blocks = await getContentBlocks()

    return {
      blocks: blocks.items
    }
  }
}
</script>