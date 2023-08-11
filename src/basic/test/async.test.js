const fetchProduct = require("../async");

describe("Async", () => {
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
  })
  
  it("async - rejects", () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  })
});
