<template>
  <div class="search-container">
    <input
      type="text"
      v-model="query"
      @input="debouncedSearch"
      placeholder="🔍 Rechercher une recette..."
      class="search-input"
    />

    <ul v-if="filteredRecipes.length > 0" class="results-list">
      <li v-for="recipe in filteredRecipes" :key="recipe.id">
        <strong>{{ recipe.title }}</strong> - {{ recipe.description }}
      </li>
    </ul>
    <p v-else class="no-result">Aucune recette trouvée.</p>
  </div>
</template>

<script>
import { debounce } from 'lodash-es'

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
      recipes: [],
      filteredRecipes: []
    }
  },
  created() {
    this.debouncedSearch = debounce(this.searchRecipes, 300)
  },
  mounted() {
    // 🔹 Récupération des données depuis le fichier public/data.json
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        this.recipes = data.recipes
        this.filteredRecipes = data.recipes
      })
      .catch(err => console.error("Erreur de chargement des recettes:", err))
  },
  methods: {
    searchRecipes() {
      const searchTerm = this.query.toLowerCase()
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
      )
    }
  }
}
</script>
