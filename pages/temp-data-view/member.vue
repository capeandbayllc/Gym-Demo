<template>
  <div class="flex flex-row gap-4 self-start py-8">
    <button @click="addRandomMember" class="btn">Add Random Member</button>
  </div>

  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- for loop (rows) -->
        <tr v-for="member in result?.members.data">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <font-awesome-icon icon="user" size="lg" />
                </div>
              </div>
            </div>
          </td>
          <td>{{ member.first_name }}</td>
          <td>{{ member.last_name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.phone }}</td>
          <td>{{ member.status ? "Active" : "In Active" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { MemberFactory } from "../../api/data/members/MemberFactory";

library.add(faUser); 

const query = gql`
  query AllMembers {
    members(first: 100) {
      data {
        id
        first_name
        last_name
        email
        phone
        status
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
console.log("memberResult", result)
const mutation = gql`
  mutation CreateMember($input: MemberInput!) {
    createMember(input: $input) {
      id
      first_name
      last_name
    }
  }
`;

/**
 * uses the MemberFactory to create a random Member
 * since the Member is created via a mutation,
 * and we specify that the "AllMembers" query should
 * be refetched after the mutation is complete, the UI
 * will automatically update due to Apollo.
 */
const addRandomMember = async () => {
  const variables = new MemberFactory().build("test");
  const { mutate } = useMutation(mutation, {
    refetchQueries: [
      { query },
      "AllMembers", 
    ],
  });

  const response = await mutate({ input: variables });
  console.log("member", { response, MemberFactory: new MemberFactory().build() });
};
</script>
