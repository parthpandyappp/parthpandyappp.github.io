# parthpandyappp.github.io

My personal portfolio: a minimal, black-and-white static site with dark mode.

**Live:** [parthpandyappp.github.io](https://parthpandyappp.github.io)

## Stack

Plain HTML, CSS, and a few lines of vanilla JS. No frameworks, no build step, no dependencies.

- `index.html`: home (about, experience, top projects, recognitions, contact)
- `projects.html`: the full project archive
- `styles.css`: all styling; theming via CSS variables and `data-theme`
- `theme.js`: dark-mode toggle (respects `prefers-color-scheme`, persists to `localStorage`)

## Development

Open `index.html` in a browser, or serve locally:

```sh
python3 -m http.server 8000
```

## History

The previous React (CRA) version of this site is preserved on the [`v1-react`](https://github.com/parthpandyappp/parthpandyappp.github.io/tree/v1-react) branch.
