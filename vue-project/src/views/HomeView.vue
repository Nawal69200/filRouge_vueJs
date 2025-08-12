<script>
import FeaturedRecipe from '@/components/recipe/FeaturedRecipe.vue';
import RecipeCategory from '@/components/recipe/RecipeCategory.vue';
import RecipeFullMenu from '@/components/recipe/RecipeFullMenu.vue';

export default {
  name: 'HomeView',
  components: { FeaturedRecipe, RecipeFullMenu, RecipeCategory },
  props: {
    appData: {
      type: Object,
      required: false
    }
  },
  computed: {
    featuredFirstRecipe() {
      return this.appData?.recipes?.[0];
    },
    featuredLastRecipe() {
      return this.appData?.recipes?.[8];
    },
    menuRecipes() {
      return this.appData?.recipes?.slice(2, 6); // Recettes 2 à 5 inclus
    },
    categoryRecipes() {
      return this.appData?.recipes?.slice(6, 9); // Recettes 6 à 8 inclus
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

    <FeaturedRecipe v-if="featuredFirstRecipe" :recipe="featuredFirstRecipe">
      Recette de la semaine
    </FeaturedRecipe>

    <div class="container my-5">
      <div class="row text-center">
        <RecipeFullMenu :recipes="menuRecipes" />
      </div>
    </div>

    
    <RecipeCategory/>
    

    <FeaturedRecipe v-if="featuredLastRecipe" :recipe="featuredLastRecipe">
      Derniers ajouts
    </FeaturedRecipe>
  </main>
</template>
