<template>
    <div class="profile-options-container">
        <div class="profile-options">
            <profile-option-item
                v-for="item in options"
                :key="item.key"
                :model-value="item.key !== selectedOption"
                @udpate:modelValue="handleSelect(key, $event)"
                :label="item.label"
            />
        </div>    
    </div>
</template>
<style scoped>
.profile-options-container {
    @apply flex flex-col space-y-7;
    .profile-options {
        @apply flex flex-col space-y-10 border border-secondary rounded w-48 p-5;
    }
}
</style>
<script setup>
import ProfileOptionItem from './profile-option-item.vue'

const options = [{
    label: "POS",
    key: "pos",
    selected: false
}, {
    label: "Calendar",
    key: "calendar",
    selected: false
}, {
    label: "Notifications",
    key: "notification",
    selected: false
}, {
    label: "Guest Pass",
    key: "guest-pass",
    selected: false
}, {
    label: "Note Pad",
    key: "note-pad",
    selected: false
}]

const selectedOption = ref(null)

const handleSelect = (key, value) => {
    console.log(key, value)
    if (value) {
        selectedOption.value = key
    } else {
        selectedOption.value = null
    }
} 
</script>
