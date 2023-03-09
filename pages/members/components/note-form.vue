<template>
        <p class="text-center mt-1">December 10, 2022</p>
        <div>
            <input type="text" placeholder="New Note Name" class="w-full rounded-t-md px-3 text-gray-800 font-medium text-lg py-3">
            <textarea name="" id="" class="w-full h-[545px] rounded-b-md text-black p-3 text-gray-800" placeholder="Paragraph Notes"></textarea>
        </div>
        <div class=" md:flex justify-between  m-2 justify-items-center space-x-14">
            <div class="flex justify-between mb-5 md:flex text-sm  space-x-3 items-center">
                <button class="border-2 border-white p-1 px-2 rounded-md"> Creatre on Alert</button>
                <div>
                    make Complete
                    <input type="checkbox" class="toggle toggle-info align-middle mr-2" /> 
                </div>
            </div>
            <div class="flex justify-between md:flex space-x-3">
                <button
                    type="button"
                    class="btn w-max rounded btn-sm font-medium"
                    error
                    outline
                    @click="$emit('deleteNote')"
                >
                    Delete
                </button>
                
                <button
                    class="btn w-max bg-[#0074C8] border-success rounded text-base-content btn-sm font-medium"
                    @click="$emit('saveNote')"
                >
                    Save
                </button>
            </div>
        </div>
</template>