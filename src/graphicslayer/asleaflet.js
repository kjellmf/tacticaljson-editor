import * as L from 'leaflet';

export default function asLeaflet() {
  console.log("As leaflet");
  let layer = L.geoJSON();
  let features = this.data.features;
  for (let feature of features) {
    layer.addData(feature);
  }
  return layer;
}


