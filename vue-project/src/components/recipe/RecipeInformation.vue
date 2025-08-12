<script>
import FancyButton from '../FancyButton.vue';


export default {
  name: 'RecipeInformation',
  components: { FancyButton },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    printRecipe() {
      window.print()
    }
  }
}
</script>

<template>
  <div class="card mt-4">
    <div class="card-body">
      <h3>Informations</h3>
      <p><strong>Temps de préparation :</strong> {{ recipe.prep_time }} min</p>
      <p><strong>Temps de cuisson :</strong> {{ recipe.cook_time }} min</p>
      <p><strong>Portions :</strong> {{ recipe.servings }}</p>
    </div>

    <div class="my-3 mx-3">
      <!-- Garder router-link -->
      <router-link to="/favoris" class="btn btn-outline-primary">
        <i class="bi bi-bookmark-heart me-2"></i> Ajouter aux favoris
      </router-link>

      <!-- Utiliser FancyButton -->
      <FancyButton
        btnClass="btn btn-outline-primary"
        type="button"
        @submit-form="printRecipe"
      >
        <i class="bi bi-printer me-2"></i> Imprimer
      </FancyButton>
    </div>
  </div>
</template>

                        