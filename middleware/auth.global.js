const LOGIN_ROUTE = "/login";

export default defineNuxtRouteMiddleware((to, from) => {
  const authCookie = useCookie("token");

  const isLoggedIn = !!authCookie?.value;
  //   console.log({ isLoggedIn: isLoggedIn.value, to: to.path });
  if (to?.path !== LOGIN_ROUTE && !isLoggedIn) {
    return navigateTo(LOGIN_ROUTE);
  } else if (to?.path === LOGIN_ROUTE && isLoggedIn) {
    authCookie.value = null;
    return navigateTo("/");
  }
});
