<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { configurationService } from '@/services/configurationService'
import DemoSimpleTableBasics from '@/views/pages/tables/DemoSimpleTableBasics.vue'

const configData = ref(null)

onMounted(async () => {
  try {
    configData.value = await configurationService.configurations()
    console.log(configData.value[0].tipo)
  }
  catch (error) {
    console.error('Erro ao obter configurações:', error)
  }
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Basic">
        <DemoSimpleTableBasics />
      </VCard>
    </VCol>
  </VRow>
</template>
