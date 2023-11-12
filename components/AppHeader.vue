<script setup lang="ts">
import { marketingConfig } from "../config/marketing";
defineProps({
  heading: String,
  text: String
});
</script>

<template>
  <header className="container z-40 bg-background">
    <div className="flex h-20 items-center justify-between py-6">
      <AppNav :items="marketingConfig.mainNav" />
      <nav>
        login
        <!--<Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>-->
      </nav>
    </div>
  </header>
</template>
