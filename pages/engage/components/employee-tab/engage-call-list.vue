<template>
    <div class="engage-call-list-container">
        <!-- <h3>Call List</h3> -->
        <h3 class="text-secondary">Upgrades:</h3>

        <data-table
            :columns="columns"
            :data="itemsWithMembershipTypes"
            :row-component="CallListItem"
            :stickyHeader="true"
            class="h-80 text-xs overflow-y-auto"
        />

    </div>
</template>
<style scoped>
.engage-call-list-container {
    @apply col-span-2 pb-1 -md:col-span-3;
    h3 {
        @apply text-base;
    }
}
</style>
<script setup>
import CallListItem from './call-list-item.vue';
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";

const query = gql`
  query AllMembers {
    members(first: 100) {
      data {
        id
        first_name
        last_name
        email
        primary_phone
        locations {
          id
          name
        }
        member_type {
            name
        }
        homeLocation {
          name
        }
        updated_at
        created_at
      }
      paginatorInfo {
        count
        perPage
        total
      }
    }
  }
`;



const { result } = useQuery(query);

const members = ref([]);
watch(result, (nv, ov) => {
  if (result) {
    members.value = result._value.members.data;
  }
})

const membershipTypes = ['platinum', 'gold', 'silver', 'bronze'];

const getRandomMembershipType = () => {
  return membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
};

const itemsWithMembershipTypes = members.value.map(item => ({
  ...item,
  membership_type: getRandomMembershipType()
}));


console.log('test');
console.log(members);

const columns = ["","Name", "Location", "", "Membership Type", "Date Upgraded", ""]
const data = [{
    id: 1,
    avatar: "/account.png",
    name: "Sandy Lin",
    location: "Tru Fit Ware Road",
    date: "1.02.22",
    membership: "silver",
    call_type: 'Call'
}, {
    id: 2,
    avatar: "/account.png",
    name: "Randy Portis",
    location: "Tru Fit San Angelo",
    date: "1.02.22",
    membership: "gold",
    call_type: 'Email'
}, {
    id: 3,
    avatar: "/account.png",
    name: "Tess Hightower",
    location: "Tru Fit University",
    date: "1.02.22",
    membership: "platinum",
    call_type: 'In-Club'
}, {
    id: 4,
    avatar: "/account.png",
    name: "Sandy Lin",
    location: "Tru Fit Lubbock 4Th Street",
    date: "1.02.22",
    membership: "bronze",
    call_type: 'Call'
}, {
    id: 5,
    avatar: "/account.png",
    name: "Randy Portis",
    location: "Tru Fit Sa Bandera",
    date: "1.02.22",
    membership: "platinum",
    call_type: 'Email'
}, {
    id: 6,
    avatar: "/account.png",
    name: "Tess Hightower",
    location: "Tru Fit Harlingen",
    date: "1.02.22",
    membership: "gold",
    call_type: 'In-Club'
}]
</script>
