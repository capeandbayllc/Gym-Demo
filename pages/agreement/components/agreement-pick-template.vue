<template>
    <div class="text-center text-xl mt-4 font-semibold mb-6">
        Select a file to continue
    </div>
    <input class="hidden" type="file" accept="application/pdf" @change="selectFile" ref="templateInputFile" id="templateInputFile">

</template>
<script>
export default defineComponent({
    setup(props, { emit }) {

        const selectFile = (e)=>{
            console.log(e)
            emit("next")
        };

        const open = () => {
            document.getElementById("templateInputFile").value = "";
            document.getElementById("templateInputFile").click();
        };

        return { open, selectFile };
    },
    emits: ["next"],
});
</script>
