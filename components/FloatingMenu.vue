<template lang="pug">
  .FloatingMenu
    .container-fluid
        .row.align-items-center
            .col
                img(src="/images/ceegs_2018_logo_small.svg").logo
            .col-8.d-none.d-sm-block.d-md-block.d-lg-block.d-xl-block
                menu
                    li
                        a(href="#Workshops") Workshops
                    li
                        a(href="#About") About
                    li
                        a(href="#Submissions") Submissions
                    li
                        a(href="#RegistrationAndPayment")  Registration
                    li
                        a(href="#PracticalInfo") Practical Info
                    li
                        a(href="#History") History
            .col.right
                nuxt-link(to="/register").btn.btn-primary Register now
</template>

<script>
export default {

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

    .right {
        text-align: right;
    }
}
</style>
