<!-- Logout.vue -->
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/authService'

onMounted(() => {
  authService.logout()

  const router = useRouter()

  router.push('/login')
})
</script>

<template>
  <div />
</template>
