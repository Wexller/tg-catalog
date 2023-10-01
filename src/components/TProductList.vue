<script setup lang="ts">
import TProductListItem from 'src/components/TProductListItem.vue';

const products = Array(8)
  .fill(null)
  .map((_, idx) => ({
    name: `Sneaker ${idx + 1}`,
    price: 6900,
  }));
</script>

<template>
  <div class="px-[15px] py-10">
    <div class="text-3xl">Список кроссовок</div>

    <div class="mt-10 flex flex-wrap">
      <TProductListItem v-for="p in products" :key="p.name" :product="p" />
    </div>
  </div>
</template>
