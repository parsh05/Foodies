package in.parshant.foodiesapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartResponse {
    private String id;
    private String userId;
    private Map<String, Integer> items = new HashMap<>();
//    public CartResponse(String userId, Map<String, Integer> items) {
//        this.userId = userId;
//        this.items = items;
//    }
}
