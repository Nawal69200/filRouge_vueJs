<script>
import FancyButton from '@/components/FancyButton.vue';
import GenericForm from '@/components/GenericForm.vue';

    export default {
        name: 'AddEventView',
        components: {GenericForm, FancyButton},
        props: {
            events: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
            formItems: [
                { label: "Nom de l'événement", type: "text", model: "eventName", required: true },
                { label: "Type d'événement", type: "select", model: "eventType", required: true, options: [
                    {value: "Choisissez un type"},
                    {value: "Atelier de cuisine"},
                    {value: "Dégustation"},
                    {value: "Concours"},
                    {value: "Conférence"},
                    {value: "Autre"}
                ] },
                { label: "Date de début de l'événement", type: "date", model: "startDate", required: true },
                { label: "Date de fin de l'événement", type: "date", model: "endtDate", required: true },
                { label: "Heure de début", type: "time", model: "startTime", required: true },
                { label: "Heure de fin", type: "time", model: "endTime", required: true },
                { label: "Lieu de l'événement", type: "text", model: "location", required: true },
                { label: "Description de l'événement", type: "textarea", model: "description", required: true, rows: 4},
                { label: "Capacité maximale (personnes)", type: "number", model: "capacity", min: 1},
                { label: "Prix (en €)", type: "number", model: "price"},
                { label: "Image de l'événement", type: "file", model: "image"},
                { label: "Nom de l'organisateur", type: "text", model: "nameOrganizer", required: true},
                { label: "Email de l'organisateur", type: "mail", model: "email", required: true},
                { label: "Téléphone de l'organisateur", type: "tel", model: "phone"},
                { label: "J'accepte les conditions d'utilisation et la politique de confidentialitéNom de l'organisateur", type: "checkbox", model: "terms", required: true}
            ],
            formValues: {
                eventName: '',
                eventType: '',
                startDate: '',
                endtDate: '',
                startTime: '',
                endtTime: '',
                location: '',
                description: '',
                capacity: '',
                price: '',
                image: '',
                nameOrganizer: '',
                email: '',
                phone: '',
                terms: ''
            },
            btnClass: 'btn btn-primary w-100'
            }
        },
        methods: {
            handleSubmit() {
            // Vérification des champs requis
            for (let item of this.formItems) {
                if (item.required && !this.formValues[item.model]) {
                alert(`❌ Le champ "${item.label}" est obligatoire.`);
                return;
                }
            }

            // Vérification mot de passe
            if (this.formValues.password !== this.formValues.confirmPassword) {
                alert("❌ Les mots de passe ne correspondent pas.");
                return;
            }

            // Vérification des CGU
            if (!this.formValues.terms) {
                alert("❌ Vous devez accepter les conditions d'utilisation pour continuer.");
                return;
            }

            // ✅ Si tout est bon
            alert("✅ Inscription réussie !");
            console.log("Formulaire soumis :", this.formValues);

            // Tu pourras remplacer ça par ton appel API plus tard
            }
        }
    }
</script>

<template>
     <main class="container my-5">
        <div class="form-header mb-5">
            <h2 class="text-center">Formulaire de soumission d'événement</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12 col-lg-8">
                <div class="custom-form-style p-5">
                    <div v-for="item in formItems" :key="item.model" class="mb-3">
                        <GenericForm
                            :item="item"
                            v-model="formValues[item.model]"
                        />
                    </div>
                    <FancyButton
                        :btnClass="btnClass"
                        type="button"
                        @submit-form.prevent="handleSubmit">
                    Soumettre l'événement
                    </FancyButton>
                </div>
            </div>
        </div>
     </main>
</template>
                             