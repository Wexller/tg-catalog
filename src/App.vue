<script setup lang="ts">
import { Alert, MainButton } from 'vue-tg';
import { ref } from 'vue';

const showAlert = ref(false);

const onMainButtonClick = () => {
  showAlert.value = true;
};
</script>

<template>
  <div class="container mx-auto">
    Проверка
    <MainButton text="Оформить заказ" visible @click="onMainButtonClick" />

    <Alert v-if="showAlert" message="Успешно!" />
  </div>
</template>
