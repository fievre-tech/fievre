<script setup lang="ts">
import { useTheme } from "@/composables";

interface LocaleObject {
  code: string;
  name: string;
}

const scrollTop = ref(0);
const { t, locale, locales, setLocale } = useI18n();
const { isDark, toggleTheme } = useTheme();

const availableLocales = locales.value.map((l) => l) as LocaleObject[];
const localeName = computed(() => {
  const localeObject = (locales.value as LocaleObject[]).find((l: LocaleObject) => l.code === locale.value);
  return localeObject ? localeObject.name : "";
});
const headerClass = computed(() => {
  if (scrollTop.value > 60) {
    return `fixed top-4 right-4`;
  }
});

function changeLocale(locale: string) {
  setLocale(locale);
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY;
  });
});
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
            <UiSelect @update:model-value="changeLocale">
              <UiSelectTrigger>
                <UiSelectValue :placeholder="localeName" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectGroup>
                  <UiSelectLabel>{{ t("home.nav.language") }}</UiSelectLabel>
                  <UiSelectItem v-for="l in availableLocales" :key="l.code" :value="l.code">
                    {{ l.name }}
                  </UiSelectItem>
                </UiSelectGroup>
              </UiSelectContent>
            </UiSelect>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a class="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium" target="_blank" href="https://twitter.com/xieyezi438328">{{
            t("home.content.twitter")
          }}</a>
          <h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {{ t("home.content.slogonHead") }} <s class="font-normal opacity-50">{{ t("home.content.slogonMonth") }}</s>
            {{ t("home.content.slogonDays") }}
          </h1>
          <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {{ t("home.content.intro") }}
          </p>
        </div>
      </section>

      <section class="space-y-6 mb-10">
        <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a href="#_" class="relative inline-block text-lg group">
            <span
              class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
            >
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span
                class="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
              ></span>
              <span class="relative">{{ t("home.content.start") }}</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-background rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </section>

      <section
        id="features"
        class="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        data-immersive-translate-effect="1"
        data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
      >
        <div
          class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          data-immersive-translate-effect="1"
          data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
        >
          <h2
            class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            {{ t("home.content.feature") }}
          </h2>
          <p
            class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            {{ t("home.content.technology") }}
          </p>
        </div>
        <div
          class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
          data-immersive-translate-effect="1"
          data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
        >
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            <div
              class="flex h-[180px] flex-col justify-between rounded-md p-6"
              data-immersive-translate-effect="1"
              data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path
                  fill="#ffffff"
                  d="M512 34.512L256 477.488L0 34.512h41.601L256 405.502l214.399-370.99H512zM256 135.247L196.818 34.512h-89.766L256 292.248L404.948 34.512h-89.766L256 135.247z"
                />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path
                  fill="#000000"
                  d="M512 34.512L256 477.488L0 34.512h41.601L256 405.502l214.399-370.99H512zM256 135.247L196.818 34.512h-89.766L256 292.248L404.948 34.512h-89.766L256 135.247z"
                />
              </svg>
              <div class="space-y-2" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                <h3 class="font-bold" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  Vue3
                </h3>
                <p
                  class="text-sm text-muted-foreground"
                  data-immersive-translate-effect="1"
                  data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
                >
                  Server and Client Components. Use hook.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            <div
              class="flex h-[180px] flex-col justify-between rounded-md p-6"
              data-immersive-translate-effect="1"
              data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.59 1.59 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.529 1.529 0 0 0-.217-.782L17.792 7.414a1.59 1.59 0 0 0-.591-.573a1.652 1.652 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.59 1.59 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.591 1.591 0 0 0-.591-.573a1.653 1.653 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.591 1.591 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.59 1.59 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632z"
                />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.59 1.59 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.529 1.529 0 0 0-.217-.782L17.792 7.414a1.59 1.59 0 0 0-.591-.573a1.652 1.652 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.59 1.59 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.591 1.591 0 0 0-.591-.573a1.653 1.653 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.591 1.591 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.59 1.59 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632z"
                />
              </svg>

              <div class="space-y-2" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                <h3 class="font-bold" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  Nuxt3
                </h3>
                <p class="text-sm" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            <div
              class="flex h-[180px] flex-col justify-between rounded-md p-6"
              data-immersive-translate-effect="1"
              data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M8.32 0c-3.922 0-5.882 0-7.1 1.219C0 2.438 0 4.399 0 8.32v7.36c0 3.922 0 5.882 1.219 7.101C2.438 24 4.399 24 8.32 24h7.36c3.922 0 5.882 0 7.101-1.219C24 21.562 24 19.601 24 15.68V8.32c0-3.922 0-5.882-1.219-7.101C21.562 0 19.601 0 15.68 0H8.32zm.41 7.28h7.83a.16.16 0 0 1 .16.16v7.83h-3.87v-3.71a.41.41 0 0 0-.313-.398l-.086-.012h-3.72V7.28zm-.5.25v3.87H4.553a.08.08 0 0 1-.057-.136L8.23 7.529zm.25 4.12h3.87v3.87H8.64a.16.16 0 0 1-.16-.16v-3.71zm4.12 4.12h3.87l-3.734 3.734a.08.08 0 0 1-.136-.057V15.77z"
                />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M8.32 0c-3.922 0-5.882 0-7.1 1.219C0 2.438 0 4.399 0 8.32v7.36c0 3.922 0 5.882 1.219 7.101C2.438 24 4.399 24 8.32 24h7.36c3.922 0 5.882 0 7.101-1.219C24 21.562 24 19.601 24 15.68V8.32c0-3.922 0-5.882-1.219-7.101C21.562 0 19.601 0 15.68 0H8.32zm.41 7.28h7.83a.16.16 0 0 1 .16.16v7.83h-3.87v-3.71a.41.41 0 0 0-.313-.398l-.086-.012h-3.72V7.28zm-.5.25v3.87H4.553a.08.08 0 0 1-.057-.136L8.23 7.529zm.25 4.12h3.87v3.87H8.64a.16.16 0 0 1-.16-.16v-3.71zm4.12 4.12h3.87l-3.734 3.734a.08.08 0 0 1-.136-.057V15.77z"
                />
              </svg>
              <div class="space-y-2" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                <h3 class="font-bold" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  StrAPI
                </h3>
                <p
                  class="text-sm text-muted-foreground"
                  data-immersive-translate-effect="1"
                  data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
                >
                  Manage Your Content. Anywhere.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            <div
              class="flex h-[180px] flex-col justify-between rounded-md p-6"
              data-immersive-translate-effect="1"
              data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 2 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 1.975 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24c-.916-.912-1.975-1.968-4.288-1.968z"
                />
              </svg>
              <svg v-esle xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 2 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 1.975 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24c-.916-.912-1.975-1.968-4.288-1.968z"
                />
              </svg>
              <div class="space-y-2" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                <h3 class="font-bold" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  TailwindCSS
                </h3>
                <p
                  class="text-sm text-muted-foreground"
                  data-immersive-translate-effect="1"
                  data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
                >
                  UI components built using Shadcn UI and styled with Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            <div
              class="flex h-[180px] flex-col justify-between rounded-md p-6"
              data-immersive-translate-effect="1"
              data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                  />
                  <path
                    fill="#ffffff"
                    d="M11.298 2.195a2 2 0 0 1 1.232-.056l.172.056l7 2.625a2 2 0 0 1 1.291 1.707l.007.166v5.363a9 9 0 0 1-4.709 7.91l-.266.14l-3.354 1.676a1.5 1.5 0 0 1-1.198.063l-.144-.063l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.694a2 2 0 0 1 1.145-1.808l.153-.065l7-2.625Zm-.155 5.957L9.152 11.47a1.01 1.01 0 0 0 .866 1.53h2.216l-1.091 1.819a1 1 0 0 0 1.714 1.029l1.991-3.318a1.01 1.01 0 0 0-.866-1.53h-2.216l1.091-1.819a1 1 0 0 0-1.714-1.029Z"
                  />
                </g>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                  />
                  <path
                    fill="#000000"
                    d="M11.298 2.195a2 2 0 0 1 1.232-.056l.172.056l7 2.625a2 2 0 0 1 1.291 1.707l.007.166v5.363a9 9 0 0 1-4.709 7.91l-.266.14l-3.354 1.676a1.5 1.5 0 0 1-1.198.063l-.144-.063l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.694a2 2 0 0 1 1.145-1.808l.153-.065l7-2.625Zm-.155 5.957L9.152 11.47a1.01 1.01 0 0 0 .866 1.53h2.216l-1.091 1.819a1 1 0 0 0 1.714 1.029l1.991-3.318a1.01 1.01 0 0 0-.866-1.53h-2.216l1.091-1.819a1 1 0 0 0-1.714-1.029Z"
                  />
                </g>
              </svg>
              <div class="space-y-2" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                <h3 class="font-bold" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  Authentication
                </h3>
                <p
                  class="text-sm text-muted-foreground"
                  data-immersive-translate-effect="1"
                  data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
                >
                  Authentication using NuxtAuth.js and middlewares.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            <div
              class="flex h-[180px] flex-col justify-between rounded-md p-6"
              data-immersive-translate-effect="1"
              data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                <g fill="none" stroke="#ffffff" stroke-width="4">
                  <rect width="40" height="32" x="4" y="8" rx="1.633" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4"
                  />
                  <rect width="6" height="13" x="32" y="18" stroke-linecap="round" stroke-linejoin="round" rx="3" />
                </g>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                <g fill="none" stroke="#000000" stroke-width="4">
                  <rect width="40" height="32" x="4" y="8" rx="1.633" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4"
                  />
                  <rect width="6" height="13" x="32" y="18" stroke-linecap="round" stroke-linejoin="round" rx="3" />
                </g>
              </svg>
              <div class="space-y-2" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                <h3 class="font-bold" data-immersive-translate-effect="1" data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459">
                  SEO
                </h3>
                <p
                  class="text-sm text-muted-foreground"
                  data-immersive-translate-effect="1"
                  data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
                >
                  Excellent SEO Services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mx-auto text-center md:max-w-[58rem]"
          data-immersive-translate-effect="1"
          data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
        >
          <p
            class="leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            data-immersive-translate-effect="1"
            data-immersive_translate_walked="b145443c-71de-455c-be20-ae457ea3e459"
          >
            {{ t("home.content.platform") }}
          </p>
        </div>
      </section>

      <section id="open-source" class="container py-8 md:py-12 lg:py-24">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{{ t("home.content.proudly") }}</h2>
          <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {{ t("home.content.explian") }}<br />
            <a target="_blank" rel="noreferrer" class="underline underline-offset-4" href="https://github.com/fievre-tech">our GitHub</a>
          </p>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
