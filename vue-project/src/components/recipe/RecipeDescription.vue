<script>
import RecipeStep from './RecipeStep.vue';

    export default {
        name: 'RecipeDescription',
        components : {
            RecipeStep
        },
        data() {
    return {
      // Exemple de données, à remplacer par ta source API réelle
      recipeSteps: [
        { id: 1, order: 1, title: 'Préparer les ingrédients', content: 'Couper les légumes...' },
        { id: 2, order: 2, title: 'Cuisson', content: 'Faire revenir dans la poêle...' }
      ]
    };
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-8 col-md-12">*
                <div class="card">
                    <div class="card-body">
                        <h3 class="mb-3 text-center">Préparation</h3>
                        <RecipeStep :steps="recipeSteps" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

