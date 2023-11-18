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
        <div class="max-w-screen-xl mx-auto px-5">
          <div class="mt-16">
            <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">{{ t("about.about") }}</h1>
            <p class="text-lg mt-4 text-slate-600">{{ t("about.intro") }}</p>
          </div>
          <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
            <h2 class="font-bold text-3xl">{{ t("about.solgon") }}</h2>
            <p class="text-lg leading-relaxe">
              {{ t("about.acl") }}
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
            <div v-for="(item, index) in team" :key="index" class="group">
              <div class="w-full aspect-square">
                <img :src="item.avatar.src" alt="avator" class="w-full object-cover rounded-full" />
              </div>

              <div class="mt-4 text-center">
                <h2 class="text-lg">{{ item.name }}</h2>
                <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
