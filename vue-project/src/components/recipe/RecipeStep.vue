<script>
    export default {
        name: 'RecipeStep',
        props: {
    steps: {
      type: Array,
      required: true
    }
  }
    }
</script>

<template>
  <div class="mb-4">
    <div v-for="step in steps" :key="step.id">
      <h5>Étape {{ step.order }} : {{ step.title }}</h5>
      <p>{{ step.content }}</p>
    </div>
  </div>
</template>
