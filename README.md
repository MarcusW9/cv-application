# React Template

A minimal React starter for [The Odin Project](https://www.theodinproject.com/) React course.

## Stack

| Tool                                                                                   | Purpose                                 |
| -------------------------------------------------------------------------------------- | --------------------------------------- |
| [pnpm](https://pnpm.io/)                                                               | Package manager                         |
| [Vite](https://vite.dev/)                                                              | Dev server and bundler                  |
| [React](https://react.dev/)                                                            | UI library                              |
| [Vitest](https://vitest.dev/)                                                          | Test runner (Jest-compatible API)       |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Render and query components in tests    |
| [user-event](https://testing-library.com/docs/user-event/intro)                        | Simulate real user interactions         |
| [jest-dom](https://github.com/testing-library/jest-dom)                                | DOM matchers like `toBeInTheDocument()` |
| [jsdom](https://github.com/jsdom/jsdom)                                                | Browser-like environment for tests      |
| [oxlint](https://oxc.rs/docs/guide/usage/linter)                                       | Linter                                  |
| [Prettier](https://prettier.io/)                                                       | Formatter                               |

## Getting started

```bash
corepack enable   # once per machine, provides pnpm
pnpm install
pnpm dev
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload |
| `pnpm test`    | Run tests in watch mode              |
| `pnpm build`   | Build for production into `dist/`    |
| `pnpm preview` | Serve the production build locally   |
| `pnpm lint`    | Lint with oxlint                     |
| `pnpm format`  | Format all files with Prettier       |

## Project structure

```
├── index.html          # HTML entry, mounts the app at #root
├── public/             # Static assets served as-is
├── src/
│   ├── main.jsx        # React entry, renders <App /> into #root
│   ├── App.jsx         # Root component (example counter)
│   ├── App.test.jsx    # Example component tests
│   ├── index.css       # Global styles and CSS reset
│   └── test/
│       └── setup.js    # Test setup: jest-dom matchers, cleanup
├── vite.config.js      # Vite and Vitest config
├── .oxlintrc.json      # Linter config
├── .github/workflows/  # GitHub Pages deploy
└── .prettierrc         # Formatter config
```

## Testing

Tests live next to the component they test, named `*.test.jsx`. Vitest globals (`describe`, `it`, `expect`) are enabled, but importing them explicitly also works.

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

it('increments the counter on click', async () => {
  const user = userEvent.setup()
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  await user.click(button)
  expect(button).toHaveTextContent('Count is 1')
})
```

Prefer queries that reflect how users find elements: `getByRole`, `getByLabelText`, `getByText`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` tests, builds and deploys the site on every push to `main`. The Vite `base` path is set automatically from the repo name.

One-time setup per repo: **Settings → Pages → Source: GitHub Actions**. The site is then live at `https://<username>.github.io/<repo-name>/`. Check progress or errors in the repo's **Actions** tab.

## Using this template

1. On GitHub, click **Use this template** to create a new repo.
2. Rename `name` in `package.json` and `<title>` in `index.html`.
3. Enable Pages (see above).
4. Replace `App.jsx` and its test with your own components.
