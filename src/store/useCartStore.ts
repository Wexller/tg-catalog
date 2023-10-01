import { defineStore } from 'pinia';
import { computed, ComputedRef, Ref, ref } from 'vue';
import { Product } from 'src/mock/products.ts';

interface UseCartStore {
  productsCart: Ref<Product[]>;
  addToCard: (p: Product) => void;
  subTotal: ComputedRef<number>;
  isCartEmpty: ComputedRef<boolean>;
  hasProducts: ComputedRef<boolean>;
  removeFromCard: (p: Product) => void;
  toggleCartItem: (p: Product) => void;
  hasProduct: (p: Product) => boolean;
}

export const useCartStore = defineStore<string, UseCartStore>('cart', () => {
  const productsCart = ref<Product[]>([]);

  const isCartEmpty = computed(() => productsCart.value.length === 0);
  const hasCartItems = computed(() => !isCartEmpty.value);

  const subTotal = computed(() =>
    productsCart.value.reduce((acc, { price }) => acc + price, 0),
  );

  const hasProduct = (product: Product) => productsCart.value.includes(product);

  const addToCard = (product: Product) => productsCart.value.push(product);
  const removeFromCard = (product: Product) => {
    const idx = productsCart.value.indexOf(product);
    if (idx > -1) productsCart.value.splice(idx, 1);
  };

  const toggleCartItem = (product: Product) =>
    hasProduct(product) ? removeFromCard(product) : addToCard(product);

  return {
    productsCart,
    subTotal,
    isCartEmpty,
    hasProducts: hasCartItems,
    addToCard,
    removeFromCard,
    toggleCartItem,
    hasProduct,
  };
});
