<script>
import CommentRating from '../CommentRating.vue'

export default {
    name: 'RecipeFullMenu',
    components: { CommentRating },
    props: {
        recipes: {
        type: Array,
        required: true
        }
    }
}
</script>

<template>
  <div class="row">
    <div
      v-for="(recipe, index) in recipes"
      :key="index"
      class="col-md-6 col-lg-4 mb-4"
    >
      <div class="card h-100 shadow-sm">
        <img
          :src="recipe.image"
          class="card-img-top"
          :alt="recipe.title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ recipe.title }}</h5>
          <p class="card-text">{{ recipe.description }}</p>
          <CommentRating
            :rating="Number(recipe.rating) || 0"
            :review="Number(recipe.reviewCount) || 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

