package in.parshant.foodiesapi.service;


import in.parshant.foodiesapi.io.CartRequest;
import in.parshant.foodiesapi.io.CartResponse;

public interface CartService {
    CartResponse addToCart(CartRequest request);
    CartResponse getCart();
    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}
