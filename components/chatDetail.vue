<template>
  <div
    v-if="selectedCustomer"
    class="bg-gray-900 text-gray-200 p-4 flex flex-col space-y-4"
  >
    <div class="flex items-center space-x-4">
      <img
        :src="selectedCustomer.avatar"
        :alt="selectedCustomer.name"
        class="w-16 h-16 rounded-full"
      />
      <div class="flex flex-col">
        <span class="text-xl font-semibold">{{ selectedCustomer.name }}</span>
        <span class="text-sm text-gray-400">{{
          selectedCustomer.username
        }}</span>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto bg-gray-800 p-4 rounded-md">
      <ul>
        <li
          v-for="message in messages"
          :key="message.timestamp"
          :class="{ 'text-right': message.sender === 'me' }"
        >
          <p
            :class="{
              'bg-blue-500 text-white': message.sender === 'me',
              'bg-gray-700 text-gray-200': message.sender !== 'me',
            }"
            class="inline-block rounded-lg px-4 py-2 my-2"
          >
            {{ message.text }}
          </p>
          <span class="block text-xs text-gray-400">{{
            formatTime(message.timestamp)
          }}</span>
        </li>
      </ul>
    </div>
    <div class="mt-4 flex">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type a message"
        class="flex-1 p-2 bg-gray-700 text-gray-200 rounded-md outline-none"
        @keyup.enter="sendMessage"
      />
      <button
        @click="sendMessage"
        class="ml-2 bg-blue-500 p-2 rounded-md text-white"
      >
        Send
      </button>
    </div>
  </div>
  <div
    v-else
    class="bg-gray-900 text-gray-200 p-4 flex flex-col items-center justify-center h-full"
  >
    <span>Select a customer to view details</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();
const selectedCustomer = computed(() => chatStore.selectedCustomer);
const messages = computed(
  () => chatStore.messages[selectedCustomer.value.id] || []
);
const newMessage = ref("");
const sendMessage = async () => {
  if (newMessage.value.trim()) {
    const message = {
      text: newMessage.value,
      timestamp: new Date().toISOString(),
      sender: "me",
    };
    await chatStore.addMessage(selectedCustomer.value.id, message);
    newMessage.value = "";
  }
};
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
</script>
