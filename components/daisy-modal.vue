<template>
    <teleport to="body">
        <div
            class="modal"
            :class="{
                'modal-open': isOpen,
                '!bg-black/50': transparent && !overlay,
                '!bg-black': !transparent && !overlay,
                'overlay-modal' : overlay
            }"
        >
            <div v-if="closable" class="absolute inset-0" @click="close"></div>
            <div
                class="modal-box"
                v-bind="$attrs"
            >
				<close-btn
                    class="modal-close-btn"
                    @click="close"
                    v-if="closable && showCloseButton"
				/>
                <slot :close="close" />
                <template v-if="$slots?.actions">
                    <div class="modal-action">
                        <slot name="actions"></slot>
                    </div>
                </template>
            </div>
        </div>
    </teleport>
</template>
<style scoped>
.modal {
    @apply items-center overflow-x-hidden;
    max-width: 100vw;
}
.modal-close-btn {
	@apply absolute;
	top: -40px;
	right: -52px;
}
.modal-box {
	@apply overflow-visible shadow-none p-0 min-w-fit;
}
.overlay-modal {
    background: rgb(25 25 25 / 60%);
    backdrop-filter: blur(10px) opacity(70%);
}
</style>
<script>
import {
    defineComponent,
    ref,
    watchEffect,
    onMounted,
    onBeforeUnmount,
} from "vue";
import { useLockScroll } from "vue-composable";

export default defineComponent({
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        closable: {
            type: Boolean,
            default: true,
        },
        transparent: {
            type: Boolean,
            default: true,
        },
        showCloseButton: {
            type: Boolean,
            default: true,
        },
        overlay: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { emit }) {
        const { locked, lock, unlock } = useLockScroll("body", "no-scroll");
        onMounted(() => {
            if (!props.open) {
                unlock();
            }
        }); //todo: use another package or roll pour own lock scroll. we shouldn't have to call unlock on mount

        const isOpen = ref(!!props.open);

        // const close = () => (isOpen.value = false);
        // const open = () => (isOpen.value = true);

        const close = () => {
            isOpen.value = false;
            if (locked) {
                unlock();
            }
            emit("close");
        };
        const open = () => {
            isOpen.value = true;
            emit("open");
            lock();
        };

        watchEffect(() => {
            if (props.open) {
                open();
            } else {
                close();
                emit("close");
            }
        });

        watchEffect(() => {
            if (isOpen.value === true) {
                lock();
            } else {
                unlock();
            }
        });

        onBeforeUnmount(() => {
            unlock();
        });

        return { isOpen, close, open };
    },
    emits: ["close", "open"],
});
</script>
