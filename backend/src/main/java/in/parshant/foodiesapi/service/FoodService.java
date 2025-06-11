package in.parshant.foodiesapi.service;

import in.parshant.foodiesapi.io.FoodRequest;
import in.parshant.foodiesapi.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {
    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> readFoods();
    FoodResponse readFood(String id);

    boolean deleteFile(String filename);
    void deleteFood(String id);
}
