<template lang="pug">
    .page-register
        FloatingMenuRegistration
        .container
            .row
                .col
                    form(action="", method="post", @submit.prevent.stop="submitRegistration").registration-form#registration-form
                        h2 Registration

                        template(v-if="hasFormBeenSent")
                            p Thank you for your registration. You will receive an invoice by email before the conference. If you require an invoice earlier, please contact us.
                            .buttons
                                nuxt-link(to="/").btn.btn-secondary Back to homepage

                        template(v-else)
                            p Please, fill out all the fields and click on the "Submit registration" button at the end of the form.
                            .form-group
                                label First name
                                input(type="text", required, name="FirstName").form-control

                            .form-group
                                label Surname
                                input(type="text", required, name="Surname").form-control

                            .form-group
                                label Profession
                                input(type="text", required, name="Profession").form-control

                            .form-group
                                label Name of institution
                                input(type="text", required, name="Institution").form-control

                            .form-group
                                label Address of institution
                                textarea(rows="3", required, name="Address").form-control.textarea

                            .form-group
                                label VAT Number (if your require an invoice)
                                input(type="text", name="VAT").form-control

                            .form-group
                                label Country
                                input(type="text", required, name="Country").form-control

                            .form-group
                                label Phone
                                input(type="text", required, name="Phone").form-control

                            .form-group
                                label Email
                                input(type="email", required, name="Email").form-control

                            .buttons
                                button(type="submit", v-if="!isFormBeingSent").btn.btn-primary Submit registration
                                button(type="button", disabled, v-else).btn.btn-primary Submitting...


</template>

<style lang="scss" scoped>
.registration-form {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 800px;
    padding-bottom: 2rem;

    h2 {
        display: inline-block;
        font-weight: 600;
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

    p {
        margin-bottom: 2rem;
    }

    .buttons {
        text-align: center;
    }
}
</style>

<script>
const GOOGLE_API_REGISTER = 'https://script.google.com/macros/s/AKfycbwG6rj1j8EPoVdpuoQmPX2Iiph4OxUWMjCHyj9yEnhZgAOc4zGV/exec'

import FloatingMenuRegistration from '@/components/FloatingMenuRegistration.vue'

export default {
  components: {
      FloatingMenuRegistration
  },
  methods: {
      submitRegistration () {
        this.isFormBeingSent = true

        var $form = $('form#registration-form'),
        url = GOOGLE_API_REGISTER

        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
        }).success(() => {
            this.hasFormBeenSent = true
            this.isFormBeingSent = false
        });
      }
  },
  data () {
      return {
          formData: {
              FirstName: '',
              Surname: '',
              Profession: '',
              Institution: '',
              Address: '',
              VAT: '',
              Country: '',
              Phone: '',
              Email: ''
          },
          isFormBeingSent: false,
          hasFormBeenSent: false
      }
  }
}
</script>
