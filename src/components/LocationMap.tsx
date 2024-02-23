import { useEffect, useRef, useMemo } from "react";
import { Loader  } from "@googlemaps/js-api-loader";

type Prop = {
    readonly address: string;
    
}


function LocationMap({address}: Prop) {

const mapRef = useRef(null);



  useEffect(() => {
    const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
        version: "weekly",
    });

    console.log(loader)

    loader.load().then((google) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: address },
        (results, status) => {
            if (status === "OK") {
                if (mapRef.current) {
                    const map = new google.maps.Map(mapRef.current, {
                        center: results && results[0]?.geometry.location,
                        zoom: 8,
                    });
                    const marker = new google.maps.Marker({
                        map: map,
                        position: results && results[0]?.geometry.location,
                    });
                } else {
                    console.error("mapRef.current is null.");
                }
            } else {
                console.error(`Geocode was not successful for the following reason: ${status}`);
            }
        }
      );
    });
  }, [address]);
  return (
    <div style={{ height: "400px" }} ref={mapRef} />
  )
}

export default LocationMap