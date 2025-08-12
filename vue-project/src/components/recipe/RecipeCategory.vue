<script>
import CommentRating from '../CommentRating.vue'


export default {
  name: 'RecipeCategory',
  components: { CommentRating },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      comments: []
    }
  },
  computed: {
    averageRating() {
      if (this.comments.length === 0) return 0
      const sum = this.comments.reduce((acc, c) => acc + Number(c.rating), 0)
      return sum / this.comments.length
    },
    reviewCount() {
      return this.comments.length
    }
  },
  methods: {
    addComment(newComment) {
      this.comments.push(newComment)
    }
  }
}
</script>

<template>
  <div v-for="item in categorizedList"
  :key="item.category"
  class="container my-5">
    
    <h3>{{ item.category }}</h3>
   
    <div class="card border-black border-5 mb-3 mx-auto col-12 col-md-12 col-lg-10">
      <div class="d-flex flex-column flex-md-row h-100">
      
      
        <div v-if="item.recipe" class="col-12 col-md-4 d-flex">

          <img
            :src="item.recipe.image"
            class="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="Nouilles aux crevettes"
            :alt="item.recipe.title"
          />
        </div>
          <div class="col-12 col-md-8 d-flex flex-column">
            <h5 class="card-title">{{ item.recipe.title }}</h5>
            <p class="card-text text-center flex-grow-1">{{ item.recipe.summary }}</p>
            <div class="d-flex justify-content-center align-items-center mt-auto">
              <div  class="me-2">
                 <CommentRating :rating="item.averageRating" :review="item.reviewCount" />
              </div>
               <div class=" mt-3 text-center">
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
  </div>
</template>
 