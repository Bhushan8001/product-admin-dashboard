import { beforeEach, describe, expect, it } from "vitest";
import { isLocalOnlyProduct, saveAddedProduct } from "./product-storage";

function createMemoryStorage() {
  const store = new Map<string, string>();
  return {
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
    removeItem(key: string) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };
}

describe("local product persistence", () => {
  beforeEach(() => {
    const storage = createMemoryStorage();
    Object.defineProperty(globalThis, "localStorage", {
      value: storage,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(globalThis, "window", {
      value: { localStorage: storage },
      configurable: true,
      writable: true,
    });
  });

  it("treats newly added products as local-only until the API persists them", () => {
    localStorage.clear();

    saveAddedProduct({
      id: 195,
      title: "Sample product",
      description: "Local test",
      category: "laptops",
      price: 99,
      rating: 4.5,
      stock: 12,
      thumbnail: "https://example.com/thumb.jpg",
      images: ["https://example.com/thumb.jpg"],
      reviews: [],
    });

    expect(isLocalOnlyProduct(195)).toBe(true);
  });
});
