<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="{
        'bg-[#F8FAFC]': item.isOpen,
        'rounded-xl': item.isOpen,
        'border-none': item.isOpen,
      }"
      class="flex flex-col max-w-[90vw] md:w-[620px] border-b border-[#E2E8F0] p-5 mb-3 gap-3 cursor-pointer"
    >
      <div
        @click="() => itemOpen(index)"
        class="font-bold text-left flex justify-between items-center min-w-full"
      >
        {{ item.label }}
        <span v-if="!item.isOpen"
          ><Icon name="material-symbols:keyboard-arrow-down-rounded" size="2em"
        /></span>
        <span v-else>
          <Icon name="material-symbols:keyboard-arrow-up-rounded" size="2em" />
        </span>
      </div>

      <p
        :class="{ hidden: !item.isOpen }"
        class="text-[#64748B] select-none cursor-default"
      >
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
let items = ref([
  {
    label: "What is Wopebozin?",
    isOpen: false,
    content:
      "Wopeboozin is a platform that connects fans with their favorite content creators, allowing fans to access exclusive premium content and creators to monetize their work.",
  },
  {
    label: "How do I sign up for Wopeboozin?",
    isOpen: false,
    content:
      "Fans can sign up using their phone number, while creators can also sign up using their phone numbers and complete KYC (Know Your Customer) verification with valid identification documents.",
  },
  {
    label: "Is my personal information safe on Wopeboozin?",
    isOpen: false,
    content:
      "Fans can sign up using their phone number, while creators' can also sign up using their phone numbers and complete KYC (Know Your Customer) verification with valid identification documents.",
  },
  {
    label: "How do I subscribe to my favorite creators premium content?",
    isOpen: false,
    content:
      "Once youve signed up, you can explore creators' profiles and subscribe to their premium content by following their instructions on their pages.",
  },
  {
    label: "How much can I make as a Wopebozin Creator",
    isOpen: false,
    content:
      "The total you can earn on Wopebozin is unlimited, you’re totally in control. With Wopebozin you take home 80% of your earnings.",
  },
]);

function itemOpen(index) {
  items.value[index].isOpen = !items.value[index].isOpen;
}
</script>
