<script>
    export default {
        name: 'AppFooter'
    }
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 text-center">
                <p class="mt-3">© 2024 Recettes X. Tous droits réservés.</p>
                <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3">
                    <router-link to="/politique-confidentialite" class="text-dark text-decoration-none mx-2">
                        Politique de confidentialité
                    </router-link>
                    <span class="d-none d-md-block">|</span>
                    <router-link to="cgu" class="text-dark text-decoration-none mx-2">
                        Conditions d'utilisation
                    </router-link>
                </div>
            </div>
        </div>
    </div>
 </template>