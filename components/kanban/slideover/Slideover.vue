<script lang="ts" setup>
import { useDealSlideStore } from "~/store/deal-slide.store";

const store = useDealSlideStore();

const isLocalOpen = computed({
  get: () => store.isOpen,
  set: (value) => {
    store.isOpen = value;
  },
});
</script>

<template>
  <div>
    <USlideover v-model="isLocalOpen">
      <UCard
        class="flex flex-col flex-1 overflow-y-auto bg-gray-800 text-foreground rounded-none "
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-border',
        }"
      >
        <template #header>
          <KanbanSlideoverTop />
        </template>

        <KanbanSlideoverComments />
      </UCard>
    </USlideover>
  </div>
</template>
