import type { Theme, SxProps } from '@mui/material/styles';

import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import {
  Map,
  MapPopup,
  MapMarker,
  MAP_STYLES,
  MapControls,
  useMapMarkerPopup,
} from 'src/components/map';

// ----------------------------------------------------------------------

type ContactMapProps = {
  sx?: SxProps<Theme>;
  contacts: {
    label: string;
    latlng: number[];
  }[];
};

export function ContactMap({ contacts, sx }: ContactMapProps) {
  const { t } = useTranslation();

  const { colorScheme } = useColorScheme();

  const lightMode = colorScheme === 'light';

  const { selectedItem, onOpenPopup, onClosePopup } =
    useMapMarkerPopup<ContactMapProps['contacts'][0]>();

  return (
    <Map
      mapStyle={lightMode ? MAP_STYLES.light : MAP_STYLES.dark}
      initialViewState={{ latitude: 12, longitude: 42, zoom: 2 }}
      sx={[{ borderRadius: 1.5, height: { xs: 320, md: 560 } }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <MapControls hideGeolocate />

      {contacts.map((location, index) => (
        <MapMarker
          key={`marker-${index}`}
          latitude={location.latlng[0]}
          longitude={location.latlng[1]}
          onClick={(event) => onOpenPopup(event, location)}
        />
      ))}

      {selectedItem && (
        <MapPopup
          longitude={selectedItem.latlng[1]}
          latitude={selectedItem.latlng[0]}
          onClose={onClosePopup}
        >
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            {t('contact.map.title')}
          </Typography>

          <Typography component="div" variant="caption">
            {t(`contact.hero.addresses.${selectedItem.label}`)}
          </Typography>

          <Typography
            component="div"
            variant="caption"
            sx={{ mt: 1, display: 'flex', alignItems: 'center' }}
          >
            <Iconify icon="solar:phone-bold" width={14} sx={{ mr: 0.5 }} />
            {t(`contact.hero.phoneNumbers.${selectedItem.label}`)}
          </Typography>
        </MapPopup>
      )}
    </Map>
  );
}
