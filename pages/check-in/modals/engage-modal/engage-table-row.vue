<template>
    <tr class="enagage-tbl-row">
        <td class="w-36">{{typeDict[data.type]}}</td>
        <td>
            <div class="w-40">
                {{data.time}}
            </div>
        </td>
        <td>
            <div class="w-32 border-2 rounded max-w-max py-1 px-2">
                {{statusDict[data.status]}}
            </div>
        </td>
        <td class="w-40">Kevin Buchanan</td>
        <td>
            <Button secondary size="sm">View</Button>
        </td>
    </tr>
</template>

<style scoped>
.enagage-tbl-row {
    @apply h-12 bg-base-300;
    td {
        @apply p-2 px-3 border-y-2 border-secondary;
    }
    td:first-child {
        @apply border-l-2 rounded-l;
    }
    td:last-child {
        @apply border-r-2 rounded-r;
    }
}
</style>

<script setup>
const props = defineProps({
    data: Object
})

const typeDict = {
    "call": "Outgoing Call",
    "sms": "Outgoing SMS",
    "e-mail": "Outgoing E-mail"
}

const statusDict = {
    "answered": "Answered",
    "voice_mail": "Left Voicemail"
}

</script>
