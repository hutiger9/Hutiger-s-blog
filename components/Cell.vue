<script setup lang="ts">
import { formattedDate } from '@/utils'
import ViewCount from '@/components/ViewCount.vue'

const props = defineProps(['article'])
</script>

<template>
  <NuxtLink :to="`/p${props.article._path}`">
    <li
      :title="props.article.title"
      class="hover list-none mb-6 mt-2 flex flex-col md:(gap-2 flex-row items-center justify-between)"
    >
      <div class="flex items-center gap-2">
        <span class="text-lg">
          {{ props.article.title }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><!-- Icon from Clarity by VMware - https://github.com/vmware/clarity-assets/blob/master/LICENSE --><path fill="currentColor" d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43" class="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83m0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89" class="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
        <!-- <span id="vercount_value_page_pv">...</span> -->
        <!-- <ViewCount :slug="props.article._path" /> -->
      </div>
      <span class="text-sm op-70">
        {{ formattedDate(props.article.date) }}
      </span>
    </li>
  </NuxtLink>
</template>