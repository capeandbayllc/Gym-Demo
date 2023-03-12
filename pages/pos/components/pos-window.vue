<template>
    <div class="pos-window-container">
        <div class="pos-window">
            <PosWindowHeader
                @person-selected="selectPurchaser"
                :showPosAdminModal="showPosAdminModal"
            />
            <div
                class="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between"
            >
                <PosProductsPane
                    :cart="cart"
                    :inventory="inventory"
                    :inventoryCategories="inventoryCategories"
                    @add-product-item-to-cart="addProductToCart"
                />
                <PosInvoicePane
                    :cart="cart"
                    :purchaser="purchaser"
                    @remove-product-item-from-cart="removeProductFromCart"
                    @increment-product-quantity="incrementProductQuantity"
                    @decrement-product-quantity="decrementProductQuantity"
                    @cancel-sale="cancelSale"
                    @make-pos-invoice-payment="showPaymentApproveModal"
                    @add-payment-method="showPaymentMethodsModal"
                />
            </div>
        </div>
    </div>
    <PosFooter
        @add-product-modal="showAddProductModal"
        @add-category-modal="showAddCategoryModal"
        @remove-product-modal="showRemoveProductModal"
        @remove-category-modal="showRemoveCategoryModal"
    />
    <daisy-modal :overlay="true" id="addProductModal" ref="addProductModal">
        <PosAddProduct
            :inventoryCategories="inventoryCategories"
            @add-product-to-list="addProductToList"
            @cancel-product-add="closeAllModals"
        />
    </daisy-modal>
    <daisy-modal :overlay="true" id="addCategoryModal" ref="addCategoryModal">
        <PosAddCateory
            :inventoryCategories="inventoryCategories"
            :inventory="inventory"
            @add-category-to-list="addCategoryToList"
            @cancel-category-add="closeAllModals"
        />
    </daisy-modal>
    <daisy-modal
        :overlay="true"
        id="removeProductModal"
        ref="removeProductModal"
    >
        <PosProductRemove
            :inventoryCategories="inventoryCategories"
            @remove-products-from-list="removeProductsFromList"
            @cancel-remove-product="closeAllModals"
        />
    </daisy-modal>
    <daisy-modal
        :overlay="true"
        id="removeCategoryModal"
        ref="removeCategoryModal"
    >
        <PosCategoryRemove
            :inventoryCategories="inventoryCategories"
            @cancel-remove-product="closeAllModals"
            @remove-categories-from-list="removeCategoriesFromList"
        />
    </daisy-modal>
    <daisy-modal
        :overlay="true"
        id="paymentApproveModal"
        ref="paymentApproveModal"
    >
        <PosPaymentApprove :amount="calculateCartTotal()" />
    </daisy-modal>
    <daisy-modal
        :overlay="true"
        id="paymentMethodsModal"
        ref="paymentMethodsModal"
    >
        <PosPaymentMethodAdd @cancel-payment-method-add="closeAllModals" />
    </daisy-modal>
    <daisy-modal :overlay="true" id="posAdminModal" ref="posAdminModal">
        <PosAdmin />
    </daisy-modal>
</template>

<script setup>
import PosWindowHeader from "./pos-window-header.vue";
import PosProductsPane from "./pos-products-pane.vue";
import PosInvoicePane from "./pos-invoice-pane.vue";
import PosFooter from "./pos-footer.vue";
import PosAddProduct from "./pos-add-product.vue";
import PosAddCateory from "./pos-add-category.vue";
import PosPaymentApprove from "./pos-payment-approve.vue";
import PosPaymentMethodAdd from "./pos-payment-method-add.vue";
import PosProductRemove from "./pos-product-remove.vue";
import PosCategoryRemove from "./pos-category-remove.vue";
import PosAdmin from "./pos-admin.vue";
import {
    inventoryCategories as staticInventoryCategories,
    inventory as initInv,
} from "../helpers/pos-items";
import { cartTotal } from "../helpers/pos-cart-functions";

