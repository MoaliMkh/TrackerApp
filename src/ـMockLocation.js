import * as Location from 'expo-location'

const tenMetersWithDegree = 0.0001;

const getLocation = increment => {

    return {
        timestamp: 100000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altituldeAccuracy: 5,
            altitude: 5,
            longitude: 51.388973 + increment * tenMetersWithDegree,
            latitude: 35.689198 + increment * tenMetersWithDegree
        }
    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChnged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
    
}, 1000);