<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DemoSimpleTableBasics from '@/views/pages/tables/DemoSimpleTableBasics.vue'

const configData = ref(null)

onMounted(async () => {
  try {
    configData.value = 1// await configurationService.configurations()
    console.log(1)// configData.value[0].tipo)
  }
  catch (error) {
    console.error('Erro ao obter configurações:', error)
  }
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Configurações">
        <DemoSimpleTableBasics />
      </VCard>
    </VCol>
  </VRow>
</template>
