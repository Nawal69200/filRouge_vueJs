<script>
import FancyButton from '@/components/FancyButton.vue';
import GenericForm from '@/components/GenericForm.vue';

export default {
  name: 'AddCommentView',
  components: { GenericForm, FancyButton },
  data() {
    return {
      formItems: [
        { label: "Nom d'utilisateur", type: "text", model: "username", required: true },
        { label: "Adresse e-mail", type: "email", model: "email", required: true },
        { label: "Mot de passe", type: "password", model: "password", required: true },
        { label: "Note", type: "select", model: "rating", required: true, options: [
          { value: "1", text: "1 étoile" },
          { value: "2", text: "2 étoiles" },
          { value: "3", text: "3 étoiles" },
          { value: "4", text: "4 étoiles" },
          { value: "5", text: "5 étoiles" }
        ]},
        { label: "Votre commentaire", type: "textarea", model: "message", required: false, rows: 5 },
      ],
      formValues: {
        username: '',
        email: '',
        password: '',
        rating: '',
        message: ''
      }, 
      btnClass: 'btn btn-primary w-100'
    }
  },
  methods: {
    handleSubmit() {
      // Validation simple
      for (const item of this.formItems) {
        if (item.required && !this.formValues[item.model]) {
          alert(`Le champ "${item.label}" est obligatoire.`);
          return;
        }
      }

      // Émission des données vers le parent
      this.$emit('new-comment', { ...this.formValues });

      alert("Commentaire envoyé !");
      // Réinitialiser le formulaire après envoi (optionnel)
      this.formValues = {
        username: '',
        email: '',
        password: '',
        rating: '',
        message: ''
      };
    }
  }
}
</script>

<template>
  <main>
    <div class="container my-5">
      <h3 class="text-center">Ajouter un commentaire</h3>  
      <div class="custom-form-style mb-5 mt-4 bg-light p-4 mx-auto col-11 col-md-10 col-lg-6">
        <form @submit.prevent="handleSubmit">
          <!-- Champs du formulaire -->
          <div v-for="item in formItems" :key="item.model" class="mb-3">
            <GenericForm
              :item="item"
              v-model="formValues[item.model]"
            />
          </div>

          <FancyButton
            :btnClass="btnClass"
            type="submit"
          >
            Envoyer le commentaire
          </FancyButton>
        </form>
      </div>
    </div>
  </main>
</template>
