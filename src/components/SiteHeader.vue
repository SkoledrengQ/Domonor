<script setup lang="ts">
import { ref } from "vue";

interface NavItem {
  label: string;
  href: string;
}

defineProps<{
  nav: NavItem[];
  language: {
    label: string;
    href: string;
  };
  contactLabel: string;
  logoSources: string[];
}>();

const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <a class="header-logo" href="#top" aria-label="Domonor home" @click="close">
      <img v-for="(logoSrc, index) in logoSources" :key="logoSrc" :src="logoSrc" :alt="index === 0 ? 'Domonor' : ''" />
    </a>

    <button
      class="menu-button"
      type="button"
      :aria-expanded="isOpen"
      aria-label="Toggle navigation"
      @click="isOpen = !isOpen"
    >
      <span></span>
      <span></span>
    </button>

    <nav class="header-nav" :class="{ 'is-open': isOpen }" aria-label="Primary navigation">
      <a v-for="item in nav" :key="item.href" :href="item.href" @click="close">{{ item.label }}</a>
      <a class="language-link" :href="language.href">{{ language.label }}</a>
      <a class="header-cta" href="#contact" @click="close">{{ contactLabel }}</a>
    </nav>
  </header>
</template>
