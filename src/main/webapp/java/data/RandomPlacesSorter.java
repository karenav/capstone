import java.util.List;
import java.util.Collections;

class RandomPlacesSorter implements PlacesSorter {

    public static List<Place> sortPlaces(List<Place> places) {
        Collections.shuffle(places);
        return places;
    }
}