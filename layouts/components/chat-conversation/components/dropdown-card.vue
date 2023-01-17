<template>
    <div class="border border-base-content dropdown-card absolute right-0 top-0 p-4 z-10 bg-base-300" @click="close">
        <div class="border border-secondary bg-neutral p-3 text-center">
            <div class="rounded-full bg-base-content p-0.5 inline-block">
                <img src="/chat-conversation/mona.png" class="h-16"/>
            </div>
            <div class="text-lg">Mona Parksdale</div>
            <div class="text-secondary text-sm">1+ (123) 456-7890 </div>
        </div>
        <div class="media-list-section">
            <div class="grid grid-cols-2 mt-2">
                <div class="font-semibold">
                    Media
                </div>
                <div class="text-secondary text-end font-semibold">
                    See All
                </div>
            </div>
            <div class="flex justify-between gap-3 mt-2">
                <img src="/chat-conversation/media.svg" class="h-20"/>
                <img src="/chat-conversation/media.svg" class="h-20"/>
                <img src="/chat-conversation/media.svg" class="h-20"/>
            </div>
        </div>
        <div class="files-list-section">
            <div class="grid grid-cols-2 mt-2">
                <div class="font-semibold">
                    Files
                </div>
                <div class="text-secondary text-end font-semibold">
                    See All
                </div>
            </div>
            <div class="mt-2 ">
                <div class="mt-2" v-for="( item, index ) in filesType" :key="index">
                    <div class="inline-block files-container p-2">
                        <img :src="item.image"/>
                    </div>
                    <div class="inline-block align-top ml-2">
                        <div class="text-sm">{{ item.name }}</div>
                        <div class="text-secondary text-xs">{{ item.size }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.files-container {
    background-color: #6c6c6c;
}
.dropdown-card{
    height: 536px;
    overflow: auto;
}
</style>
<script setup>
const filesType = [
    {
        name: 'Document_Name.docx',
        image: '/chat-conversation/document.svg',
        size: '1.2 MB'
    },
    {
        name: 'Image_Name.png',
        image: '/chat-conversation/image.svg',
        size: '1 MB'
    },
    {
        name: 'Audio_Name.mp3',
        image: '/chat-conversation/audio.svg',
        size: '2 MB'
    },
    {
        name: 'Movie_Name.mp4',
        image: '/chat-conversation/movie.svg',
        size: '1.8 MB'
    },
];
const emit = defineEmits(["close-dropdown"])
const close = () => {
    emit('close-dropdown');
}
</script>