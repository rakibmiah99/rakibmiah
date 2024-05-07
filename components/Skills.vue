<template>
    <div class="mt-5">
        <UDivider/>
        <h1 class="text-3xl font-bold text-center my-3">Skills</h1>
        <UDivider/>
        <div class="flex flex-wrap mt-7">
            

        <div class="relative w-full overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Language/Framework
                        </th>
                        <th scope="col" class="px-6 py-3">
                            -
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Library
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Progress
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white dark:bg-gray-800" v-for="skill in skills">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{skill.name}}
                        </th>
                        <td class="px-6 py-4">
                            -
                        </td>
                        <td class="px-6 py-4">
                            <UBadge class="mr-1 mb-1" color="gray"  :label="item" v-for="item in skill.library.split(',')"/>
                        </td>
                        <td class="px-6 py-4">
                            {{ skill.progress }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>
    </div>
</template>
<script setup>
    const skills = [
        {
            name : 'HTML',
            library: '',
            progress: 10,
            description: ''
        },
        {
            name : 'CSS',
            library: 'Bootstrap, Tailwind',
            progress: 10,
            description: ''
        },
        {
            name : 'Javascript',
            library: 'Vue,  WebRTC, PeerJs, Pusher, Firebase, Socket IO, Chart Js [Jquery,Jquey Ui, Select2, Slick, OwlCarowsel, etc]',
            progress: 10,
            description: ''
        },
        
        {
            name : 'Nuxt Js',
            library: 'Nuxt Ui, FlowBite, Sidebase, i89n, Piana, monako editor, TipTap',
            progress: 10,
            description: ''
        },
        {
            name : 'PHP',
            library: '',
            progress: 10,
            description: ''
        },

        {
            name : 'Laravel',
            library: 'Spate Role Permission, Spate Transtasion, Localization, Sanctum, Passport, Pusher, FFmpeg',
            progress: 10,
            description: ''
        },

        {
            name : 'MySQL',
            library: '',
            progress: 10,
            description: ''
        },
        {
            name : 'Express',
            library: 'Soket Io, Mongose',
            progress: 10,
            description: ''
        },
    ]
</script>