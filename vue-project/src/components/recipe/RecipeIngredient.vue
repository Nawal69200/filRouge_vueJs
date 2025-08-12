<script>
export default {
  name: 'RecipeIngredient',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    ingredientsList() {
      // protège si recipe ou recipe.ingredients n'existe pas
      return Array.isArray(this.recipe?.ingredients) ? this.recipe.ingredients : []
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3 class="mb-3">Ingrédients</h3>

      <ul class="list-unstyled" v-if="ingredientsList.length">
        <li v-for="ingredient in ingredientsList"
            :key="ingredient.ingredient_id || ingredient.name">
          <i class="bi bi-check-circle me-2"></i>
          {{ ingredient.name }}
          <span v-if="ingredient.quantity">
            : {{ ingredient.quantity }}
            <span v-if="ingredient.unit">&nbsp;{{ ingredient.unit }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
