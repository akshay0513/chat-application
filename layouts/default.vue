<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex-grow flex">
      <CustomerList class="w-1/3 border-r border-gray-700" />
      <ChatDetail class="w-2/3" />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/sidebar.vue";
import CustomerList from "@/components/customerList.vue";
import ChatDetail from "@/components/chatDetail.vue";
</script>
