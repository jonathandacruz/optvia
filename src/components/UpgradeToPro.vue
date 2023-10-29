<template>
  <VBtn
    color="error"
    class="product-upgrade-to-pro"
    href="https://themeselection.com/item/Optvia-vuetify-vuejs-admin-template/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Upgrade to Pro

    <VMenu
      open-on-hover
      activator="parent"
      offset="15"
      max-width="400px"
      :close-on-content-click="false"
      transition="slide-y-reverse-transition"
    >
      <VCard>
        <VImg src="https://cdn.jsdelivr.net/gh/themeselection/ts-assets/Optvia/Optvia-vuetify-vuejs-admin-template-free/banner/Optvia-vuetify-vuejs-admin-template-free.png" />
        <VCardTitle>Optvia - Vuetify Admin Template</VCardTitle>
        <VCardText>
          Optvia Admin is the most developer friendly & highly customisable Admin Dashboard Template based on Vuetify.
        </VCardText>
        <VCardText>Click on below button to explore PRO version.</VCardText>
        <VCardText>
          <VBtn>
            Demo
          </VBtn>
          <VBtn>
            Download
          </VBtn>
        </VCardText>
      </VCard>
    </VMenu>
  </VBtn>
</template>
