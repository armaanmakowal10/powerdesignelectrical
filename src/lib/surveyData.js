export const S_SERVICES = [
  { id: 'maintenance', t: 'Maintenance & repair', d: 'Diagnostics, fixes, tune-ups' },
  { id: 'emergency', t: 'Emergency repair', d: '24/7 — sparks, no power' },
  { id: 'panel', t: 'Panel & service upgrades', d: '100A → 200A, sub-panels' },
  { id: 'lighting', t: 'Lighting installs', d: 'Pot lights, fixtures, outlets' },
  { id: 'ev', t: 'EV charger install', d: 'Level 2 home charger' },
  { id: 'hottub', t: 'Hot tub wiring', d: 'GFCI dedicated circuits' },
  { id: 'other', t: 'Other', d: 'Tell us what you need' },
];

export const S_AREAS = [
  { id: 'calgary', t: 'Calgary' },
  { id: 'airdrie', t: 'Airdrie' },
  { id: 'cochrane', t: 'Cochrane' },
  { id: 'chestermere', t: 'Chestermere' },
  { id: 'okotoks', t: 'Okotoks' },
  { id: 'other', t: 'Somewhere else' },
];

export const S_PROPS = [
  { id: 'house', t: 'Detached house', d: 'Single-family home' },
  { id: 'townhome', t: 'Townhome / semi', d: 'Attached residential' },
  { id: 'condo', t: 'Condo / suite', d: 'Multi-unit residential' },
  { id: 'commercial', t: 'Commercial space', d: 'Shop, office, retail' },
];

const LABEL_MAPS = {
  service: S_SERVICES,
  location: S_AREAS,
  property: S_PROPS,
};

export function labelFor(field, id) {
  if (!id) return '(not answered)';
  const item = LABEL_MAPS[field]?.find((x) => x.id === id);
  return item?.t ?? id;
}

export function formatSurveyAnswers(data) {
  const location = data.location === 'other'
    ? (data.locationOther?.trim() || 'Somewhere else')
    : labelFor('location', data.location);

  return {
    email: data.email.trim(),
    fields: {
      'Question 1 — Service': labelFor('service', data.service),
      'Question 2 — Location': location,
      'Question 3 — Property type': labelFor('property', data.property),
      'Contact email': data.email.trim(),
      Phone: data.phone.trim(),
      Notes: data.notes?.trim() || '(none)',
    },
  };
}
