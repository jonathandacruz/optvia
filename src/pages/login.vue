<script setup lang="ts">
import { useRouter } from 'vue-router' // Importe o roteador aqui
import { authService } from '@/services/authService'
import logo from '@images/logo.svg?raw'

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const router = useRouter() // Instancie o roteador aqui

const isPasswordVisible = ref(false)

const handleLogin = async () => {
  try {
    const response = await authService.login(form.value.email, form.value.password)
    if (response && response.jwtToken) { // Verifique a estrutura da sua resposta
      localStorage.setItem('authToken', response.jwtToken)
    }
    router.push('/')
  }
  catch (error) {
    console.error('Erro no login:', error)

    // Feedback para o usuário
  }
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div
              class="d-flex text-primary"
              v-html="logo"
            />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          Optvia
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Bem vindo ao Optvia! 👋🏻
        </h5>
        <p class="mb-0">
          Faça seu login para ter acesso completo a plataforma.
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="handleLogin">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="seuusuário@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Senha"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Lembrar-me?"
                />

                <RouterLink
                  class="text-primary ms-2 mb-1"
                  to="javascript:void(0)"
                >
                  Esqueceu sua senha?
                </RouterLink>
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
              >
                Acessar
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Novo por aqui?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Crie sua conta
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <VDivider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
