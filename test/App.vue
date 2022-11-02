<script setup lang="ts">
import { ref } from "vue";

const value = ref<string>("");
</script>

<template>
  <input v-model="value" v-mask="'+90### ### ## ##'" />
</template>
