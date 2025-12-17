// Dane "na sztywno" (wymóg 3.0). Temperatury zapisane w °C.

export const CITIES = [
  {
    id: 'warsaw',
    name: 'Warszawa',
    country: 'PL',
    now: {
      tempC: 2,
      condition: 'cloudy',
      cloudsPct: 78,
      windSpeedMps: 6.2,
      windDeg: 260,
      precip: { probabilityPct: 35, kind: 'rain', amountMm: 1.2 }
    },
    forecast5: [
      { dayLabel: 'Dziś', tempC: 2, condition: 'cloudy', precip: { probabilityPct: 35, kind: 'rain', amountMm: 1.2 } },
      { dayLabel: 'Jutro', tempC: 3, condition: 'rain', precip: { probabilityPct: 60, kind: 'rain', amountMm: 3.8 } },
      { dayLabel: 'Dzień 3', tempC: 1, condition: 'rain', precip: { probabilityPct: 55, kind: 'rain', amountMm: 2.6 } },
      { dayLabel: 'Dzień 4', tempC: 0, condition: 'cloudy', precip: { probabilityPct: 20, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 5', tempC: -1, condition: 'snow', precip: { probabilityPct: 45, kind: 'snow', amountMm: 1.5 } }
    ]
  },
  {
    id: 'krakow',
    name: 'Kraków',
    country: 'PL',
    now: {
      tempC: 0,
      condition: 'snow',
      cloudsPct: 66,
      windSpeedMps: 4.4,
      windDeg: 20,
      precip: { probabilityPct: 55, kind: 'snow', amountMm: 2.1 }
    },
    forecast5: [
      { dayLabel: 'Dziś', tempC: 0, condition: 'snow', precip: { probabilityPct: 55, kind: 'snow', amountMm: 2.1 } },
      { dayLabel: 'Jutro', tempC: -2, condition: 'cloudy', precip: { probabilityPct: 15, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 3', tempC: 1, condition: 'sunny', precip: { probabilityPct: 5, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 4', tempC: 2, condition: 'cloudy', precip: { probabilityPct: 20, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 5', tempC: 1, condition: 'rain', precip: { probabilityPct: 50, kind: 'rain', amountMm: 2.9 } }
    ]
  },
  {
    id: 'gdansk',
    name: 'Gdańsk',
    country: 'PL',
    now: {
      tempC: 4,
      condition: 'windy',
      cloudsPct: 45,
      windSpeedMps: 10.8,
      windDeg: 290,
      precip: { probabilityPct: 20, kind: 'rain', amountMm: 0.4 }
    },
    forecast5: [
      { dayLabel: 'Dziś', tempC: 4, condition: 'windy', precip: { probabilityPct: 20, kind: 'rain', amountMm: 0.4 } },
      { dayLabel: 'Jutro', tempC: 5, condition: 'cloudy', precip: { probabilityPct: 25, kind: 'rain', amountMm: 0.7 } },
      { dayLabel: 'Dzień 3', tempC: 6, condition: 'rain', precip: { probabilityPct: 65, kind: 'rain', amountMm: 5.2 } },
      { dayLabel: 'Dzień 4', tempC: 5, condition: 'cloudy', precip: { probabilityPct: 30, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 5', tempC: 3, condition: 'cloudy', precip: { probabilityPct: 15, kind: 'none', amountMm: 0 } }
    ]
  },
  {
    id: 'wroclaw',
    name: 'Wrocław',
    country: 'PL',
    now: {
      tempC: 3,
      condition: 'sunny',
      cloudsPct: 18,
      windSpeedMps: 3.1,
      windDeg: 110,
      precip: { probabilityPct: 0, kind: 'none', amountMm: 0 }
    },
    forecast5: [
      { dayLabel: 'Dziś', tempC: 3, condition: 'sunny', precip: { probabilityPct: 0, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Jutro', tempC: 4, condition: 'sunny', precip: { probabilityPct: 0, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 3', tempC: 2, condition: 'cloudy', precip: { probabilityPct: 10, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 4', tempC: 1, condition: 'rain', precip: { probabilityPct: 45, kind: 'rain', amountMm: 2.0 } },
      { dayLabel: 'Dzień 5', tempC: 0, condition: 'cloudy', precip: { probabilityPct: 20, kind: 'none', amountMm: 0 } }
    ]
  },
  {
    id: 'poznan',
    name: 'Poznań',
    country: 'PL',
    now: {
      tempC: 1,
      condition: 'rain',
      cloudsPct: 84,
      windSpeedMps: 5.6,
      windDeg: 240,
      precip: { probabilityPct: 70, kind: 'rain', amountMm: 4.1 }
    },
    forecast5: [
      { dayLabel: 'Dziś', tempC: 1, condition: 'rain', precip: { probabilityPct: 70, kind: 'rain', amountMm: 4.1 } },
      { dayLabel: 'Jutro', tempC: 2, condition: 'rain', precip: { probabilityPct: 65, kind: 'rain', amountMm: 3.0 } },
      { dayLabel: 'Dzień 3', tempC: 1, condition: 'cloudy', precip: { probabilityPct: 25, kind: 'none', amountMm: 0 } },
      { dayLabel: 'Dzień 4', tempC: -1, condition: 'snow', precip: { probabilityPct: 40, kind: 'snow', amountMm: 1.2 } },
      { dayLabel: 'Dzień 5', tempC: 0, condition: 'cloudy', precip: { probabilityPct: 15, kind: 'none', amountMm: 0 } }
    ]
  }
]

export function getCityById(cityId) {
  return CITIES.find((c) => c.id === cityId) || null
}
