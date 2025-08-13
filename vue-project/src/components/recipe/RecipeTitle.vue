<script>
import GenericImage from '../GenericImage.vue';



export default {
    name: 'RecipeTitle',
    components: { GenericImage },
    props: {
        recipes: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div
        v-for="recipe in recipes"
        :key="recipe.recipe_id"
    >
        <h3 class="text-center mb-4">{{ recipe.title }}</h3>  
        <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
                <div class="card">
                    <GenericImage
                        :src="recipe.image"
                        :alt="recipe.title"
                        classes="img-fluid rounded img-thumbnail"
                    />
                  </div>
              </div>
          </div>
    </div>
</template>




