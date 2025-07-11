package in.parshant.foodiesapi.io;

import lombok.Builder;
import lombok.Data;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

@Data
@Builder
public class OrderItem {
    private String foodId;
    private int quantity;
    private double price;
    private String category;
    private String imageUrl;
    private String description;
    private String name;
}
