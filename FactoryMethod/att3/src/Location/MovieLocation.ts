import Location from "./location";
import Movie from "./item/Movie";
import IItem from "./item/interface/IItem";

export default class MovieLocation extends Location{
    protected createitem(): IItem {
        return new Movie;
    }
}