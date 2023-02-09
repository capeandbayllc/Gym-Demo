<template>
  <div v-on:keyup.enter="handleClickLogin">
    <div class="card w-96 bg-base-300 bg-opacity-50 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <div class="form-control w-full max-w-xs">
          <!-- <label class="label">
            <span class="label-text">Username</span>
          </label> -->
          <input
            type="text"
            placeholder="Username"
            class="input input-bordered w-full max-w-xs"
            v-model="username"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <!-- <label class="label">
            <span class="label-text">Username</span>
          </label> -->
          <input
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
            v-model="password"
          />
        </div>
        <div class="alert alert-error shadow-lg" v-if="error">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{{ error }}</span>
          </div>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="handleClickLogin">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref();
const password = ref();
const error = ref();

const authCookie = useCookie("token");

// TODO: would be better as a server route, but we would have to use Amplifiy adapter
const handleClickLogin = () => {
  error.value = null;
  const authenticated = authenticate(username.value, password.value);
  if (!authenticated) {
    error.value = "Credentials not found.";
    return;
  }
  authCookie.value = true;
  navigateTo("/");
};

const authenticate = (username, password) => {
  console.log({ username, password, hashed: btoa(password) });
  return username === "admin" && btoa(password) === "SGVsbG8xMjMh";
};
</script>

<style scoped lang="postcss">
input {
  @apply bg-base-300;
}
</style>
