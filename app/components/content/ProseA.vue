<script setup lang="ts">
import { getExternalLinkAttrs } from '~/composables/useExternalLink'

const props = defineProps<{
  href?: string
}>()

const externalAttrs = computed(() => getExternalLinkAttrs(props.href))
const linkAttrs = computed(() => ({
  ...externalAttrs.value,
  ...useAttrs(),
}))
</script>

<template>
  <a :href="href" v-bind="linkAttrs">
    <slot />
  </a>
</template>
