type PaddedNumber = `${'0' | ''}${number}`
type ISODate = `${number}-${PaddedNumber}-${PaddedNumber}`
type ISOTime = `${PaddedNumber}:${PaddedNumber}:${PaddedNumber}`
export type ISOStringRaw = `${ISODate}T${ISOTime}Z`
export type ISOString = ISOStringRaw & string

export interface LaunchRecord {
  'flight_number': number,
  'mission_name': string,
  'mission_id': string[],
  'launch_year': string,
  'launch_date_unix': number,
  'launch_date_utc': ISOString,
  'launch_date_local': ISOString,
  'is_tentative': boolean,
  'tentative_max_precision': 'hour' | 'minute' | 'second',
  'tbd': boolean,
  'launch_window': number,
  'rocket': {
    'rocket_id': string,
    'rocket_name': string,
    'rocket_type': string,
    'first_stage': {
      'cores': [
        {
          'core_serial': string,
          'flight': 1,
          'block': null,
          'gridfins': boolean,
          'legs': boolean,
          'reused': boolean,
          'land_success': null,
          'landing_intent': boolean,
          'landing_type': null,
          'landing_vehicle': null
        }
      ]
    },
    'second_stage': {
      'block': 1,
      'payloads': [
        {
          'payload_id': string,
          'norad_id': [],
          'reused': boolean,
          'customers': string[],
          'nationality': string,
          'manufacturer': string,
          'payload_type': string,
          'payload_mass_kg': number,
          'payload_mass_lbs': number,
          'orbit': string,
          'orbit_params': {
            'reference_system': string,
            'regime': string,
            'longitude': null,
            'semi_major_axis_km': null,
            'eccentricity': null,
            'periapsis_km': null,
            'apoapsis_km': null,
            'inclination_deg': null,
            'period_min': null,
            'lifespan_years': null,
            'epoch': null,
            'mean_motion': null,
            'raan': null,
            'arg_of_pericenter': null,
            'mean_anomaly': null
          }
        }
      ]
    },
    'fairings': {
      'reused': boolean,
      'recovery_attempt': boolean,
      'recovered': boolean,
      'ship': boolean
    }
  },
  'ships': [],
  'telemetry': {
    'flight_club': null
  },
  'launch_site': {
    'site_id': string,
    'site_name': string,
    'site_name_long': string
  },
  'launch_success': boolean,
  'launch_failure_details': {
    'time': number,
    'altitude': number,
    'reason': string
  },
  'links': {
    'mission_patch': string,
    'mission_patch_small': string,
    'reddit_campaign': null,
    'reddit_launch': null,
    'reddit_recovery': null,
    'reddit_media': null,
    'presskit': null,
    'article_link': string,
    'wikipedia': string,
    'video_link': string,
    'youtube_id': string,
    'flickr_images': []
  },
  'details': string,
  'upcoming': boolean,
  'static_fire_date_utc': null,
  'static_fire_date_unix': null,
  'timeline': {
    'webcast_liftoff': number
  },
  'crew': null
}
