<template>
  <div class="flex flex-row gap-4 self-start py-8">
    <button @click="addRandomUser" class="btn">Add Random User</button>
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
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location ID</th>
        </tr>
      </thead>
      <tbody>
        <!-- for loop (rows) -->
        <tr v-for="user in result?.users.data">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <font-awesome-icon icon="user" size="lg" />
                </div>
              </div>
            </div>
          </td>
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user?.homeLocation?.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { UserFactory } from "../api/data/users/UserFactory";

library.add(faUser);
// const query = gql`
//   query GetUser($id: ID!) {
//     user(id: $id) {
//       id
//       first_name
//       last_name
//     }
//   }
// `;
const query = gql`
  query AllUsers {
    users(first: 100) {
      data {
        id
        first_name
        last_name
        email
        phone
        homeLocation {
          id
        }
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

watch(() => {
    console.log('data')
    console.log(result)

})


const mutation = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      first_name
      last_name
    }
  }
`;

/**
 * uses the UserFactory to create a random user
 * since the User is created via a mutation,
 * and we specify that the "AllUsers" query should
 * be refetched after the mutation is complete, the UI
 * will automatically update due to Apollo.
 */
const addRandomUser = async () => {
  const variables = new UserFactory().build("test");
  const { mutate } = useMutation(mutation, {
    refetchQueries: [
      { query },
      "AllUsers", // The name of the Query to refetch. AllUsers is the name of the query in the query object above
    ],
  });

  const response = await mutate({ input: variables });
  console.log({ response, UserFactory: new UserFactory().build() });
};
</script>
