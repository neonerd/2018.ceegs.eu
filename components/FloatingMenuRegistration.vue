<template lang="pug">
  .FloatingMenu
    .container-fluid
        .row.align-items-center
            .col
                h1 CEEGS 2018
            .col-8
            .col.right
                nuxt-link(to="/").btn.btn-secondary Back to homepage
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
            color: #000;
            border-bottom: 2px solid #000;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .right {
        text-align: right;
    }
}
</style>
