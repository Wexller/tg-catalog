<script setup lang="ts">
import { useWebAppViewport } from 'vue-tg';
import { onMounted } from 'vue';

const { expand } = useWebAppViewport();
onMounted(() => {
  expand();
});
</script>

<template>
  <RouterView />
</template>
