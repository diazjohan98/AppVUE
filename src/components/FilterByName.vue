<template>
    <div class="search">
        <input 
        type="text" 
        placeholder="Search by name"
        v-model="name"
        @keyup="filter()">
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        const name = ref('')

        const filter = () => {
            store.dispatch('filterByName', name.value)
        }

        return {
            name,
            filter
        }
    }
}

</script>

<style lang="scss">
.search {
  width: 40%;
  margin: 1rem auto 0;

  input {
    height: 53px;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    background-color: #2a2a2a; // Un poco más claro que el fondo principal
    color: #fff; // Texto blanco
    font-size: 1rem;
    transition: all 0.3s ease;

    // Borde y sombra suave para dar profundidad
    box-shadow: 0 0 0 1px #969595;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      outline: none;
      background-color: #333;
      box-shadow: 0 0 0 2px #5c6aff; // azul tenue de enfoque
    }
  }
}
</style>