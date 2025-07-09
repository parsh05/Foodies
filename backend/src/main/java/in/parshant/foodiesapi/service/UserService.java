package in.parshant.foodiesapi.service;


import in.parshant.foodiesapi.io.UserRequest;
import in.parshant.foodiesapi.io.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);
    String findByUserId();
}
