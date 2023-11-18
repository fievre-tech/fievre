<script setup lang="ts">
import type { NavItem } from "@/types";
import { siteConfig } from "~/config";


const { t, locale } = useI18n();

const navs: NavItem[] = [
  {
    title: t("home.nav.feature"),
    href: `/${locale.value}`
  },
  {
    title: t("home.nav.about"),
    href: `/${locale.value}/about`
  }
];

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <div class="flex gap-6 md:gap-10">
    <NuxtLink href="/" class="hidden items-center space-x-2 md:flex">
      <Icon name="i-mynaui:click" size="24" />
      <span class="hidden font-bold sm:inline-block"> {{ siteConfig.name }} </span>
    </NuxtLink>
    <nav v-if="navs" class="hidden gap-6 md:flex">
      <NuxtLink
        v-for="(item, index) in navs"
        :key="index"
        :href="item.disabled ? '#' : item.href"
        :class="[
          'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
          'text-foreground/60',
          item.disabled ? 'cursor-not-allowed opacity-80' : ''
        ]"
      >
        {{ item.title }}
      </NuxtLink>

      <!--<NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</NuxtLink>-->
    </nav>

    <button class="flex items-center space-x-2 md:hidden" @click="toggleMobileMenu">
      <template v-if="showMobileMenu">
        <Icons name="i-carbon:close-outline" />
      </template>
      <template v-else>
        <Icons name="i-mynaui:click" />
      </template>
      <span class="font-bold">Menu</span>
    </button>
  </div>
</template>

<style scoped></style>