const props = defineProps({
    member: {
        type: Object,
        default: null,
    },
});

const cart = ref([]);
const inventory = ref(initInv);
const purchaser = ref(props.member);
const addProductModal = ref(null);
const addCategoryModal = ref(null);
const removeProductModal = ref(null);
const removeCategoryModal = ref(null);
const paymentApproveModal = ref(null);
const paymentMethodsModal = ref(null);
const posAdminModal = ref(null);
const inventoryCategories = ref(staticInventoryCategories);

const addProductToCart = (item) => {
    cart.value.push({
        quantity: 1,
        ...item,
    });
};

const removeProductFromCart = (item) => {
    cart.value.splice(cart.value.indexOf(item), 1);
};

const incrementProductQuantity = (item) => {
    if (item.available > item.quantity) {
        item.quantity += 1;
    }
};

const decrementProductQuantity = (item) => {
    item.quantity -= 1;

    if (item.quantity <= 0) removeProductFromCart(item);
};

const cancelSale = () => {
    cart.value = [];
    purchaser.value = null;
};

const selectPurchaser = (data) => {
    purchaser.value = data;
};

const showAddProductModal = () => {
    addProductModal.value.open();
};
const showAddCategoryModal = () => {
    addCategoryModal.value.open();
};
const showRemoveProductModal = () => {
    removeProductModal.value.open();
};
const showRemoveCategoryModal = () => {
    removeCategoryModal.value.open();
};
const showPaymentApproveModal = () => {
    paymentApproveModal.value.open();
};

const showPaymentMethodsModal = () => {
    paymentMethodsModal.value.open();
};

const showPosAdminModal = () => {
    posAdminModal.value.open();
};

const addProductToList = (product) => {
    inventory.value.push({
        ...product,
        tax: ((product.tax * product.price) / 100).toFixed(2),
    });
    addProductModal.value.close();
};

const addCategoryToList = (category, subcategory) => {
    const existing = inventoryCategories.value.find(
        (inventoryCategory) => inventoryCategory.id === category.id
    );
    if (existing !== undefined) {
        inventoryCategories.value[
            inventoryCategories.value.indexOf(existing)
        ].subcategories.push(subcategory);
    } else {
        inventoryCategories.value.push({
            id: category.id,
            title: category.title,
            subcategories: [subcategory],
        });
    }

    subcategory.items.forEach((item) => {
        item.category = category.title;
        item.subcategory = subcategory.title;
    });

    closeCategoryModal();
};

const removeProductsFromList = (products) => {
    for (let i in products) {
        const product = products[i];
        inventoryCategories.value[product.catIndex].subcategories.splice(
            product.subIndex,
            1
        );
    }
};

const removeCategoriesFromList = (categories) => {
    for (let i in categories) {
        const cat = inventoryCategories.value.find(
            (inv) => inv.id === categories[i]
        );

        if (cat) {
            inventoryCategories.value.splice(
                inventoryCategories.value.indexOf(cat),
                1
            );
        }
    }
};

const closeAllModals = () => {
    addProductModal.value.close();
    addCategoryModal.value.close();
    removeProductModal.value.close();
    removeCategoryModal.value.close();
    paymentApproveModal.value.close();
    paymentMethodsModal.value.close();
};

const calculateCartTotal = () => cartTotal(cart.value).toFixed(2);
</script>

<style scoped>
.pos-window-container {
    @apply bg-[#191919] rounded-t-2xl h-[85vh] lg:h-[81vh] mx-auto w-full;
}
.pos-window {
    @apply border-2 p-5 rounded-2xl h-[85vh] lg:h-[81vh] w-full mx-auto bg-gradient-to-b from-[#2f72c4]/[0.4] to-[#191919] flex flex-col gap-5;
}
.pos-style-transition {
    @apply transition-all duration-300 ease-linear;
}
</style>
