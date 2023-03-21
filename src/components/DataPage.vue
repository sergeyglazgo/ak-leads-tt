<template>
  <div class="mt-5">
    <h2 class="text-xl font-bold mb-2">Zip Code Data:</h2>
    <p><strong>State:</strong> {{ zipData.places[0].state }}</p>
    <p><strong>City:</strong> {{ zipData.places[0]['place name'] }}</p>
  </div>

  <div class="mt-4">
    <h3 class="text-lg font-bold mb-2">Additional Info:</h3>
    <p><strong>HTTP Referer:</strong> {{ httpReferer }}</p>
    <p v-if="utmTags"><strong>UTM Tags:</strong> {{ utmTags }}</p>
    <p><strong>User Agent:</strong> {{ userAgent }}</p>
  </div>

  <div v-if="userData" class="mt-5">
    <h2 class="text-xl font-bold mb-2">User Data:</h2>
    <p><strong>IP:</strong> {{ userData.ip }}</p>
    <p><strong>ISP:</strong> {{ userData.isp }}</p>
    <p><strong>City:</strong> {{ userData.city }}</p>
    <p><strong>Region:</strong> {{ userData.region }}</p>
    <p><strong>Country:</strong> {{ userData.country }}</p>
  </div>

  <div class="mt-3">
    <button class="btn btn-primary mr-2" @click="lookupIP">IP Lookup</button>
    <button class="btn btn-outline-dark" @click="openMainPage">Main Page</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

const zipData = computed(() => store.getters.getZipData)
const userData = computed(() => store.getters.getUserData)

const httpReferer = document.referrer
const utmTags = new URLSearchParams(window.location.search).toString()
const userAgent = navigator.userAgent

async function lookupIP() {
  await store.dispatch('loadUserData')
}

function openMainPage () {
  router.back()
  store.state.userData = null
}
</script>
