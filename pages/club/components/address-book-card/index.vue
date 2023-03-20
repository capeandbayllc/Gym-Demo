<template>
    <club-card :title-icon="AddressBookIcon" title="Address Book">
        <address-list :columns="columns" :categorizedItems="categorizedItems" />
    </club-card>
</template>
<script setup>
    import { AddressBookIcon } from '~~/components/icons'
    import ClubCard from '../club-card.vue';
    import AddressList from './address-list.vue'
    onMounted(async () => {
        await nextTick();
        window.dispatchEvent(new Event('resize'))
    });
    const columns = [
        {
            label: 'Name',
            class: 'text-secondary text-center w-[25%]'
        },
        {
            label: 'Company',
            class: 'text-secondary text-center w-[25%]',
        },
        {
            label: 'Phone',
            class: 'text-secondary text-center w-[20%]'
        },
        {
            label: 'Email',
            class: 'text-secondary text-center w-[20%]'
        },
        {
            label: ' ',
            class: 'text-secondary text-center w-[10%]'
        }
    ];

    const categorizedItems = [
        {
            name: 'contacts',
            label: 'Contacts',
            items: [
                {
                    id:1,
                    avatar: '',
                    name: 'Aya Buchanan',
                    company: 'Company Name',
                    phone: '(123) 456-7890',
                    email: 'email@email.com',
                    photo: '/images/profile/employees_2.jpg'
                },
                {
                    id:2,
                    avatar: '',
                    name: 'Sty Stance',
                    company: 'Company Name',
                    phone: '(123) 456-7890',
                    email: 'email@email.com',
                    photo: '/images/profile/employees_0.jpg'
                },
                {
                    id:3,
                    avatar: '',
                    name: 'Henny Owens',
                    company: 'Company Name',
                    phone: '(123) 456-7890',
                    email: 'email@email.com',
                    photo: '/images/profile/employees_1.jpg'
                },
            ],
        },
        {
            name: 'vendors',
            label: 'Vendors',
            items: [
                {
                    id:4,
                    avatar: '',
                    name: 'Butch Fierce',
                    company: 'Company Name',
                    phone: '(123) 456-7890',
                    email: 'email@email.com',
                    photo: '/images/profile/employees_0.jpg'
                },
                {
                    id:5,
                    avatar: '',
                    name: 'Max Smallson',
                    company: 'Company Name',
                    phone: '(123) 456-7890',
                    email: 'email@email.com',
                    photo: '/images/profile/employees_2.jpg'
                },
            ],
        },
        {
            name: 'facilities',
            label: 'Facilities',
            items: [
                {
                    id:6,
                    avatar: '',
                    name: 'Steve Maxum',
                    company: 'Company Name',
                    phone: '(123) 456-7890',
                    email: 'email@email.com',
                    photo: '/images/profile/employees_1.jpg'
                },
            ],
        }
    ];
</script>