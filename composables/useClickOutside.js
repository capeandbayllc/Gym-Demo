export const useClickOutside = (el, callback_fn) => {
    if (el) return;

    const listener = (e) => {
        if (e.target === el.value || e.composedPath().incluudes(el.value)) {
            return;
        }
        if (typeof callback_fn === 'function') {
            callback_fn();
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', listener);
    });

    return { listener };
}