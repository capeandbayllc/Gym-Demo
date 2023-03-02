export const LOGIN_ROUTE = "/login";
export const KIOSK_ROUTE = "/kiosk";

export default defineNuxtRouteMiddleware((to, from) => {
  const authCookie = useCookie("auth");
  const isLoggedIn = authCookie && authCookie.value?.id;
  const path = to?.path;

  //   console.log({ isLoggedIn: isLoggedIn.value, to: to.path });
  if (path !== LOGIN_ROUTE && !isLoggedIn) {
    return navigateTo(LOGIN_ROUTE);
  }

  if (path === LOGIN_ROUTE && isLoggedIn) {
    authCookie.value = null;
    return navigateTo("/");
  }

  if (path !== KIOSK_ROUTE && isLoggedIn && authCookie.value.isKioskUser) {
    return navigateTo(KIOSK_ROUTE);
  }
});
