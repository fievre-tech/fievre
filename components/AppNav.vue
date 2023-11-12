<script setup lang="ts">
import type { MainNavItem } from "@/types";

defineProps({
  items: Array<MainNavItem>
});

const { path } = useRoute();
</script>

<template>
  <nav class="grid items-start gap-2">
    <NuxtLink v-for="(item, index) in items" :key="index" :to="item.disabled ? '/' : item.href">
      <span
        class="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        :class="{
          'bg-accent': path === item.href,
          transparent: path !== item.href,
          'cursor-not-allowed opacity-80': item.disabled
        }"
      >
        <span>{{ item.title }}</span>
      </span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
/* Your styles here */
</style>
