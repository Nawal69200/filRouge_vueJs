<script>
import CommentRating from '@/components/CommentRating.vue';
import CommentPagination from '@/components/recipe/CommentPagination.vue';
import RecipeComment from '@/components/recipe/RecipeComment.vue';
import RecipeInformation from '@/components/recipe/RecipeInformation.vue';
import RecipeIngredient from '@/components/recipe/RecipeIngredient.vue';
import RecipeStep from '@/components/recipe/RecipeStep.vue';
import RecipeTitle from '@/components/recipe/RecipeTitle.vue';


    export default {
        name: 'RecipeDetailView',
        components: { 
            CommentRating, 
            RecipeStep, 
            RecipeInformation, 
            RecipeIngredient, 
            RecipeComment,
            CommentPagination,
            RecipeTitle
        },
        props: {
            appData: {
                type: Object,
                required: true
            },
        },
        computed: {
            currentRecipe() {
                return this.appData.recipes.find(
                r => r.slug === this.$route.params.slug
                );
            },
             currentRecipeSteps() {
                if (!this.currentRecipe) return [];
                // Filtrer les steps dans appData.steps qui ont recipe_id = currentRecipe.recipe_id
                return this.appData.steps.filter(
                    step => step.recipe_id === this.currentRecipe.recipe_id
                ).sort((a, b) => a.order - b.order); // Tri par ordre croissant
            },
             currentRecipeComments() {
                if (!this.currentRecipe) return [];
                // Filtrer les commentaires liés à la recette actuelle
                return this.appData.comments.filter(
                    c => c.recipe_id === this.currentRecipe.recipe_id
                );
            },
            users() {
                // Récupérer les utilisateurs depuis appData ou ailleurs
                return this.appData.users || [];
            }
        }
    }
</script>

<template>
    <main>
        <div class="container my-5">
            <RecipeTitle :recipes="[currentRecipe]" /><!--de cette maniere car Object-->
            <div class="row mt-3">
                <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center me-2">
                            <CommentRating />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="mb-3 text-center">Préparation</h3>
                            <RecipeStep :steps="currentRecipeSteps" /><!-- de cette maniere car array-->
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-12 mt-4 mt-md-0">
                    <RecipeIngredient :recipe="currentRecipe" />
                    <RecipeInformation :recipe="currentRecipe" />
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="row">
                <h3 class="text-center mt-5 mb-4">Commentaires</h3>
                <div class="col-md-8 offset-md-2">
                    <RecipeComment 
                      :comments="currentRecipeComments" 
                      :users="users" 
                    />
                </div>
            </div>
        </div>
        <CommentPagination />
        
        <div class="text-center mb-5">
            <router-link to="/commentForm"
                class="btn btn-primary">Soumettre un commentaire
            </router-link>
        </div>
    </main>
</template>


    
        
    