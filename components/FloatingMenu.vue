<template lang="pug">
  .FloatingMenu
    .container-fluid
        .row.align-items-center
            .col
                img(src="/images/ceegs_2018_logo_small.svg").logo
            .col-8.d-none.d-sm-block.d-md-block.d-lg-block.d-xl-block
                menu
                    li
                        a(href="#Essentials") Essentials
                    li
                        a(href="#Keynotes") Keynotes
                    li
                        a(href="#About") About
                    li
                        a(href="#Submissions") Submissions
                    li
                        a(href="#PracticalInfo") Practical Info
                    li
                        a(href="#History") History
            .col.right.d-none.d-sm-block.d-md-block.d-lg-block.d-xl-block
                a(href="/documents/CEEGS_Programme.pdf").btn.btn-primary Download programme
            .col.right.d-sm-none.d-md-none.d-lg-none.d-xl-none
                a(@click="isMobileMenuShown=!isMobileMenuShown").fa.fa-bars
        .row(v-if="isMobileMenuShown").mobile-menu-wrapper
            .col
                menu.mobile-menu
                    li
                        a(href="#Keynotes", @click="isMobileMenuShown=false") Keynotes
                    li
                        a(href="#About", @click="isMobileMenuShown=false") About
                    li
                        a(href="#Submissions", @click="isMobileMenuShown=false") Submissions
                    li
                        a(href="#RegistrationAndPayment", @click="isMobileMenuShown=false")  Registration
                    li
                        a(href="#PracticalInfo", @click="isMobileMenuShown=false") Practical Info
                    li
                        a(href="#History", @click="isMobileMenuShown=false") History
</template>

<script>
export default {
    data () {
        return {
            isMobileMenuShown: false
        }
    }
}
</script>

<style lang="scss" scoped>
.FloatingMenu {
    z-index: 8000;
    position: fixed;
    top: 0px;
    left: 0px;
    display: block;
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px 10px 42px 0px rgba(0,0,0,0.25);

    .logo {
        max-width: 75px;
    }

    .row {
        height: 80px;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
    }

    menu {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: block;
        text-align: center;

        li {
            display: inline-block;
            margin: 0 1rem;
        }

        a {
            font-weight: 700;
            font-size: 1rem;
            color: #13235b;
            border-bottom: 2px solid #13235b;

            &:hover {
                text-decoration: none;
                color: #42a62a;
                border-color: #42a62a;;
            }
        }
    }

    .mobile-menu-wrapper {
        background-color: #fff;
        height: auto;
        padding: 2rem 0rem;
    }

    .mobile-menu {

        li {
            display: block;
            margin: 1rem 0rem;
        }
    }

    .right {
        text-align: right;
    }

    .fa-bars {
        font-size: 2rem;
    }
}
</style>
