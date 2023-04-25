import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = (props) => {
  const name="kalanki"
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [1, 1],
  });
  useEffect(() => {
    var marker1 = L.marker([27.6893035, 85.2901670], { icon: DefaultIcon }).addTo(
      // var marker1 = L.marker([0, 0], { icon: DefaultIcon }).addTo(
      map
    );
    map.on("click", function (e) {
      // L.marker([27.7701, 85.3293]).addTo(map);
      L.Routing.control({
        waypoints: [
        // L.Routing.waypoint(null,props.location),
        L.latLng( 27.6887399, 85.2890362  ),
        L.Routing.waypoint(null,props.destination),
          
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        // addWaypoints: false,
        // draggableWaypoints: false,
        // fitSelectedRoutes: true,
        // showAlternatives: true,
      })
        .on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              marker1.setLatLng([c.lat, c.lng]);
            }, 1000 * i);
          });
        })
        .addTo(map);
    });
  }, []);
  return null;
};

export default LeafletRoutingMachine;
