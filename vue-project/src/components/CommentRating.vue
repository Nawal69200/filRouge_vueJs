<script>
export default {
  name: 'CommentRating',
  props: {
    rating: {
      type: Number,
      required: true,
      default: 0,
      validator: value => typeof value === 'number' && !isNaN(value) && value >= 0 && value <= 5
    },
    review: {
      type: Number,
      default: 0
    }
  },
  computed: {
    filledStars() {
      // On arrondit la note à l'entier le plus proche
      const rounded = Math.round(this.rating);
      return Math.min(Math.max(rounded, 0), 5);
    },
    emptyStars() {
      return 5 - this.filledStars;
    }
  }
}
</script>

<template>
  <i v-for="i in filledStars" :key="'filled-' + i" class="bi bi-star-fill text-warning"></i>
  <i v-for="i in emptyStars" :key="'empty-' + i" class="bi bi-star text-warning"></i>
  <span class="ms-2">({{ review }} avis)</span>
</template>
