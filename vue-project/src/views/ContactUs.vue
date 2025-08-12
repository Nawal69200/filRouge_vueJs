<script>
import FancyButton from '@/components/FancyButton.vue';
import GenericForm from '@/components/GenericForm.vue';

export default {
    name: 'ContactUs',
    components: { GenericForm, FancyButton },
    data() {
        return {
            formItems: [
                { label: "Nom d'utilisateur", type: "text", model: "username", required: true },
                { label: "Adresse e-mail", type: "email", model: "email", required: true },
                { label: "Sujet", type: "text", model: "newsletter", required: true },
                { label: "Message", type: "textarea", model: "message", required: true }
            ],
            formValues: {},
            btnClass: 'btn btn-primary btn-lg w-100'
        }
    },
    methods: {
        handleSubmit() {
            console.log("Formulaire soumis :", this.formValues);
        }
    }
}
</script>

<template>
  <main>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <h1 class="text-center mb-5">Restons en contact</h1>

        <div class="row mb-5">
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <i class="bi bi-envelope contact-icon mb-3"></i>
            <h3>Email</h3>
            <p>
              <a class="text-decoration-none" href="mailto:contact@recettes-x.com">
                contact@recettes-x.com
              </a>
            </p>
          </div>
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <i class="bi bi-telephone contact-icon mb-3"></i>
            <h3>Téléphone</h3>
            <p>+33 4 23 45 67 89</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="bi bi-geo-alt contact-icon mb-3"></i>
            <h3>Adresse</h3>
            <p>123 Rue de la Gastronomie<br>69001 LYON, France</p>
          </div>
        </div>

        <hr>

        <div class="my-5">
          <h2 class="text-center mb-4">Envoyez-nous un message</h2>
          <div class="custom-form-style bg-light p-4 mx-auto col-10 col-md-8 col-lg-10">
            <div v-for="item in formItems" :key="item.model" class="mb-3">
                <GenericForm
                :item="item"
                v-model="formValues[item.model]"
                />
            </div>
            <FancyButton
                 type="button"
                btnClass="btn btn-primary btn-lg w-100"
            >
                Envoyer
            </FancyButton>
        </div>
      </div>
      </div>
    </div>
  </main>
</template>
