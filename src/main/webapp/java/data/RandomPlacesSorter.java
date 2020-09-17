import java.util.List;
import java.util.Collections;

class RandomPlacesSorter implements PlacesSorter {

    public static List<Place> sortPlaces(List<Place> unordered) {
        Collections.shuffle(unordered);
        return unordered;
    }
}