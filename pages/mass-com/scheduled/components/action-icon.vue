<template>
    <font-awesome-icon :icon="icon" size="lg" />
</template>

<style scoped>
    
</style>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faMessage, faPhoneVolume, faListCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faMessage, faPhoneVolume, faListCheck);

const props = defineProps({
    action: String
})

const icon = computed(() => {
    let icon;

    switch(props.action) {
        case 'email':
            icon = ['fas', 'envelope'];
            break;
        case 'message':
            icon = 'message';
            break;
        case 'phone':
            icon = 'phone-volume';
            break;
        case 'task':
            icon = 'list-check';
            break;
        default:
            icon = 'envelop';
    }

  return icon;
});

</script>
