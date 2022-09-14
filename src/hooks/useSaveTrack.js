import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";

const useSaveTrack = () => {
    const {createTracks} = useContext(TrackContext);
    const {state: {name, locations}} = useContext(LocationContext);

    const saveTrack = () => {
        createTracks(name, locations);
    };

    return [saveTrack];
}

export default useSaveTrack;