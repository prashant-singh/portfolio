<template>
  <div class="opacity-100 mt-10">
    <h2 class="my-6 text-2xl text-gray-700 font-bold capitalize dark:text-blue-200">
      Experience
    </h2>
    <ol class="relative border-l border-gray-100 dark:border-gray-700">
      <div v-for="(item, index) in workData">
        <li class="mb-10 ml-6">
          <span
            class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="w-4 h-4 text-blue-600 dark:text-blue-400" src="~assets/devicon/work.svg" />
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {{ item.position }} <span
              class="bg-yellow-300 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-white-800 ml-3">@{{ item.companyName }}</span>
            <div v-if="item.endDate == 'present'">
              <span
                class="bg-green-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Currently</span>
            </div>
          </h3>
          <time class="block mb-2 text-sm font-bold leading-none text-grey-400 dark:text-grey-500">
            {{ item.startDate }}-{{ item.endDate }}
          </time>
          <p class="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
            {{ item.details }}
          </p>
        </li>
      </div>



      <!-- 
      <li class="mb-10 ml-6">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/academy.svg"
          />
        </span>
        <h3
          class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Software Engineer at FANG
          <span
            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >Currently</span
          >
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >2018-Currently</time
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
      </li>
      <li class="mb-10 ml-6">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/academy.svg"
          />
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Freelancer
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >Released on December 7th, 2021</time
        >
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li class="mb-10 ml-6">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/academy.svg"
          />
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          2013 - Dhaka University
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >2013 - 2018
        </time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Studied "BSC in Computer Science and Engineering" in Dhaka University.
        </p>
      </li>
      <li class="mb-10 ml-6">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <img
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            src="~assets/icon/home.svg"
          />
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Born in 1996, July 27
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >Dhaka Bangladesh</time
        >
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          I couldn't remember any productive work in that time. But
        </p>
      </li> -->
    </ol>
  </div>
</template>

<script>
// import { timeline } from 'console';
import workData from '../data/work';
export default {
  data() {
    return {
      workData: workData,
    };
  },
};
</script>
