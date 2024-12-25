import { computed, ref } from 'vue'

const password = ref('')

const characterLength = 8

// Computed properties with dependencies
const isLengthValueValid = computed(() => password.value.length >= characterLength)
const containsNumber = computed(() => isLengthValueValid.value && /\d/.test(password.value))
const containsSpecialCharacters = computed(
  () =>
    isLengthValueValid.value &&
    containsNumber.value &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password.value),
)
const containsUpperAndLowerCase = computed(
  () =>
    isLengthValueValid.value &&
    containsNumber.value &&
    containsSpecialCharacters.value &&
    /[A-Z]/.test(password.value) &&
    /[a-z]/.test(password.value),
)

// Validation array
const passwordRequirementsData = computed(() => [
  {
    text: `At least ${characterLength} characters`,
    isValid: isLengthValueValid.value,
  },
  {
    text: 'Contains numbers',
    isValid: containsNumber.value, // Dependent on length
  },
  {
    text: 'Contains special characters',
    isValid: containsSpecialCharacters.value, // Dependent on length and numbers
  },
  {
    text: 'Contains uppercase & lowercase',
    isValid: containsUpperAndLowerCase.value, // Dependent on all previous checks
  },
])

// Exported function
export function usePassword() {
  return {
    password,
    passwordRequirementsData,
    containsNumber,
    containsUpperAndLowerCase,
  }
}
