<template>
  <div class="container">
    <h1 class="text-3xl font-bold my-5">Enter your ZIP code:</h1>
    <form class="flex justify-center" @submit.prevent="getData">
      <input
        v-model="zip"
        type="text"
        name="zip-code"
        placeholder="5-digit ZIP code"
        maxlength="5"
        class="form-control mr-4 max-w-sm"
      >
      <button
        type="submit"
        class="btn btn-outline-primary text-nowrap"
        :disabled="!/^[1-9][0-9]{4}$/.test(zip)"
      >
        Render
      </button>
    </form>
    <div v-if="isIncorrectCode" class="text-warning mt-2">It seems this code is incorrect</div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()
const store = useStore()

const zip = ref('')
const isIncorrectCode = ref(false)

async function getData () {
  try {
    await store.dispatch('loadZipData', zip.value)
    await router.push('/data-page')
  } catch (e) {
    isIncorrectCode.value = true
  }
}
</script>
