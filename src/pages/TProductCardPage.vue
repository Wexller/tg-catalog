<script setup lang="ts">
import { products } from 'src/mock/products.ts';
import TButton from 'src/components/TButton.vue';
import { useCartStore } from 'src/store/useCartStore.ts';
import { computed, onMounted } from 'vue';
import { useWebAppBackButton } from 'vue-tg';
import { useRouter } from 'vue-router';

const product = products[0];

const cartStore = useCartStore();

const isInCart = computed(() => cartStore.hasProduct(product));

const { showBackButton, onBackButtonClicked, hideBackButton } =
  useWebAppBackButton();
const { push } = useRouter();

onMounted(showBackButton);

onBackButtonClicked(() => {
  hideBackButton();
  push('/');
});
</script>

<template>
  <div class="container px-[15px]">
    <h1 class="text-3xl">{{ product.name }}</h1>
    <sub class="text-gray-600">{{ product.sku }}</sub>

    <div class="relative pb-[100%]">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          'background-image': `url('${product.img}')`,
        }"
      />
    </div>

    <div class="text-xl">
      {{ product.price }}
    </div>

    <div class="mt-4">
      <TButton
        class="w-full rounded py-2 font-semibold text-white"
        :class="{ 'bg-green-600': !isInCart, 'bg-red-400': isInCart }"
        @click="cartStore.toggleCartItem(product)"
        >{{ isInCart ? 'Убрать' : 'Купить' }}</TButton
      >
    </div>
  </div>
</template>
