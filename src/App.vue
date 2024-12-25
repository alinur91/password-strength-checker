<template>
  <div class="flex items-center justify-center fixed inset-0 bg-stone-800">
    <div class="w-96">
      <h1 class="mb-5 text-center text-3xl text-white font-semibold">Password Strength Checker</h1>
      <TextInput placeholder="Enter password" class="mb-2" />
      <ProgressBar class="mb-8" />
      <PasswordRequirementsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import PasswordRequirementsList from './components/PasswordRequirementsList.vue'
import ProgressBar from './components/ProgressBar.vue'
import TextInput from './components/TextInput.vue'
</script>
