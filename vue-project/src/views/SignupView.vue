<script>
import FancyButton from '@/components/FancyButton.vue'
import GenericForm from '@/components/GenericForm.vue'

export default {
  name: 'SignupView',
  components: {
    FancyButton,
    GenericForm
  },
  data() {
    return {
      formItems: [
        { label: "Nom d'utilisateur", type: "text", model: "username", required: true },
        { label: "Adresse e-mail", type: "email", model: "email", required: true },
        { label: "Mot de passe", type: "password", model: "password", required: true },
        { label: "Confirmer le mot de passe", type: "password", model: "confirmPassword", required: true },
        { label: "Je souhaite recevoir la newsletter", type: "checkbox", model: "newsletter", required: false },
        { label: "J’accepte les CGU et la politique de confidentialité", type: "checkbox", model: "terms", required: true },
        { label: "Rôle de l'utilisateur", type: "select", model: "role", required: true, options: [
          { value: "user", text: "Utilisateur" },
          { value: "admin", text: "Administrateur" }
        ]}
      ],
      formValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        newsletter: false,
        terms: false,
        role: ''
      },
      btnClass: 'btn btn-danger btn-lg w-100'
    }
  },
  methods: {
    handleSubmit() {
      // Vérification des champs requis
      for (let item of this.formItems) {
        if (item.required && !this.formValues[item.model]) {
          alert(`❌ Le champ "${item.label}" est obligatoire.`);
          return;
        }
      }

      // Vérification mot de passe
      if (this.formValues.password !== this.formValues.confirmPassword) {
        alert("❌ Les mots de passe ne correspondent pas.");
        return;
      }

      // Vérification des CGU
      if (!this.formValues.terms) {
        alert("❌ Vous devez accepter les conditions d'utilisation pour continuer.");
        return;
      }

      // ✅ Si tout est bon
      alert("✅ Inscription réussie !");
      console.log("Formulaire soumis :", this.formValues);

      // Tu pourras remplacer ça par ton appel API plus tard
    }
  }
}
</script>

<template>
  <main>
    <div class="my-5">
      <h1 class="text-center mb-5">Rejoignez notre communauté</h1>
      <div class="custom-form-style bg-light p-4 mx-auto col-10 col-md-6 col-lg-4">
        <!-- Champs dynamiques -->
        <div v-for="item in formItems" :key="item.model" class="mb-3">
          <GenericForm
            :item="item"
            v-model="formValues[item.model]"
          />
        </div>

        <FancyButton
          :btnClass="btnClass"
          type="button"
          @submit-form.prevent="handleSubmit">
        S'inscrire
      </FancyButton>


        <hr class="my-4">

        <p class="text-center">
          Vous avez déjà un compte ?
          <router-link to="/connexion" class="text-decoration-none">
            Connectez-vous ici
          </router-link> 
        </p>

        <div class="text-center mt-4">
          <p>Ou inscrivez-vous avec :</p>
          <FancyButton
            type="button"
            btnClass="btn btn-primary btn-lg w-100"
          >
            <i class="bi bi-google"></i> Google
          </FancyButton>
        </div>
      </div>
    </div>
  </main>
</template>
