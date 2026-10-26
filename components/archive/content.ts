export type Reason = {
  id: string;
  title: string;
  shortTitle: string;
  body: string;
  note: string;
  tag: string;
  author?: string;
  source?: string;
};

// Edit this profile and the entries below to make the template your own.
export const templateProfile = {
  brand: 'CONTENT STUDIO',
  name: 'Qianying Chen',
  role: 'Content Marketing Portfolio',
  discipline: 'STRATEGY · STORYTELLING · CULTURE',
  disciplines: 'Content strategy / Brand storytelling / Social media',
  pageTitle: 'Content Marketing Portfolio — Qianying Chen',
  website: 'https://github.com/cryssssstalchan/CHEN-QIANYING---Portfolio',
  location: 'East Asia',
  introduction: 'Turning audience insight into stories people want to spend time with.',
  biography: 'I am building a content marketing practice at the intersection of audience research, cultural insight, and digital storytelling. This portfolio is a flexible home for strategy, editorial concepts, social content, campaign planning, and cross-cultural communication. Selected projects and performance data will be added as materials are ready to share.',
};

export const contactEmail = 'Email to be added';
export const contactPhone = 'Contact details to be added';
export const otherPortfolioUrl = templateProfile.website;

// Set both fields to null for the original text-only computer screen.
export const introMedia: { src: string | null; poster: string | null } = {
  src: `${import.meta.env.BASE_URL}assets/template/intro-loop.mp4`,
  poster: `${import.meta.env.BASE_URL}assets/template/intro-loop-poster.jpg`,
};

export const reasons: Reason[] = [
  { id: '01', title: 'Content Strategy', shortTitle: 'Start with the audience', body: 'A space for audience research, content pillars, channel roles, and editorial planning. The final case study will document the brief, strategic choices, and deliverables.', note: 'Useful content starts with a real need.', tag: 'Strategy' },
  { id: '02', title: 'Brand Storytelling', shortTitle: 'Make the message matter', body: 'A future showcase for brand narratives, messaging frameworks, campaign concepts, and the creative decisions that connect a brand with its audience.', note: 'A clear story creates coherence.', tag: 'Brand voice' },
  { id: '03', title: 'Social Media Content', shortTitle: 'Built for the platform', body: 'A space for platform-native post concepts, short-form video scripts, content calendars, and community-first storytelling across social channels.', note: 'Format the story for where it lives.', tag: 'Social' },
  { id: '04', title: 'Campaign Concepts', shortTitle: 'One idea, many touchpoints', body: 'Campaign planning that connects audience insight, a central creative idea, channel execution, and a measurement plan. Project assets and outcomes will be added later.', note: 'Connect every touchpoint to a purpose.', tag: 'Campaigns' },
  { id: '05', title: 'Cross-Cultural Communication', shortTitle: 'Local context, global clarity', body: 'Exploring how cultural context shapes message, tone, and audience interpretation, with a focus on East Asian markets and cross-cultural storytelling.', note: 'Context is part of the message.', tag: 'Cross-cultural' },
  { id: '06', title: 'Editorial & Copywriting', shortTitle: 'Words with a job to do', body: 'A future collection of web copy, editorial articles, campaign copy, and content designed to inform, engage, or move an audience to action.', note: 'Clarity before cleverness.', tag: 'Writing' },
  { id: '07', title: 'Content Research', shortTitle: 'Insight before output', body: 'A place for audience observations, content audits, trend research, competitor reviews, and the reasoning behind editorial recommendations.', note: 'Research makes creativity more relevant.', tag: 'Research' },
  { id: '08', title: 'Measurement & Learning', shortTitle: 'Learn from the response', body: 'A framework for documenting goals, KPIs, reporting, and iteration. Metrics will only be included when verified project data is available.', note: 'Measure what the content is meant to change.', tag: 'Analytics' },
];

export type PortfolioWork = {
  id: string;
  category: 'fragments' | 'illustration' | 'character-illustration' | 'red-envelope' | 'branding' | 'platform' | 'product' | 'pet-design' | '3d';
  title: string;
  caption: string;
  image: string;
  thumbnail: string;
  alt: string;
  width: number;
  height: number;
};

export const workCategories: Array<{
  id: 'all' | PortfolioWork['category'];
  label: string;
}> = [
  { id: 'all', label: 'All projects' },
  { id: 'fragments', label: 'Content strategy' },
  { id: 'illustration', label: 'Social content' },
  { id: 'branding', label: 'Brand storytelling' },
  { id: 'product', label: 'Campaign concepts' },
];

const workAsset = (filename: string) => `${import.meta.env.BASE_URL}assets/template/${filename}`;

export const portfolioWorks: PortfolioWork[] = [
  { id: 'strategy-placeholder', category: 'fragments', title: 'Content Strategy', caption: 'Case study to be added · audience, insight, editorial plan', image: workAsset('01-silence.svg'), thumbnail: workAsset('01-silence.svg'), alt: 'Temporary monochrome placeholder for a content strategy case study.', width: 900, height: 1200 },
  { id: 'social-placeholder', category: 'illustration', title: 'Social Content Series', caption: 'Case study to be added · platform-native storytelling', image: workAsset('02-feathers.svg'), thumbnail: workAsset('02-feathers.svg'), alt: 'Temporary monochrome placeholder for a social content project.', width: 900, height: 1200 },
  { id: 'brand-placeholder', category: 'branding', title: 'Brand Storytelling', caption: 'Case study to be added · voice, message, narrative', image: workAsset('04-grain.svg'), thumbnail: workAsset('04-grain.svg'), alt: 'Temporary monochrome placeholder for a brand storytelling project.', width: 1600, height: 1000 },
  { id: 'campaign-placeholder', category: 'product', title: 'Integrated Campaign', caption: 'Case study to be added · idea, channels, measurement', image: workAsset('06-room.svg'), thumbnail: workAsset('06-room.svg'), alt: 'Temporary monochrome placeholder for a campaign planning project.', width: 1200, height: 900 },
];

export const templateResume = {
  experience: {
    title: 'Selected Content Projects',
    period: 'Portfolio in progress',
    bullets: [
      'Content strategy, editorial planning, and audience research — project details to be added.',
      'Brand storytelling, social media, and campaign concepts — selected samples to be added.',
      'Performance metrics and outcomes will be included only when verified.',
    ],
  },
  education: { title: 'Education', period: 'Details to be added' },
  practice: 'A developing content marketing portfolio focused on audience insight, clear storytelling, platform-aware execution, and cross-cultural communication.',
  tools: ['Content strategy · copywriting · editorial planning · campaign thinking', 'Languages and software skills to be confirmed'],
};
