<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-6xl xl:px-0">
    <!-- <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
        projects
      </h1>
    </div> -->
    <main class="relative mb-auto">
      <div class="">
        <div class="container mx-auto py-12">
          <div class="flex flex-wrap -m-4">
            <project-card
              v-for="item in projectsData"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :href="item.href"
              :imgref="item.imgSrc"
              :techs="item.techs"
            ></project-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import projectsData from "../data/projects";
import siteMetaInfo from "../data/sitemetainfo";
export default {
  data() {
    return {
      projectsData: projectsData,
      siteMetaInfo: siteMetaInfo,
    };
  },
  head: {
    title: [siteMetaInfo.author]+" | Projects",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
