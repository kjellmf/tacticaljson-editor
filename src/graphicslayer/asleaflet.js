import * as L from 'leaflet';
import turf from 'turf';
import {getCoord} from 'turf-invariant';

let myStyle = {
  color: "#000000",
  weight: 2,
  lineCap: "butt",
  fill: false,
};

export default function asLeaflet() {
  console.log("As leaflet");
  let layer = L.geoJSON(null, {style: myStyle});
  let features = this.data.features;
  for (let feature of features) {
    // add converted geometry
    layer.addData(feature);
    if (feature.graphic.annotations) {
      let annotation = feature.graphic.annotations[0];
      let divIcon = L.divIcon({html: annotation.properties.text, className: "my-icon"});
      console.log(feature);
      if (feature.graphic.geometry.type == "Point") {
        layer.addLayer(L.marker(annotation.geometry.coordinates.reverse(), {icon: divIcon}));
      } else if (feature.graphic.geometry.type == "Polygon") {
        layer.addLayer(L.marker(getCoord(turf.center(turf.feature(feature.graphic.geometry))).reverse(), {icon: divIcon}));
      }

    }
  }
  return layer;
}


