<script>
import FeaturedRecipe from '@/components/recipe/FeaturedRecipe.vue';
import RecipeCategory from '@/components/recipe/RecipeCategory.vue';
import RecipeFullMenu from '@/components/recipe/RecipeFullMenu.vue';

export default {
  name: 'HomeView',
  components: { FeaturedRecipe, RecipeCategory, RecipeFullMenu },
  props: {
    appData: {
      type: Object,
      required: false
    }
  }
}
</script>

<template>
  <main class="container">
    <div class="text-center">
      <h1>Explorez, cuisinez, dégustez</h1>
      <p>Les meilleures recettes à portée de clic !</p>
    </div>
    <hr>
    <p>Nombre de recettes : {{ appData?.recipes.length || 0 }}</p>

    <FeaturedRecipe
      v-if="appData?.recipes?.[0]"
      :recipe="appData.recipes[0]"
    >
      Recette de la semaine
    </FeaturedRecipe>

    <div class="container my-5">
      <RecipeFullMenu :recipes="appData.recipes" />
    </div>

    <div class="container my-5">
      <RecipeCategory :recipes="appData.recipes" />
    </div>

    <FeaturedRecipe
      v-if="appData?.recipes?.[8]"
      :recipe="appData.recipes[8]"
    >
      Recette en vedette
    </FeaturedRecipe>
  </main>
</template>
