<script>
import CommentRating from '../CommentRating.vue';


export default {
  name: 'FeaturedRecipe',
  components: { CommentRating },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments: []
    }
  },
  computed: {
    averageRating() {
      if (this.comments.length === 0) return this.recipe.rating || 0;
      const sum = this.comments.reduce((acc, c) => acc + Number(c.rating), 0);
      return sum / this.comments.length;
    },
    reviewCount() {
      return this.comments.length;
    }
  },
  methods: {
    addComment(newComment) {
      this.comments.push(newComment);
    }
  }
}
</script>

<template>
  <div class="container my-5 text-center">
    <h3 class="mb-4">
      <slot></slot>
    </h3>
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-6">
        <div class="card border-black border-5">
          <div class="card-body">
            <img :src="recipe.image" class="card-img-top object-fit-cover" :alt="recipe.title" />
            <h5 class="card-title mt-3">{{ recipe.title }}</h5>
            <p class="card-text">{{ recipe.summary }}</p>
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex justify-content-center">
              <CommentRating :rating="averageRating" :review="reviewCount" />
            </div>
            </div>
            <div class="mt-3">
              <router-link
                 :to="`/recette/${recipe.slug}`"
                class="btn btn-warning mt-3"
              >
                Voir la recette
              </router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>