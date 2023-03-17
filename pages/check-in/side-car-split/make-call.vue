<template>
    <div class="flex space-x-3">
        <simple-card title="Make a Call" class="rounded-xl">
       <div class="bg-gradient-to-t from-[#18203A] to-[#11609E] p-6 w-[550px]">
            <div class="bg-black p-4 border-[1px] border-[#008AE0] rounded-xl">
                
                <Body  />
                <Footer @close="$emit('close')" @callNow="$emit('callNow')" @saveNow="$emit('saveNow')"/>
                
            </div>
       </div>
    </simple-card>
    <simple-card title="Notes" class="rounded-xl">
       <div class="bg-gradient-to-t from-[#18203A] to-[#11609E] p-6 w-[550px]">
            <div class="bg-black p-4 border-[1px] border-[#008AE0] rounded-xl">
                <div class="border-[1px] border-white p-4 rounded-lg">
                    <div class="flex justify-between">
                        <div>one</div>
                        <div>two</div>
                        <div>three</div>
                    </div>
                </div>
            </div>
       </div>
    </simple-card>
    </div>
    
</template>

<style scoped>

</style>

<script setup>
import Body from './components/body.vue';
import Footer from './components/footer.vue';
</script>