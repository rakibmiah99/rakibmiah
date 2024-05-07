<template>
    <div class="mt-5">
        <UDivider/>
        <h1 class="text-3xl font-bold text-center my-3">Skills</h1>
        <UDivider/>
        <div class="flex flex-wrap mt-7">
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
            <div class="p-2">
                <img class="h-[50px] w-[150px] object-cover" :src="image" />
            </div>
        </div>
    </div>
</template>
<script setup>
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png';
</script>