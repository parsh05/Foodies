package in.parshant.foodiesapi.repository;

import in.parshant.foodiesapi.entity.FoodEntity;
import in.parshant.foodiesapi.io.FoodRequest;
import in.parshant.foodiesapi.io.FoodResponse;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public interface FoodRepository extends MongoRepository<FoodEntity, String> {

//    String uploadFile(MultipartFile file);

}
