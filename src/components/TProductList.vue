<script setup lang="ts">
import TProductListItem from 'src/components/TProductListItem.vue';
import { products } from 'src/mock/products.ts';
</script>

<template>
  <div class="px-[15px] py-10">
    <div class="text-3xl">Список кроссовок</div>

    <div class="mt-10 flex flex-wrap">
      <TProductListItem v-for="p in products" :key="p.sku" :product="p" />
    </div>
  </div>
</template>
