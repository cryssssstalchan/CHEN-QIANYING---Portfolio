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
  brand: 'FIELD NOTES',
  name: 'Qianying Chen',
  role: 'Researcher in progress',
  discipline: 'POLITICS · CULTURE · MEDIA',
  disciplines: 'Political science / Cross-cultural research / Media studies',
  pageTitle: 'An Open Archive — Qianying Chen',
  website: 'https://github.com/cryssssstalchan/CHEN-QIANYING---Portfolio',
  location: 'East Asia',
  introduction: 'Collecting questions at the intersection of politics, culture, and everyday media.',
  biography: 'I am a political science student interested in how institutions, identities, and cultural stories shape the way people understand one another. This archive brings together research-led projects on China–Korea relations, city diplomacy, popular media, and public policy. It is a work in progress: a place to make questions visible, connect ideas across disciplines, and turn reading into clear, accessible stories.',
};

export const contactEmail = 'Add your preferred email';
export const contactPhone = 'Contact details available on request';
export const otherPortfolioUrl = templateProfile.website;

// Set both fields to null for the original text-only computer screen.
export const introMedia: { src: string | null; poster: string | null } = {
  src: `${import.meta.env.BASE_URL}assets/template/intro-loop.mp4`,
  poster: `${import.meta.env.BASE_URL}assets/template/intro-loop-poster.jpg`,
};

export const reasons: Reason[] = [
  {
    id: '01',
    title: 'China–Korea City Diplomacy',
    shortTitle: 'Cities as connectors',
    body: 'A comparative research direction examining how Guangzhou and Busan use cultural exchange, urban branding, and international partnerships to build relationships beyond national governments.',
    note: 'Diplomacy also happens locally.',
    tag: 'City diplomacy',
    author: 'Walt Whitman',
    source: 'https://poets.org/poem/clear-midnight',
  },
  {
    id: '02',
    title: 'Korean Variety Across Platforms',
    shortTitle: 'From TV to YouTube',
    body: 'To see a World in a Grain of Sand\nAnd a Heaven in a Wild Flower',
    note: 'Follow the story across screens.',
    tag: 'Media studies',
    author: 'William Blake',
    source: 'https://poets.org/poem/auguries-innocence',
  },
  {
    id: '03',
    title: 'Theatre Across Cultures',
    shortTitle: 'China × Korea',
    body: 'A comparative lens on Chinese and Korean theatre culture: how performance traditions, institutions, and contemporary audiences shape the exchange of stories across cultural contexts.',
    note: 'Compare context, not just form.',
    tag: 'Cultural comparison',
  },
  {
    id: '04',
    title: 'Climate Policy & Carbon Neutrality',
    shortTitle: 'Policy in practice',
    body: 'Hope is the thing with feathers\nThat perches in the soul,',
    note: 'Track the policy beyond the headline.',
    tag: 'Public policy',
    author: 'Emily Dickinson',
    source: 'https://poets.org/poem/hope-thing-feathers-254',
  },
  {
    id: '05',
    title: 'Political Identity & Voting',
    shortTitle: 'Identity and choice',
    body: 'A reading and analysis thread on how changing political identities and perceptions of cross-strait relations can influence electoral behaviour.',
    note: 'Connect attitudes to behaviour.',
    tag: 'Political behaviour',
  },
  {
    id: '06',
    title: 'Research & Collaboration',
    shortTitle: 'Build a question together',
    body: 'Interested in collaborative research, writing, and visual storytelling around East Asian politics, cultural exchange, media, and public policy. Replace this note with current availability and verified contact information before publishing.',
    note: 'Start with a clear question.',
    tag: 'Contact',
  },
  {
    id: '07',
    title: 'Field Notes & Reading',
    shortTitle: 'Ideas in progress',
    body: 'An evolving collection of readings, observations, and questions that connect comparative politics with cultural studies and everyday digital life.',
    note: 'Save the question behind the quote.',
    tag: 'Research notes',
  },
  {
    id: '08',
    title: 'Cross-Media Storytelling',
    shortTitle: 'One story, many formats',
    body: 'A framework for tracing how a story changes when it moves between broadcast television, social video, online communities, and participatory fan culture.',
    note: 'The format changes the meaning.',
    tag: 'Transmedia',
  },
  {
    id: '09',
    title: 'A Comparative Perspective',
    shortTitle: 'Across borders',
    body: 'My approach starts with context and comparison: asking who tells a story, which institutions shape it, and how audiences interpret it across borders. These are research directions in development, not claims of completed findings.',
    note: 'Stay curious; verify every claim.',
    tag: 'Approach',
  },
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
  { id: 'all', label: 'All work' },
  { id: 'fragments', label: 'Fragments' },
  { id: 'illustration', label: 'Studies' },
  { id: 'branding', label: 'Visual systems' },
  { id: 'product', label: 'Experiments' },
];

