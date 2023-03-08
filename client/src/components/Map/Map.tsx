import { Box } from '@mui/system';
import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from 'src/styles/mapStyle';

type Props = {
  x: number;
  y: number;
};

const Map: FC<Props> = ({ x, y }) => {
  return (
    <Box sx={styles.mapForm}>
      <MapContainer center={[x, y]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[51.505, -0.5]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[51.505, -1]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
