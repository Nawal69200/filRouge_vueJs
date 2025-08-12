<script>
export default {
  data() {
    return {
      recette: { id: 2, title: "Crêpes maison" },
      favoris: [],
      isLoggedIn: true // exemple : plus tard tu récupéreras ça via ton API
    }
  },
  methods: {
    ajouterFavoris() {
      if (!this.isLoggedIn) {
        alert("Vous devez être connecté pour ajouter des favoris !");
        return;
      }
      if (!this.favoris.some(item => item.id === this.recette.id)) {
        this.favoris.push(this.recette);
        alert("Recette ajoutée aux favoris !");
      } else {
        alert("Cette recette est déjà dans vos favoris.");
      }
    }
  }
}
</script>

<template>
  <div>
    <h3>{{ recette.title }}</h3>
    <button @click="ajouterFavoris">Ajouter en favoris (Méthode)</button>
  </div>
</template>


