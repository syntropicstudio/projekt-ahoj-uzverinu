export const pub = {
  name: 'Pohostinství U Zvěřinů & zahrádka Ahoj',
  address: 'Žernovník 10',
  locality: '679 21 Černá Hora',
  phone: '+420 723 748 557',
  phoneHref: 'tel:+420723748557',
  email: 'ahoj.zverina@seznam.cz',
  mapHref: 'https://www.google.com/maps/dir/?api=1&destination=Žernovník+10,+679+21+Černá+Hora',
};

// Aktualizujte období i jednotlivé řádky společně. Nejde o celoroční rozpis.
export const openingHours = [
  {
    id: 'winter', name: 'Zimní provoz', note: 'V pohostinství uvnitř',
    start: '2026-10-16', end: '2027-04-25', period: '16. 10. 2026 – 25. 4. 2027',
    rows: [
      { days: 'Pondělí – čtvrtek', time: 'Zavřeno', closed: true },
      { days: 'Pátek – sobota', time: '16.00–21.00', closed: false },
      { days: 'Neděle', time: '11.30–20.00', closed: false },
    ],
  },
  {
    id: 'summer', name: 'Letní provoz', note: 'Na zahrádce Ahoj',
    start: '2027-04-30', end: '2027-09-12', period: '30. 4. – 12. 9. 2027',
    rows: [
      { days: 'Pondělí', time: 'Zavřeno', closed: true },
      { days: 'Úterý – pátek', time: '14.30–21.00', closed: false },
      { days: 'Sobota', time: '11.30–21.00', closed: false },
      { days: 'Neděle', time: '11.30–20.00', closed: false },
    ],
  },
];