const workAsset = (filename: string) => `${import.meta.env.BASE_URL}assets/template/${filename}`;

export const portfolioWorks: PortfolioWork[] = [
  {
    id: 'silence',
    category: 'fragments',
    title: 'Quiet Power',
    caption: 'Visual note · institutions and influence',
    image: workAsset('01-silence.svg'),
    thumbnail: workAsset('01-silence.svg'),
    alt: 'Minimal black-and-white typographic composition used as a visual divider for a research portfolio.',
    width: 900,
    height: 1200,
  },
  {
    id: 'feathers',
    category: 'fragments',
    title: 'Small Signals',
    caption: 'Visual note · identity and belonging',
    image: workAsset('02-feathers.svg'),
    thumbnail: workAsset('02-feathers.svg'),
    alt: 'Minimal monochrome graphic used to introduce a research theme on identity.',
    width: 900,
    height: 1200,
  },
  {
    id: 'horizon',
    category: 'illustration',
    title: 'Shared Horizons',
    caption: 'Visual note · cross-cultural exchange',
    image: workAsset('03-horizon.svg'),
    thumbnail: workAsset('03-horizon.svg'),
    alt: 'Monochrome abstract horizon graphic representing cross-cultural exchange.',
    width: 1200,
    height: 1200,
  },
  {
    id: 'grain',
    category: 'branding',
    title: 'Patterns & Policy',
    caption: 'Visual note · systems and repetition',
    image: workAsset('04-grain.svg'),
    thumbnail: workAsset('04-grain.svg'),
    alt: 'Black-and-white pattern composition used as a visual metaphor for policy systems.',
    width: 1600,
    height: 1000,
  },
  {
    id: 'orbit',
    category: 'illustration',
    title: 'Connected Worlds',
    caption: 'Visual note · regional connections',
    image: workAsset('05-orbit.svg'),
    thumbnail: workAsset('05-orbit.svg'),
    alt: 'Monochrome orbital forms representing regional and cultural connections.',
    width: 1000,
    height: 1400,
  },
  {
    id: 'room',
    category: 'product',
    title: 'Public Space',
    caption: 'Visual note · cities and communities',
    image: workAsset('06-room.svg'),
    thumbnail: workAsset('06-room.svg'),
    alt: 'Minimal abstract composition introducing the theme of cities and public life.',
    width: 1200,
    height: 900,
  },
  {
    id: 'margin',
    category: 'branding',
    title: 'Reading Between Lines',
    caption: 'Visual note · close reading and interpretation',
    image: workAsset('07-margin.svg'),
    thumbnail: workAsset('07-margin.svg'),
    alt: 'Monochrome typographic composition representing close reading and interpretation.',
    width: 900,
    height: 1200,
  },
  {
    id: 'beginning',
    category: 'illustration',
    title: 'Open Questions',
    caption: 'Visual note · research in progress',
    image: workAsset('08-beginning.svg'),
    thumbnail: workAsset('08-beginning.svg'),
    alt: 'Black-and-white typographic composition representing an open research question.',
    width: 1200,
    height: 1200,
  },
];

export const templateResume = {
  experience: {
    title: 'Selected Academic & Independent Projects',
    period: 'Ongoing',
    bullets: [
      'Research interests: East Asian politics, cultural exchange, digital media, and public policy.',
      'Methods to develop: literature review, comparative case analysis, and clear research writing.',
      'Add final papers, presentations, and verified outcomes as they are ready to share.',
    ],
  },
  education: {
    title: 'Political Science',
    period: 'Academic background',
  },
  practice: 'An evolving academic portfolio connecting political science with cross-cultural communication, media, and policy research. Project descriptions are framed as research interests until completed work and outcomes are added.',
  tools: ['Literature review · comparative analysis · research writing', 'Chinese · English · Korean (edit to reflect your actual proficiency)'],
};
