<script setup lang="ts">
import { useTheme } from "@/composables";

interface LocaleObject {
  code: string;
  name: string;
}

const scrollTop = ref(0);
const { t, locale, locales } = useI18n();
const { isDark, toggleTheme } = useTheme();
const switchLocalePath = useSwitchLocalePath();

const currentLocale = computed(() => locales.value.find((l: any) => l.code === locale.value)) as unknown as LocaleObject;
const availableLocales = computed(() => locales.value.map((l) => l)) as unknown as LocaleObject[];
const headerClass = computed(() => {
  if (scrollTop.value > 60) {
    return `fixed top-4 right-4`;
  }
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY;
  });
});

const derek = "https://avatars.githubusercontent.com/u/14356590?v=4";
const xieyezi = "https://avatars.githubusercontent.com/u/16821989?v=4";

const team = [
  {
    name: "derek",
    title: "Maintainer",
    avatar: {
      src: derek,
      width: 480,
      height: 560
    }
  },
  {
    name: "xieyezi",
    title: "Developer",
    avatar: {
      src: xieyezi,
      width: 580,
      height: 580
    }
  }
];
</script>

<template>
  <div class="bg-background text-foreground flex min-h-screen flex-col">
    <header class="container z-40 bg-background text-foreground">
      <div class="flex h-20 items-center justify-between py-6">
        <AppNav />
        <div class="flex flex-row items-center">
          <div>
            <Icon
              v-if="isDark"
              name="i-ic:baseline-dark-mode"
              :class="['cursor-pointer hover:cursor-pointer transform hover:scale-110 transition duration-300', headerClass]"
              size="22"
              @click="toggleTheme(false)"
            />
            <Icon
              v-else
              name="i-material-symbols:wb-sunny-outline"
              :class="['cursor-pointer hover:cursor-pointer transform hover:scale-110 transition duration-300', headerClass]"
              size="22"
              @click="toggleTheme(true)"
            />
          </div>
          <div class="ml-4">
            <UiSelect>
              <UiSelectTrigger>
                <UiSelectValue :placeholder="currentLocale.name" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectLabel>{{ t("home.nav.language") }}</UiSelectLabel>
                  <UiSelectItem v-for="l in availableLocales" :key="l.code" :value="l.code">
                    <NuxtLink :to="switchLocalePath(l.code)">{{ l.name }}</NuxtLink>
                  </UiSelectItem>
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div class="container">Example page is develop ing...</div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
