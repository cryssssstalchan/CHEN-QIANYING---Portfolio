# Content Marketing Portfolio

**An evolving portfolio by Qianying Chen.**

An English-first portfolio exploring content strategy, brand storytelling, social media content, campaign concepts, and cross-cultural communication. The site retains the original monochrome, paper-inspired archive experience. Project cards currently use clearly identified placeholders; real project assets, briefs, links, and verified results will be added as materials become available.

This project adapts [An Open Archive](https://github.com/kakizzzzz/open-archive-portfolio), created by KAKI. The original interaction design and visual language are retained with content and navigation adapted for a content marketing portfolio.

## Portfolio sections

- **About** — introduction and working approach
- **Strategy** — audience research, content strategy, and editorial planning
- **Content & campaigns** — brand storytelling, social content, campaign concepts, and copywriting
- **Culture & measurement** — cross-cultural communication, content research, and performance learning
- **Selected projects** — case-study placeholders to replace with actual work
- **Get in touch** — contact details to add before publication

## Add real case studies

Use the [Content Marketing Case Study Intake Guide](docs/content-marketing-case-study-template.md) to organise each project. Incomplete materials are fine; projects can be updated in stages.

Useful materials include:

- Project brief, context, objective, and target audience
- Copy, articles, scripts, content calendars, campaign concepts, and design files
- Published URLs, social accounts, screenshots, or video links
- Your role and specific contribution
- Verified analytics with platform, metric, and reporting period
- Permission to display the work and any required attribution

Do not publish confidential information or present placeholders as completed client work. Do not invent performance figures. If results are unavailable, focus on deliverables, rationale, and learning.

## Local development

Requires **Node.js 22 or later**.

```sh
npm ci
npm run dev
```

Before publishing, run:

```sh
npm run build
npm run preview
```

The build includes TypeScript checking and outputs the static site to `dist/`.

## Where to edit

| File | Purpose |
| --- | --- |
| `components/archive/content.ts` | Profile copy, portfolio sections, project cards, contact details, and intro media |
| `components/archive/modules.ts` | Archive section labels and the grouping of content cards |
| `components/archive/archive.css` | Typography, spacing, paper-like surfaces, and interface styling |
| `components/archive/PortfolioTemplate.tsx` | Main archive interaction and page title |
| `components/archive/IntroChrome.tsx` | Intro header and navigation labels |
| `public/assets/template/` | Placeholder artwork, video, poster, and font assets |
| `index.html` | Page title, description, and social sharing metadata |

Keep the original black-and-white archive direction. Replace placeholder artwork and copy only when the corresponding project materials are ready. Add accurate image dimensions and descriptive alt text when replacing project images.

## GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push changes to `main` and wait for the Pages workflow to finish.
4. Check the workflow result and open the published URL shown by GitHub Pages.

Deployment has not been verified as part of these content edits.

## Attribution and license

The upstream template is released under the MIT License. See [LICENSE](LICENSE) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for license and dependency notices. Preserve the original copyright and license notices when redistributing the template or substantial portions of it. Use only assets you have permission to publish.
