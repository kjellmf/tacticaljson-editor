import * as L from 'leaflet';
import turf from 'turf';
import {getCoord} from 'turf-invariant';
// import centerOfMass from '@turf/center-of-mass';

let myStyle = {
  color: "#000000",
  weight: 2,
  lineCap: "butt",
  fill: false,
};

export default function asLeaflet() {
  let layer = L.geoJSON(null, {style: myStyle});
  let features = this.data.features;
  let tooltipOptions = {direction: "center", permanent: true, className: "label"};
  for (let feature of features) {
    // add converted geometry
    layer.addData(feature);
    if (feature.graphic.annotations) {
      let annotation = feature.graphic.annotations[0];
      // let divIcon = L.divIcon({html: `<div>${annotation.properties.text}</div>`, className: "label", iconSize: null});
      // console.log(feature);
      let text = annotation.properties.text.trim();
      if (feature.geometry.type == "LineString" || feature.geometry.type == "MultiLineString") {
        layer.addLayer(L.circleMarker(annotation.geometry.coordinates.reverse(), {radius: 0}).bindTooltip(text, tooltipOptions));
      } else if (feature.graphic.geometry.type == "Polygon") {
        // milgraphics does not provide coordinates for the annotation. Use turf to find the center of the polygon.
        let pos = getCoord(turf.center(turf.feature(feature.graphic.geometry))).reverse();
        layer.addLayer(L.circleMarker(pos, {radius: 0}).bindTooltip(`<pre>${text}</pre>`, tooltipOptions));
      }
    }
  }
  return layer;
}


