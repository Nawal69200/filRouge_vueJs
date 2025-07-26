<script>
    export default {
        name: 'RecipeIngredient',
        methods: {
            formatIngredient(ingredient) {
                const { quantity, unit, name } = ingredient;

                if (!name) return 'Ingrédient inconnu';

                if (quantity) {
                    return `${quantity} ${name}`;
                } else if (unit) {
                    return `${unit} ${name}`;
                } else {
                    return name;
                }
            }

        }
    }    
</script>

<template>
    <div class="col-lg-4 col-md-12 mt-4 mt-md-0">
        <div class="card">
            <div class="card-body">
                <ul class="list-unstyled">
                    <li v-for="ingredient in ingredients" :key="ingredient.id"><i class="bi bi-check-circle me-2"></i>
                        {{ formatIngredient(ingredient) }} 
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>



