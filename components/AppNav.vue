<script setup lang="ts">
import type { MainNavItem } from "@/types";

defineProps({
  items: Array<MainNavItem>
});

const showMobileMenu = ref(false);
</script>

<template>
  <div class="flex gap-6 md:gap-10">
    <nuxt-link to="/" class="hidden items-center space-x-2 md:flex">
      <!--<Icons.logo />-->logo
      <span class="hidden font-bold sm:inline-block"> fievre </span>
    </nuxt-link>
    <nav v-if="items && items.length" class="hidden gap-6 md:flex">
      <nuxt-link
        v-for="(item, index) in items"
        :key="index"
        :to="item.disabled ? '#' : item.href"
        :class="[
          'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
          'text-foreground',
          item.disabled ? 'cursor-not-allowed opacity-80' : ''
        ]"
      >
        {{ item.title }}
      </nuxt-link>
    </nav>
    <button class="flex items-center space-x-2 md:hidden" @click="showMobileMenu = !showMobileMenu">
      <!--<Icons.logo v-if="!showMobileMenu" />
      <Icons.close v-else />-->
      <span class="font-bold">Menu</span>
    </button>
    <MobileNav v-if="showMobileMenu && items" :items="items">
      <slot></slot>
    </MobileNav>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
