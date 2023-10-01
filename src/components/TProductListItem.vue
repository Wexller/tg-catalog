<script setup lang="ts">
import TButton from 'src/components/TButton.vue';
import img from 'src/assets/images/Ad001093-1.jpg';
import { Product } from 'src/mock/products.ts';
import { computed } from 'vue';
import { useCartStore } from 'src/store/useCartStore.ts';
import { useRouter } from 'vue-router';

const props = defineProps<{ product: Product }>();

const router = useRouter();

const cartStore = useCartStore();

const isInCart = computed(() => cartStore.hasProduct(props.product));
</script>

<template>
  <div
    :key="product.name"
    class="mb-10 flex w-1/2 flex-col justify-between px-[5px]"
  >
    <div class="flex flex-col justify-between">
      <div class="relative pb-[100%]">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{
            'background-image': `url('${img}')`,
          }"
        />
      </div>

      <div class="space-y-4 py-4">
        <div class="font-bold">
          {{ product.name }}
        </div>

        <div>{{ product.price }}</div>
      </div>
    </div>

    <div class="flex flex-col space-y-2">
      <TButton
        class="rounded py-2 font-semibold text-white"
        :class="{ 'bg-green-600': !isInCart, 'bg-red-400': isInCart }"
        @click="cartStore.toggleCartItem(product)"
        >{{ isInCart ? 'Убрать' : 'Купить' }}</TButton
      >
      <TButton class="rounded border py-2" @click="router.push('/product')"
        >Подробнее</TButton
      >
    </div>
  </div>
</template>
