<script>
import RecipeStep from './RecipeStep.vue';

export default {
  name: 'RecipeDescription',
  components: { RecipeStep },
  props: {
    recipeSteps: Array
  }
}
</script>

<template>
  <div class="card-body">
    <h3 class="mb-3 text-center">Préparation</h3>
    <RecipeStep :steps="recipeSteps" />
  </div>
</template>
