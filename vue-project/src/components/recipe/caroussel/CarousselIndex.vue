<script>
    export default {
        name: 'CarousselIndex'
    }
</script>

<template>
    <div class="container mt-5">
        <div class="text-center mb-4">
            <h3>Actus, tendance</h3>
        </div>
        <div class="row justify-content-center">
            <div class="col-11 col-md-10 col-lg-8">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/noix.jpg" class="d-block w-100 carousel-img" alt="Les noix">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="mb-3">Pourquoi devrait-on manger davantage de noix ?</h5>
                                <p>Les noix sont riches en acides gras oméga-3, bénéfiques pour la santé cardiovasculaire.</p>
                                <a href="../carousel/noix.html" class="btn btn-outline-warning">Lire plus</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/images/avocats.jpg" class="d-block w-100 carousel-img" alt="Les avocats">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="mb-3">Les bienfaits des avocats</h5>
                                <p>Les avocats contiennent des fibres, aidant à la digestion.</p>
                                <a href="../carousel/avocats.html" class="btn btn-outline-warning">Lire plus</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/images/piments.jpg" class="d-block w-100 carousel-img" alt="Les piments">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="mb-3">Les vertus du piment</h5>
                                <p>Les piments possèdent des propriétés anti-inflammatoires.</p>
                                <a href="../carousel/piments.html" class="btn btn-outline-warning">Lire plus</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Précédent</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Suivant</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

