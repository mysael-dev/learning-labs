interface GeoLocation {
    latitude: number,
    longitude: number
}

const getLocation = (location: GeoLocation): string => {
    return `${location.latitude} - ${location.longitude}`
}

// const myLocation : GeoLocation = {
//     latitude: 12312,
//     longitude: 321,
// }

// getLocation(myLocation)

class locationMap implements GeoLocation {
    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number){
        this.latitude = latitude
        this.longitude = longitude
    }

    getLocation(): string{
        return 'any';
    }
}

getLocation(new locationMap(123, 321))

