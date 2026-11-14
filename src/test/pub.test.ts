import { describe, expect, it } from 'vitest';
import { openingHours, pub } from '@/data/pub';

describe('Sezónní rozpis podle zadání', () => {
  it('zimní období 16. 10. 2026 až 25. 4. 2027 a přesné hodiny', () => {
    const winter = openingHours.find(s => s.id === 'winter');
    expect(winter).toMatchObject({ start: '2026-10-16', end: '2027-04-25', rows: [
      { days: 'Pondělí – čtvrtek', time: 'Zavřeno', closed: true },
      { days: 'Pátek – sobota', time: '16.00–21.00', closed: false },
      { days: 'Neděle', time: '11.30–20.00', closed: false },
    ] });
  });
  it('letní období 30. 4. až 12. 9. 2027 a přesné hodiny', () => {
    const summer = openingHours.find(s => s.id === 'summer');
    expect(summer).toMatchObject({ start: '2027-04-30', end: '2027-09-12', rows: [
      { days: 'Pondělí', time: 'Zavřeno', closed: true },
      { days: 'Úterý – pátek', time: '14.30–21.00', closed: false },
      { days: 'Sobota', time: '11.30–21.00', closed: false },
      { days: 'Neděle', time: '11.30–20.00', closed: false },
    ] });
  });
  it('telefon a e-mail vedou na dodané kontakty', () => {
    expect(pub.phoneHref).toBe('tel:+420723748557');
    expect(pub.email).toBe('ahoj.zverina@seznam.cz');
  });
});