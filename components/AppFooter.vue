<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <footer>
    <div class="container flex flex-row items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div class="flex h-5 items-center space-x-4 text-sm text-zinc-500">
        <span>{{ t("home.footer.copyright") }}</span>
        <UiSeparator orientation="vertical" />
        <span>{{ t("home.footer.made") }}</span>
      </div>
    </div>
  </footer>
</template>
