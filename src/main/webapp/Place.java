import com.google.auto.value.AutoValue;

/**
 * Represents a place that food can be ordered from.
 */
@AutoValue 
public abstract class Place {
  public abstract String name();
  public abstract String website();
  public abstract String description();
  public abstract int phone();
  public abstract Long longitude();
  public abstract Long latitude();

  public static Place create(String name, String website, String description, int phone, 
        Long longitude, Long latitude) {
    return new AutoValue_Place(name, website, description, phone, longitude, latitude);
  }
}

