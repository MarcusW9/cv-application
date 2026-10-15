# CV Builder

A small React app for filling in a CV. It is my solution to the [CV Application project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) in The Odin Project's React course.

## Features

- **Three sections:** general information (name, email, phone), education (school, title of study, dates) and practical experience (company, position, responsibilities, dates).
- **Edit and confirm:** each section is a form until you press **Confirm**, which shows the values as plain text. **Edit** brings the form back with everything still filled in.
- **Multiple experiences:** add as many jobs as you like and remove any of them. The last one can't be removed, so the section is never empty.
- **Current job:** tick "This is my current experience" to hide the end date and show "Present".
- **Light and dark mode:** it follows your system setting at first, and the switch in the top right overrides it.

## Run it locally

```bash
corepack enable   # once per machine, provides pnpm
pnpm install
pnpm dev
```

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload |
| `pnpm build`   | Build for production into `dist/`    |
| `pnpm preview` | Serve the production build locally   |
| `pnpm lint`    | Lint with oxlint                     |
| `pnpm format`  | Format all files with Prettier       |

Built with [React](https://react.dev/) and [Vite](https://vite.dev/), using [pnpm](https://pnpm.io/), [oxlint](https://oxc.rs/docs/guide/usage/linter) and [Prettier](https://prettier.io/).

## Project structure

```
src/
├── main.jsx                    # Entry: renders <App /> into #root
├── App.jsx                     # Page layout, dark mode state and toggle
├── components/
│   ├── GeneralInfo.jsx
│   ├── EducationInfo.jsx
│   └── PracticalExperience.jsx # Holds the list; <Experience /> is one entry
└── styles/
    ├── index.css               # CSS reset
    ├── App.css                 # Colour variables, page layout, cards, dark mode switch
    ├── Form.css                # Shared labels, inputs and buttons
    ├── Display.css             # The confirmed (read-only) view
    ├── EducationInfo.css
    └── PracticalExperience.css
```

## How it works

- **State per section.** Each section keeps its data in one state object. The inputs are controlled, and one `handleChange` updates the right field using `[e.target.name]`.
- **Edit and display modes.** An `isEditing` boolean decides which version a component returns.
- **Multiple experiences.** `PracticalExperience` only stores a list of ids made with `crypto.randomUUID()`, and uses them as React keys. Each `Experience` owns its own form data and tells the parent to remove it through an `onDelete` prop. `isLastExperience` is worked out from the list length on each render instead of being stored, and it disables the Remove button.
- **Styling.** Plain CSS with custom properties for colours and spacing. Spacing between things comes from the parent's `gap`, and `main > section` makes each section a card without styling the entries nested inside it.
- **Dark mode.** The colours use `light-dark()`, which reads the page's `color-scheme`. The toggle keeps a boolean in `App` and a `useEffect` sets `data-theme` on `<html>`. Two CSS rules turn that attribute into a forced `color-scheme: light` or `dark`, so the palette is only defined once.

## What I learned

- **Derive, don't store.** Anything that can be calculated from existing state, like `isLastExperience`, should be calculated during render.
- **Keys should be stable ids,** not array positions, so removing an item in the middle doesn't mix up the state of the others.
- **State sits with whoever owns the data.** Keeping each section's data inside its component was simple, but it means there is no CV preview. That would need the data lifted up into `App`.
- **Parents control spacing.** `gap` on a flex or grid container spaces its direct children. A group of related things gets its own wrapper with its own, smaller gap.
- **`max-width` plus `margin-inline: auto`** centres a column and still shrinks on small screens, which `width` doesn't.
- **Plain CSS is global.** Splitting it across files organises it but doesn't scope it, so class names and selectors like `main > section` matter. Specificity, not file order, decides which rule wins.
- **`:root` is `<html>`,** not the `#root` div. A setting that every element inherits belongs on `<html>`.
- **`useEffect` syncs React with the outside world,** here an attribute on `<html>` that React doesn't render.

## Ideas for later

- Format dates nicely (for example "1 Mar 2024") instead of showing `2024-03-01`.
- Allow several education entries, like experience.
- A live CV preview and a print or PDF view, which needs the state lifted into `App`.
- Save the data in `localStorage` so a refresh doesn't lose it.
- Tests with Vitest and React Testing Library.
