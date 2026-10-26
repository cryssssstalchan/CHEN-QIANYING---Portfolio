import type { ModuleId } from './timeline';

export const portfolioModules: Array<{ id: ModuleId; label: string; reasonIds: string[] }> = [
  { id: 'about', label: 'About', reasonIds: [] },
  { id: 'fragments', label: 'Strategy', reasonIds: ['01', '07'] },
  { id: 'craft', label: 'Content & campaigns', reasonIds: ['02', '03', '04', '06'] },
  { id: 'perspective', label: 'Culture & measurement', reasonIds: ['05', '08'] },
  { id: 'works', label: 'Selected projects', reasonIds: [] },
  { id: 'collaboration', label: 'Get in touch', reasonIds: [] },
];
