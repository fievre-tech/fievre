<script setup lang="ts">
defineProps({
  heading: String,
  text: String
});
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="grid gap-1">
      <h1 class="font-heading text-3xl md:text-4xl">{{ heading }}</h1>
      <p v-if="text" p class="text-lg text-muted-foreground">{{ text }}</p>
    </div>
    <slot />
  </div>
</template>
