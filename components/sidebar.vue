<template>
    <div class="w-64 bg-gray-900 text-gray-200 h-screen p-4 flex flex-col">
      <div class="flex items-center justify-between mb-6">
        <span class="text-xl font-semibold">Logo</span>
        <button class="text-gray-400 hover:text-gray-200">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <nav class="flex-1">
        <ul class="space-y-4">
          <li class="flex items-center space-x-2">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="fas fa-box"></i>
            <span>Products</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="fas fa-user-friends"></i>
            <span>Customers</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="fas fa-store"></i>
            <span>Shop</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="fas fa-chart-line"></i>
            <span>Income</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="fas fa-bullhorn"></i>
            <span>Promote</span>
          </li>
        </ul>
      </nav>
      <div class="mt-6">
        <button class="flex items-center space-x-2 w-full text-left">
          <i class="fas fa-question-circle"></i>
          <span>Help & Getting Started</span>
        </button>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-gray-400 text-sm">Light</span>
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only">
          <div class="toggle-bg bg-gray-600 border-2 border-gray-600 h-6 w-10 rounded-full flex items-center p-1">
            <div class="toggle-dot bg-white h-4 w-4 rounded-full shadow-md transform"></div>
          </div>
          <span class="ml-2 text-gray-400 text-sm">Dark</span>
        </label>
      </div>
    </div>
  </template>
  
  <script setup>
  // Sidebar logic if needed
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  