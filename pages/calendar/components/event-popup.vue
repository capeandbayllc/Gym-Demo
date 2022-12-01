<template>
    <div id="event-popup" class="w-fit m-auto bg-white text-slate-600 p-4 rounded ">
        <div class="flex items-center"> 
            <span>All Day</span> <Switch v-model="allDay"></Switch>
            <select-box :items="options" label="Outcome" class="w-36 mx-2 text-white ml-auto"/>
        </div>
        <div>
            <div class="flex mb-4">
                <div class="mr-6 inline-block flex items-center"><calendar-icon class="inline-block mr-2"/><span>2022-01-19</span></div>
                <div class="mr-6 inline-block flex items-center"><clock-icon class="inline-block text-white mr-1"/> <span> 10:20 am</span></div>
            </div>
            <div class="flex">
                <div class="mr-6 inline-block flex items-center"><calendar-icon class="inline-block mr-2"/><span>2022-01-19</span></div>
                <div class="mr-6 inline-block flex items-center"><clock-icon class="inline-block text-white mr-1"/> <span> 10:20 am</span></div>
            </div>
        </div>
        <div class="tags-wrap">
            <label class="mr-2">Tags </label>
            <input type="radio" name="tags" value="1" class="bg-blue-600">
            <input type="radio" name="tags" value="2" class="bg-green-600">
            <input type="radio" name="tags" value="3" class="bg-amber-600">
            <input type="radio" name="tags" value="4" class="bg-yellow-400">
            <input type="radio" name="tags" value="5" class="bg-red-600">
            <span class="right">&#10003;</span>
        </div>
        <div class="guests-wrap">
            <label class="mr-2">Guests</label>
            <span><img class="w-10 pr-2" src="/account.png" /></span>
            <span><img class="w-10 pr-2" src="/account.png" /></span>
            <span><img class="w-10 pr-2" src="/account.png" /></span>
            <span><img class="w-10 pr-2" src="/account.png" /></span>
            <span><img class="w-10 pr-2" src="/account.png" /></span>
            <button class="ml-5" @click="addMember"><add-icon class="h-6 w-6 inline-block" /></button>
        </div>
        <div class="flex items-center">
            <label class="mr-2">Discription </label> <input type="text" class="bg-gray-100 w-full h-7"/>
        </div>
        <div class="flex items-center">
            <label class="mr-2">Notes </label> <input type="text" class="bg-gray-100 w-full h-7"/>
        </div>
        <div>
            <label class="align-middle mr-2">Attachments </label> <button><add-icon class="h-6 w-6 inline-block" @click="uploadPopup = !uploadPopup"/></button>
            <div v-if="uploadPopup" class="absolute flex items-center p-4 bg-white w-fit shadow-xl">
                <div v-if="!isSearchOpen" class="w-full relative flex items-center">
                    <span class="w-[120px]">Drag or find your attachment</span>
                    <span class="w-[80px] text-center">
                        <add-icon class="h-8 w-fit inline-block" />
                        <p>Upload</p>
                    </span>
                    <input type="file" class="opacity-0 absolute w-full h-full top-0 left-0 z-20 cursor-pointer">
                </div>
                <div v-if="isSearchOpen" class="w-full self-stretch mr-2">
                    <input type="text" class="w-full h-full p-2 border">
                </div>
                <div class="w-[60px] text-center cursor-pointer" @click="isSearchOpen = !isSearchOpen">
                    <search-icon class="margin-auto h-8 w-fit inline-block"></search-icon>
                    <span>Search</span>
                </div>
            </div>
        </div>
        <div class="contact-wrap">
            <label>Contact</label>
            <Button outline>+ Email</Button>
            <Button outline>+ Text</Button>
            <Button outline>+ Phone</Button>
        </div>
        <div class="action-wrap">
            <Button ghost>Edit</Button>
            <Button ghost>Delete</Button>
            <Button ghost>Cancel</Button>
            <Button secondary>+ New</Button>
        </div>
    </div>
    <daisy-modal class="w-fit" id="memberModal" ref="memberModal">
        <member-popup></member-popup>
    </daisy-modal>
</template>
<script setup>
import { AddIcon, CalendarIcon, ClockIcon, SearchIcon } from '~~/components/icons';
import MemberPopup from "./member-popup.vue";

const options = [{label:"Option 1", value:"option1"},{label:"Option 2", value:"option2"}]
const allDay = ref(false);
const memberModal = ref(null);

const addMember = () =>{
    memberModal.value.open();
}
const uploadPopup = ref(false);
const isSearchOpen = ref(false);
</script>
<style scoped>
#event-popup{
    @apply text-sm;
    & > div {
        @apply mb-4
    }
    .contact-wrap{
        Button{
            @apply text-xs capitalize leading-none border-2 px-2 border-secondary min-h-0 h-8 mx-1 inline-block text-secondary hover:bg-secondary hover:text-white;
        }
    }
    .action-wrap{
        @apply flex justify-end;
        Button{
            @apply text-xs capitalize leading-none px-2 w-auto min-h-0 h-8 text-gray-500 inline-block hover:text-secondary;

            &:last-child{
                @apply text-white;
            }
        }
    }
    .tags-wrap {
        @apply flex relative;
        input[type="radio"] {
            @apply appearance-none rounded-full h-6 w-6 mr-1 cursor-pointer;
            &:checked ~ .right {
                @apply inline-block;
            }
            &:checked:nth-of-type(1) ~ .right{
                left: 42px;
            }
            &:checked:nth-of-type(2) ~ .right{
                left: 70px;
            }
            &:checked:nth-of-type(3) ~ .right{
                left: 98px;
            }
            &:checked:nth-of-type(4) ~ .right{
                left: 126px;
            }
            &:checked:nth-of-type(5) ~ .right{
                left: 154px;
            }
        }
        .right {
            @apply hidden absolute h-4 w-4 top-[2px] left-0 text-white
        }
    }
    .guests-wrap {
        @apply flex items-center;
        span{
            @apply w-3;
            img {
                @apply min-w-[35px] block;
            }
        }
    }
}
</style>