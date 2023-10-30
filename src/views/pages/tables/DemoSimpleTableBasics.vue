<script>
export default {
  data() {
    return {
      openedIndex: null,
      items: [
        { title: 'Título 1', content: 'Conteúdo 1' },
        { title: 'Título 2', content: 'Conteúdo 2' },
        { title: 'Título 3', content: 'Conteúdo 3' },
      ],
    }
  },
  methods: {
    toggle(index) {
      this.openedIndex = this.openedIndex === index ? null : index
    },
  },
}
</script>

<template>
  <div class="teste">
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <button @click="toggle(index)">
        {{ item.title }}
        <IconBtn
          v-if="openedIndex === index"
          icon="bx-chevron-up"
          color="gray"
        />
        <IconBtn
          v-else
          icon="bx-chevron-down"
          color="gray"
        />
      </button>
      <div v-if="openedIndex === index">
        {{ item.content }}
      </div>
    </div>
  </div>

  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#modalCenter"
  >
    Launch modal
  </button>
  <div
    id="modalCenter"
    class="modal fade"
    tabindex="-1"
    style="display: none;"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="modalCenterTitle"
            class="modal-title"
          >
            Modal title
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label
                for="nameWithTitle"
                class="form-label"
              >Name</label>
              <input
                id="nameWithTitle"
                type="text"
                class="form-control"
                placeholder="Enter Name"
              >
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-0">
              <label
                for="emailWithTitle"
                class="form-label"
              >Email</label>
              <input
                id="emailWithTitle"
                type="email"
                class="form-control"
                placeholder="xxxx@xxx.xx"
              >
            </div>
            <div class="col mb-0">
              <label
                for="dobWithTitle"
                class="form-label"
              >DOB</label>
              <input
                id="dobWithTitle"
                type="date"
                class="form-control"
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-label-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teste {
  padding: 20px;
  background-color: #fafafa; /* um cinza muito leve para o fundo */
  border-radius: 5px; /* cantos arredondados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* uma leve sombra para dar profundidade */
}

button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 18px; /* padding um pouco mais generoso */
  text-align: left;
  border: none;
  background-color: #f7f7f7; /* um cinza ligeiramente mais escuro que o fundo .teste */
  cursor: pointer;
  transition: all 0.3s; /* transição suave para todas as propriedades */
  border-radius: 4px; /* bordas ligeiramente arredondadas */
}

button:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px); /* um pequeno efeito de "levantar" o botão quando passa o mouse */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* aumenta a sombra no hover */
}

div > div {
  border: 1px solid #ebebeb; /* cor de borda mais suave */
  margin-bottom: 10px;
  border-radius: 4px; /* bordas arredondadas para os divs também */
  overflow: hidden; /* garante que o conteúdo interno respeite as bordas arredondadas */
}

i {
  align-self: center;
}
</style>
