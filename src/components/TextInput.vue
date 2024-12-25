<template>
  <div class="relative">
    <input
      :type="showPassword ? 'text' : 'password'"
      :value="password"
      class="w-full text-xl font-normal focus:outline-none bg-stone-600 text-gray-200 h-11 rounded-sm placeholder:text-xl p-2 focus:border-2 focus:border-green-200"
      @input="handleInput"
    />
    <component
      @click="showPassword = !showPassword"
      :is="showPassword ? EyeOff : Eye"
      class="absolute bottom-2 right-2 cursor-pointer"
    />
  </div>
</template>

<script lang="ts" setup>
import { usePassword } from '@/composables/usePassword'
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref } from 'vue'

const { password } = usePassword()
const showPassword = ref(false)

const handleInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  password.value = target.value
}
</script>
