<script setup lang="ts">
import { marketingConfig } from "../config/marketing";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="container z-40 bg-background">
      <div class="flex h-20 items-center justify-between py-6">
        <AppNav :items="marketingConfig.mainNav" />
        <nav>login</nav>
      </div>
    </header>
    <main class="flex-1">内容区域</main>
    <AppFooter />
  </div>
</template>
