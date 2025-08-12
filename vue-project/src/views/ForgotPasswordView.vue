<script>
import FancyButton from '@/components/FancyButton.vue';
import GenericForm from '@/components/GenericForm.vue';

export default {
  name: 'ForgotPasswordView',
  components: { 
    FancyButton, 
    GenericForm 
    },
  data() {
    return {
      formItems: [
        { label: "Nom d'utilisateur", type: "text", model: "username", required: true, placeholder: "Entrez votre pseudo" },
        { label: "Adresse e-mail", type: "email", model: "email", required: true, placeholder: "Entrez votre adresse mail" }
      ],
      formValues: {},
      btnClass: 'btn btn-danger d-block w-100'
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
    <div class="mt-5">
      <h1 class="text-center">Réinitialiser le mot de passe</h1>
      <div class="custom-form-style text-center my-5 bg-light p-4 mx-auto col-8 col-md-6 col-lg-4" id="passwordResetForm">
        <div v-for="item in formItems" :key="item.model" class="mb-3">
          <GenericForm
            :item="item"
            v-model="formValues[item.model]"
          />
        </div>

        <FancyButton
          :class="btnClass"
          @submit-form="handleSubmit"
        >
          Envoyer
        </FancyButton>
      </div>
    </div>
  </main>
</template>
