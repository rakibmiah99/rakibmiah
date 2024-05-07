<template>
    <div class="py-12">
        <!-- <UDivider/> -->
        <!-- <h1 class="text-3xl font-bold text-center my-3">Projects</h1> -->
        <!-- <UDivider/> -->
        <div class="flex flex-wrap mt-4">
           <div class="p-2 basis-1/3">
                <UCard class="relative">
                    <UBadge class="absolute top-[-2px] left-[-25px] px-3 uppercase rotate-[-45deg]" color="black" variant="outline">Project</UBadge>
                    <div class="space-y-3">
                        <h2 class="text-3xl text-center font-bold">NuxtJs + Laravel</h2>
                        <p class="line-clamp-5">As a web developer, providing a qualitative web-application with a flexible architecture, structured JSON/XML with a flawless API connectivity interface, well-constructed code following the OOPs concept and a seamless development cycle are my standards.</p>
                        <div class="space-x-2 flex justify-center">
                            <UButton color="black">View All</UButton>
                        </div>
                    </div>
                </UCard>
           </div>

           <div class="p-2 basis-1/3">
                <UCard class="relative">
                    <UBadge class="absolute top-[-2px] left-[-25px] px-3 uppercase rotate-[-45deg]" color="black" variant="outline">Project</UBadge>
                    <div class="space-y-3">
                        <h2 class="text-3xl text-center font-bold">Jquery + Laravel</h2>
                        <p class="line-clamp-5">As a web developer, providing a qualitative web-application with a flexible architecture, structured JSON/XML with a flawless API connectivity interface, well-constructed code following the OOPs concept and a seamless development cycle are my standards.</p>
                        <div class="space-x-2 flex justify-center">
                            <UButton color="black">View All</UButton>
                        </div>
                    </div>
                </UCard>
           </div>

           <div class="p-2 basis-1/3">
                <UCard class="relative">
                    <UBadge class="absolute top-[-2px] left-[-25px] px-3 uppercase rotate-[-45deg]" color="black" variant="outline">Project</UBadge>
                    <div class="space-y-3">
                        <h2 class="text-3xl text-center font-bold">Laravel REST API</h2>
                        <p class="line-clamp-5">As a web developer, providing a qualitative web-application with a flexible architecture, structured JSON/XML with a flawless API connectivity interface, well-constructed code following the OOPs concept and a seamless development cycle are my standards.</p>
                        <div class="space-x-2 flex justify-center">
                            <UButton color="black">View All</UButton>
                        </div>
                    </div>
                </UCard>
           </div>
            
        </div>
    </div>
</template>

<script>
    const ui = {
        base: '',
        background: 'bg-white dark:bg-gray-900',
        divide: 'divide-y divide-gray-200 dark:divide-gray-800',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
        rounded: 'rounded-lg',
        shadow: 'shadow',
        body: {
            base: '',
            background: '',
            padding: 'px-2 py-2 sm:p-2',
        },
        header: {
            base: '',
            background: '',
            padding: 'px-2 py-2 sm:px-2',
        },
        footer: {
            base: '',
            background: '',
            padding: 'px-2 py-2 sm:px-2',
        },
        };
</script>