<script>
import Logo from '@/assets/logo.png' 
    export default {
        name: 'AppHeader',
        data () {
            return {
                logo: Logo
            }
        }
    }
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <FancyButton
        type="button"
        btnClass="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </FancyButton>

      <!-- Logo + Accueil -->
      <router-link to="/" class="navbar-brand">
        Accueil
        <img :src="logo" alt="Logo du site">
      </router-link>

      <!-- Bouton profil en cercle -->
      <div class="dropdown ms-3">
        <FancyButton
          type="button"
          btnClass="btn btn-outline-secondary rounded-circle p-2"
          id="userDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-person-circle"></i>
        </FancyButton>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><router-link to="/connexion" class="dropdown-item">CONNEXION</router-link></li>
          <li><router-link to="/inscription" class="dropdown-item">INSCRIPTION</router-link></li>
        </ul>
      </div>

      <!-- Menu navigation -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link to="/" class="nav-link">Accueil</router-link></li>
          <li class="nav-item"><router-link to="/evenements" class="nav-link">Evénements</router-link></li>
          <li class="nav-item"><router-link to="/favoris" class="nav-link">Favoris</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link">Contactez-nous</router-link></li>
        </ul>

        <!-- Barre de recherche avec FancyButton -->
        <div class="search-form ms-auto">
          <form class="d-flex">
            <input class="form-control" type="search" placeholder="Rechercher" aria-label="Search">
            <FancyButton
              type="submit"
              btnClass="btn btn-success ms-2"
            >
              <i class="bi bi-search"></i> Rechercher
            </FancyButton>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>
