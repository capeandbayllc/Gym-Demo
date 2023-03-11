<template>
    <div class="text-center text-xl mt-4 font-semibold mb-6">
        Select a file to continue
    </div>
    <input class="hidden" type="file" accept="application/pdf" @change="selectFile" ref="fileInput" id="templateInputFile">

</template>
<script>
export default defineComponent({
    setup(props, { emit }) {

        const selectFile = (e)=>{
            console.log(e)
            emit("next")
        };

        const fileInput = ref(null);

        const openFileInput = () => {
            fileInput.value.value = "";
            fileInput.value.click();
        };

        onMounted(()=>{
            openFileInput()
        });

        return { openFileInput, selectFile, fileInput };
    },
    emits: ["next"],
});
</script>
