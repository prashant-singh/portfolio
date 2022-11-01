<template>
  <div class="md:fixed">
    <div class="grid place-items-center">
      <nuxt-img :src="siteMetadata.author_image" loading="lazy" alt="me"
        class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full" />
      <div class="mb-2 mx-7 mt-4">
        <h1 class="text-center md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">
          {{ siteMetadata.author }} YES
        </h1>
        <div class="mt-2 md:text-left text-center md:text-lg text-gray-700 dark:text-blue-100">
          {{ siteMetadata.position }}
        </div>
        <a :href="`mailto:${siteMetadata.email}`" class="text-center text-gray-700 md:hidden dark:text-blue-100">
          {{ siteMetadata.email }}
        </a>        
      </div>
    </div>

    <div class="mx-7 hidden md:block">
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Mail />
        <a :href="`mailto:${siteMetadata.email}`" class="mx-2"> {{ siteMetadata.email }}</a>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Glob />
        <p class="mx-2">{{ siteMetadata.location }}</p>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-200">
        <Github />
        <a :href="siteMetadata.github" class="mx-2"> {{ siteMetadata.githubUser }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Mail from "../assets/icon/mail.svg?inline";
import Glob from "../assets/icon/glob.svg?inline";
import Github from "../assets/icon/github_new.svg?inline";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  components: { Mail, Glob, Github },
  data: () => {
    return {
      siteMetadata: siteMetaInfo,
    };
  },
};
</script>
