

<template>
    <div class="container my-5">
        <RecipeTitle :title="recipe.title" />
        <RecipeIngredient :recette-id="recette.id" />
                <RecipeDescription :recette-id="recette.id" />

    </div>
</template>

<script>
import RecipeDescription from './RecipeDescription.vue';
import RecipeIngredient from './RecipeIngredient.vue';
import RecipeTitle from './RecipeTitle.vue';


    export default {
        components: {
            RecipeTitle,
            RecipeIngredient,
            RecipeDescription
        },
        data(){
            return {
                
            }
        }
    }
</script>