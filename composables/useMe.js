const auth = useCookie("auth");
const me = computed(() => auth.value);
export const useMe = () => me;
