import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import ContactUs from '@/views/ContactUs.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
import UseCondition from '@/components/UseCondition.vue'
import EventView from '@/views/EventView.vue'
import RecipeInformation from '@/components/recipe/RecipeInformation.vue'
import RecipeDetailView from '@/views/RecipeDetailView.vue'
import AddCommentView from '@/views/AddCommentView.vue'
import EventInscription from '@/components/EventInscription.vue'
import AddEventView from '@/views/AddEventView.vue'
import EventDeatailView from '@/views/EventDeatailView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/inscription', component: SignupView },
  { path: '/connexion', component: LoginView },
  { path: '/mot-de-passe-oublie', component: ForgotPasswordView},
  { path: '/contact', component: ContactUs},
  { path: '/politique-de-confidentialite', component: PrivacyPolicy},
  { path: '/cgu', component: UseCondition},
  { path: '/recette/:slug', component: RecipeDetailView},
  { path: '/ajouter-commentaire', component: AddCommentView},
  { path: '/evenements', component: EventView },
  { path: '/evenements/:slug', component: EventDeatailView },
  { path: '/evenements/formulaire-evenement', component: AddEventView },
  { path: '/evenements/formulaire-inscription', component: EventInscription },
  { path: '/favoris', component: RecipeInformation}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
