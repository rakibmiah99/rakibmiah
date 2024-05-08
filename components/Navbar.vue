<script setup lang="ts">
const route = useRoute()

const links = [
  [{
    label: 'rakibmiah.xyz',
    icon: 'i-heroicons-code-bracket-square',
    to: '/'
  }],
   [
    {
        label: 'Projects',
        avatar: {
            src: 'https://cdn-icons-png.flaticon.com/256/1087/1087815.png'
        },
        to: '/project'
    },
    {
        label: 'CV',
        avatar:{
            src: 'https://cdn-icons-png.freepik.com/256/9050/9050420.png'
        },
        to: '/cv'
    },
    {
        label: 'GitHub',
        avatar: {
            src: 'https://miro.medium.com/v2/resize:fit:256/1*UuSt1q01HUHlsYtq352few.png'
        },
        to: 'https://github.com/rakibmiah99/'
    }
    ,
    {
        label: 'LinkedIn',
        avatar: {
            src: 'https://cdn-icons-png.flaticon.com/256/4494/4494497.png'
        },
        to: 'https://linkedin.com/in/rakibmiah99'
    }
]
];



const ui = {
  wrapper: 'relative w-full flex items-center justify-between',
  container: 'flex items-center min-w-0',
  inner: 'min-w-0',
  base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
  before: 'before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
  after: 'after:absolute  after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
  active: 'text-gray-900 dark:text-white after:bg-primary-0 dark:after:bg-primary-0 after:rounded-full',
  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
  label: 'truncate relative',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 relative',
    active: 'text-gray-700 dark:text-gray-200',
    inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '2xs',
  },
  badge: {
    base: 'flex-shrink-0 ml-auto relative rounded',
    color: 'gray',
    variant: 'solid',
    size: 'xs',
  },
}
</script>

<template>
    
  <UHorizontalNavigation :ui="ui" :links="links" class="border-b border-gray-200 dark:border-gray-800 bg-opacity-0" />
  <UIcon name="i-simple-icons-github"/>
</template>

