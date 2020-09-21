import java.util.List;
 
interface PlacesSorter {
  /** 
   * Sorts the given list according to predefined behaviour.
   * @param unordered: the list of places that we want to order.
   * @return the sorted list of places.
   */
  public static List<Place> sortPlaces(List<Place> unordered);
}