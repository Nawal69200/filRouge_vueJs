<script>
    export default {
        name: 'NewsletterForm'
    }
</script>

<template>
     <form method="GET" action="" class="custom-form-style my-5 bg-light p-4 text-center mx-auto col-11 col-md-10 col-lg-8">
            <h4 class="text-primary">Abonnez-vous à notre newsletter</h4>
            <label for="email" class="form-label">Recevez nos dernières recettes directement dans votre boîte mail.</label>
            <div class="input-group mb-3">
                <input type="email" class="form-control" id="email" placeholder="Entrez votre email">
                <button id="submit-button" class="btn btn-primary" type="button">Envoyer</button>
            </div>
        </form>  
</template>