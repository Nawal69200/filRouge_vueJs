<script>
import FancyButton from './FancyButton.vue';
import GenericForm from './GenericForm.vue';
export default {
    name: 'EventInscrption',
    components: { GenericForm, FancyButton },
        props: {
        events: {
        type: Array,
        required: true,
        }
    },
    data() {
        return {
            formItems: [
                { label: "Nom complet", type: "text", model: "name", required: true },
                { label: "Nom d'utilisateur:", type: "text", model: "username", required: true },
                { label: "Adresse e-mail", type: "email", model: "email", required: true },
                { label: "Numéro de téléphone", type: "phone", model: "phone", required: true },
                { label: "Restrictions alimentaires ou allergies:", type: "textarea", model: "dietary", rows: 3, required: false },
                { label: "Quels aspects de cet événement vous intéressent le plus ?", type: "textarea", name:"expectations3", rows: 3, required: false }
            ],
            formValues: {
                name: '',
                username: '',
                email: '',
                phone: '',
                dietary: '',
                expectations3: ''
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

        // ✅ Si tout est bon
        alert("✅ Inscription réussie !");
        console.log("Formulaire soumis :", this.formValues);

        // Tu pourras remplacer ça par ton appel API plus tard
        }
    }
}

</script>

<template>
    <main>
        <div class="container my-5 p-4 col-12 col-sm-10 col-md-8 col-lg-6 custom-form-style">
            <h2 class="text-center border-bottom border-danger pb-2">Formulaire d'inscription</h2>
            <p>Réservez votre place dès maintenant</p>
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
                Je m'inscris
            </FancyButton>
        </div>
    </main>
</template>

