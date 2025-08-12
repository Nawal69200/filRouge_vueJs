<script>
export default {
  name: 'AddRecipeForm',
  emits: ['recipe-added'],
  data() {
    return {
      form: {
        title: '',
        description: '',
        ingredients: ''
      }
    }
  },
  methods: {
    submitRecipe() {
      const newRecipe = {
        title: this.form.title,
        description: this.form.description,
        ingredients: this.form.ingredients.split(',').map(i => i.trim())
      }

      this.$emit('recipe-added', newRecipe)

      // Réinitialiser le formulaire
      this.form.title = ''
      this.form.description = ''
      this.form.ingredients = ''
    }
  }
}
</script>


<template>
  <form @submit.prevent="submitRecipe">
    <div class="mb-3">
      <label for="title" class="form-label">Titre de la recette</label>
      <input
        type="text"
        id="title"
        class="form-control"
        v-model="form.title"
        required
      />
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        class="form-control"
        v-model="form.description"
        required
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="ingredients" class="form-label">Ingrédients (séparés par une virgule)</label>
      <input
        type="text"
        id="ingredients"
        class="form-control"
        v-model="form.ingredients"
      />
    </div>

    <button type="submit" class="btn btn-primary">Ajouter la recette</button>
  </form>
</template>

