<script>
export default {
  name: 'RecipeImage',
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImagePath(image) {
      if (!image) return '';
      // si là c'est déjà un chemin public (/images/...), on le retourne tel quel
      if (image.startsWith('/') || image.startsWith('http')) return image;

      // extraire seulement le nom de fichier (gère "src/assets/boeuf.jpg" ou "boeuf.jpg")
      const filename = image.split('/').pop();

      // IMPORTANT : RecipeImage.vue est dans src/components/recipe,
      // pour pointer vers src/assets il faut remonter 2 niveaux : ../../assets
      return new URL(`../../assets/${filename}`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div v-for="recipe in recipes" :key="recipe.recipe_id" class="card">
    <img :src="getImagePath(recipe.image)" :alt="recipe.title" class="img-fluid rounded img-thumbnail">
  </div>
</template>
