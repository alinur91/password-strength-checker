<template>
  <ul>
    <li
      :class="[
        'text-lg flex items-center',
        requirement.isValid ? 'text-green-400' : 'text-gray-400',
      ]"
      :key="requirement.text"
      v-for="requirement in passwordRequirementsData"
    >
      <component :is="requirement.isValid ? Check : Circle" class="h-3" />
      <span>{{ requirement.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { usePassword } from '@/composables/usePassword'
import { Circle, Check } from 'lucide-vue-next'

const { passwordRequirementsData } = usePassword()
</script>
