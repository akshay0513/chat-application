<template>
  <div class="bg-gray-800 text-gray-200 p-4 flex flex-col space-y-4">
    <div class="flex-1 overflow-y-auto">
      <ul class="space-y-4">
        <li
          v-for="customer in customers"
          :key="customer.id"
          @click="selectCustomer(customer)"
          class="flex items-center space-x-4 bg-gray-700 p-2 rounded-md cursor-pointer hover:bg-gray-600"
        >
          <img
            :src="customer.avatar"
            :alt="customer.name"
            class="w-10 h-10 rounded-full"
          />
          <div class="flex flex-col">
            <span class="font-semibold">{{ customer.name }}</span>
            <span class="text-sm text-gray-400">{{ customer.username }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();
const selectCustomer = (customer) => {
  chatStore.fetchCustomerDetails(customer.id);
};
const customers = computed(() => chatStore.customers);
onMounted(() => {
  chatStore.fetchCustomers();
});
</script>

