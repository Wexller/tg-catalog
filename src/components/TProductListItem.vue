<script setup lang="ts">
import TButton from 'src/components/TButton.vue';
import img from 'src/assets/images/Ad001093-1.jpg';
import { Product } from 'src/mock/products.ts';
import { computed } from 'vue';
import { useCartStore } from 'src/store/useCartStore.ts';

const props = defineProps<{ product: Product }>();

const cartStore = useCartStore();

const isInCart = computed(() => cartStore.hasProduct(props.product));
</script>

<template>
  <div
    :key="product.name"
    class="mb-10 flex w-1/2 flex-col justify-between px-[5px]"
  >
    <div class="relative pb-[100%]">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          'background-image': `url('${img}')`,
        }"
      />
    </div>

    <div>
      {{ product.name }}
    </div>
    <div>{{ product.price }}</div>

    <div class="flex space-x-1">
      <TButton
        class="w-2/5 rounded bg-amber-300 py-2"
        @click="cartStore.toggleCartItem(product)"
        >{{ isInCart ? 'Убрать' : 'Купить' }}</TButton
      >
      <TButton class="w-3/5 rounded border py-2">Подробнее</TButton>
    </div>
  </div>
</template>
