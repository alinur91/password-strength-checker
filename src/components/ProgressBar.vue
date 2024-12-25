<template>
  <div class="relative w-full h-3 bg-gray-200 rounded">
    <div
      :class="[passwordData.progressColor]"
      :style="{ width: `${(passwordData.count / 3) * 100}%` }"
      class="h-full transition-all rounded"
    ></div>
    <p class="text-white text-md">{{ passwordData.strength }} Password</p>
  </div>
</template>

<script setup lang="ts">
import { usePassword } from '@/composables/usePassword'
import { computed } from 'vue'

const { containsNumber, containsUpperAndLowerCase } = usePassword()

const passwordData = computed(() => {
  const obj = { count: 1, progressColor: 'bg-red-500', strength: 'Weak' }
  if (containsNumber.value) {
    obj.count++
    obj.progressColor = 'bg-orange-500'
    obj.strength = 'Medium'
  }
  if (containsUpperAndLowerCase.value) {
    obj.count++
    obj.progressColor = 'bg-green-500'
    obj.strength = 'Strong'
  }
  return obj
})
</script>

<style>
progress::-webkit-progress-bar {
  background-color: white; /* Tailwind's bg-stone-800 */
}
progress::-webkit-progress-value {
  transition: width 0.3s ease;
}
</style>
