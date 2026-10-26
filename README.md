# Mathew Shereni — React Portfolio

Personal portfolio built with **React + Vite**, routed with **React Router 7 (HashRouter)**, and deployed to **GitHub Pages** with GitHub Actions.

- **Live site:** https://mathew-shereni.github.io/portfolio/
- **Repository:** https://github.com/MATHEW-SHERENI/portfolio
- **Course:** CSCI 4360/5360 Web Technologies, Fall 2026

## Views

| Route | Content |
|---|---|
| `#/` | Name, introduction, target role, link to projects |
| `#/experience` | Work experience with contributions, education, skills, certifications |
| `#/projects` | 8 project cards rendered from an array, with a live filter |
| `#/projects/:slug` | Problem, my contribution, implementation, result/lesson, source/demo link |
| `#/contact` | Email, GitHub, LinkedIn, and personal website links |
| anything else | "Page not found" view |

## Run locally

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev       # development server with hot reload
npm run lint      # ESLint
npm run build     # production build into dist/
npm run preview   # serve the build at http://localhost:4173/portfolio/
```

## Project structure

```
src/
  main.jsx                 mounts <App /> inside <HashRouter>
  App.jsx                  route table (shared layout + child routes)
  index.css                styles, CSS custom properties, dark theme
  components/
    Layout.jsx             header, NavLink navigation, <Outlet />, footer, skip link
    ExperienceCard.jsx     reusable card for one job or degree (props)
    ProjectCard.jsx        reusable card for one project (props)
    ThemeToggle.jsx        persistent dark/light theme (extension B)
  pages/
    BasicPages.jsx         Home, Experience, Contact, NotFound
    Projects.jsx           controlled filter + card grid + no-match state
    ProjectDetail.jsx      useParams lookup + unknown-slug message
  data/
    profile.js             profile, education, experience, skills, certifications
    projects.js            project entries (unique slugs)
.github/workflows/deploy.yml   build + deploy to GitHub Pages on push to main
```

## How the requirements are met

- **Function components and props:** `Layout`, `ExperienceCard`, `ProjectCard`, `ThemeToggle`, and the page components. Cards receive their data through props.
- **Data-driven lists with stable keys:** projects use `slug` as the key; experience and education use an `id`; skills and certifications use their unique text.
- **Routing:** `Routes`, `Route`, a pathless layout route with `Outlet`, `NavLink` with active styling (`end` on Home), and `useParams` on the detail page.
- **Two missing-page cases:** an unknown URL (`#/no-such-page`) matches the `*` route and renders `NotFound`. An unknown slug (`#/projects/no-such-project`) matches the detail route, but `ProjectDetail` finds no data and shows "Project not found" with a link back.
- **Controlled filter:** `useState` holds the query. The visible list is derived during render (trimmed, case-insensitive match on title, category, and technologies). A `role="status"` count and a "No projects match" message handle the empty result.
- **Accessibility:** labeled filter input, skip-to-content button, visible `:focus-visible` outline, `aria-label` on the navigation, `aria-pressed` on the theme toggle, and a heading order of h1 → h2 → h3. The site has no informative images, so no alt text is needed.
- **Responsive layout:** the auto-fit CSS grid collapses to one column on phones, the header and nav wrap, and the skills list stacks below 40rem.

## Extension B: Persistent color theme

`ThemeToggle` lives in `Layout`, outside `<Outlet />`, so it stays mounted while routes change.

1. `useState` with a lazy initializer reads `localStorage["portfolio-theme"]` once on the first render.
2. `useEffect(..., [dark])` synchronizes that state with the outside world. It sets `data-theme` on `<html>` and saves the choice to `localStorage`. It runs again only when `dark` changes.
3. The click handler uses an updater (`setDark((d) => !d)`), so it never toggles a stale value.
4. In CSS, `[data-theme="dark"]` redefines only the color custom properties. The body, cards, links, inputs, and focus outline all switch together while keeping readable contrast.
5. `try/catch` around storage keeps the toggle working when storage is blocked. In that case the choice is just not remembered.

The preference is per browser and origin. It is not shared across devices.

**How it was tested:** turn on the dark theme, navigate between views (it stays dark), refresh (it stays dark), then check DevTools → Application → Local Storage for `portfolio-theme: dark`. Turning it off and refreshing restores the light theme.

## Deployment

- `vite.config.js` sets `base: "/portfolio/"`, so the built JS and CSS load from `/portfolio/assets/…` instead of the domain root.
- `HashRouter` keeps routes after the `#`. The server only ever receives `/portfolio/`, so refreshing on a deep link such as `#/projects/real-time-chat` still loads the app.
- `.github/workflows/deploy.yml` runs `npm ci`, `npm run lint`, and `npm run build`, then uploads `dist/` and deploys it with `actions/deploy-pages`. The repository's Pages source is set to **GitHub Actions**.

## Verification checklist

| Check | Result |
|---|---|
| `npm run lint` passes with no errors | ✅ |
| `npm run build` succeeds | ✅ |
| GitHub Actions build + deploy jobs succeed | ✅ |
| Live page, JS, and CSS load from `/portfolio/` (no 404s) | ✅ |
| Nav links change the view without a full reload | ☐ |
| Active nav link is highlighted; Home is not active on other pages | ☐ |
| Filter: mixed case (`JAVA`), surrounding spaces (`  aws  `), no match (`xyz`), empty | ☐ |
| Project card → detail page → Back to projects | ☐ |
| `#/no-such-page` shows "Page not found" | ☐ |
| `#/projects/no-such-project` shows "Project not found" | ☐ |
| Refresh on a detail page on the live site keeps the page | ☐ |
| Theme persists across navigation and refresh | ☐ |
| Keyboard: skip link appears on first Tab; focus outline visible on all controls | ☐ |
| Mobile width (~375px): single-column cards, no horizontal scroll | ☐ |
| External links (GitHub, LinkedIn, demos) open correctly | ☐ |

## Credits

- The starting code for routing, `ProjectCard`, `Projects`, `ProjectDetail`, `ThemeToggle`, the base stylesheet, and the deployment workflow comes from the course handout *Build and Publish a React Portfolio* (CSCI 4360/5360, Fall 2026). It was then customized.
- AI assistance: Claude Code (Anthropic) was used as a step-by-step tutor and to help scaffold components and styles, under the course's generative-AI policy. All portfolio content comes from my own resume and project descriptions.
- Built with [Vite](https://vite.dev/), [React](https://react.dev/), and [React Router](https://reactrouter.com/).
