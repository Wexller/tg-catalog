<script setup lang="ts">
import { Alert, MainButton } from 'vue-tg';
import { ref } from 'vue';
import TProductList from 'src/components/TProductList.vue';
import { useCartStore } from 'src/store/useCartStore.ts';

const showAlert = ref(false);

const cartStore = useCartStore();

const onMainButtonClick = () => {
  showAlert.value = true;
};
</script>

<template>
  <div class="container mx-auto">
    <TProductList />

    <MainButton
      :text="`Оформить заказ на сумму: ${cartStore.subTotal}`"
      @click="onMainButtonClick"
      :visible="hasProducts"
    />

    <Alert
      v-if="showAlert"
      message="Заказ успешно оформлен!"
      @close="showAlert = false"
    />
  </div>
</template>
