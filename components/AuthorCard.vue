<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <nuxt-img :src="siteMetadata.author_image" loading="lazy" alt="me"
        class="shadow-xl md:h-40 md:w-40 xs:hidden h-32 w-32 lg:w-60 lg:h-60 rounded-full mx-auto" />
        <!-- shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full mx-auto -->
      <div class="mb-2 mx-7 mt-4 justify-center items-center">
        <h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">
          {{ siteMetadata.author }}
        </h1>
        <div class="md:text-lg text-gray-600 dark:text-blue-100">
          {{ siteMetadata.position }}
        </div>
        
        <div class="md:block">
          <div class="my-2 text-gray-600 flex dark:text-blue-100">
            <Mail/>
            <a class="ml-1" :href="`mailto:${siteMetadata.email}`"> {{ siteMetadata.email }}</a>
          </div>
          <div class="my-2 text-gray-600 flex dark:text-blue-100">
            <Glob />
            <p class="ml-1" >{{ siteMetadata.location }}</p>
          </div>
          <div class="my-2 text-gray-600 flex dark:text-blue-100">
            <Github />
            <a class="ml-1"  :href="siteMetadata.github"> {{ siteMetadata.githubUser }}</a>
          </div>
        </div>
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
