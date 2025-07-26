<script setup>
  import RecipeDescription from '@/components/recipe/RecipeDescription.vue';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <h1 class="text-center mt-3">Bienvenue sur Recettes X</h1>
  </header>

  <main>
    <RecipeDescription />
    <!-- Vue router affiche ici la vue active (comme HomeView) -->
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto;
}

main {
  padding: 2rem;
}
</style>
