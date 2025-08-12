<script>
import CommentRating from '../CommentRating.vue'

export default {
  name: 'RecipeFullMenu',
  components: { CommentRating },
  props: {
    recipes: {
      type: Array,
      required: true,
      default: () => []
    },
    comments: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      categories: ['Entrées', 'Plats', 'Desserts', 'Boissons']
    }
  },
  computed: {
    categorizedList() {
      return this.categories.map((category, index) => {
        const recipe = this.recipes[index] || null;

        let averageRating = 0;
        let reviewCount = 0;

        if (recipe) {
          // Récupérer uniquement les commentaires de cette recette
          const recipeComments = this.comments.filter(c => c.recipe_id === recipe.recipe_id);

          if (recipeComments.length > 0) {
            reviewCount = recipeComments.length;
            averageRating = recipeComments.reduce((acc, c) => acc + Number(c.rating || 0), 0) / reviewCount;
          }
        }

        return { category, recipe, averageRating, reviewCount };
      });
    }
  }
}
</script>

<template>
  <div
    v-for="item in categorizedList"
    :key="item.category"
    class="col-12 col-md-6 col-lg-3 mb-4"
  >
    <h3 class="mb-4">{{ item.category }}</h3>

    <div v-if="item.recipe" class="card border-black border-5 d-flex flex-column">
      <img
        :src="item.recipe.image"
        class="card-img-top object-fit-cover"
        :alt="item.recipe.title"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mt-3">{{ item.recipe.title }}</h5>
        <p class="card-text text-center">{{ item.recipe.summary }}</p>

        <div class="mt-auto text-center">
          <div class="d-flex justify-content-center">
          <CommentRating :rating="item.averageRating" :review="item.reviewCount" />
        </div>

        <div>
          <router-link
            :to="`/recette/${item.recipe.slug}`"
            class="btn btn-warning mt-3"
          >
            Voir la recette
          </router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
