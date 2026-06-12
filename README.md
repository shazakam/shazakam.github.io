# shazakam.github.io

Personal portfolio / CV website. Plain HTML, CSS and JavaScript — no build step.
Hosted with GitHub Pages at https://shazakam.github.io.

## Structure

```
index.html    Single page with three tabs: Bio, CV, Projects
styles.css    Styling (light/dark theme, responsive)
script.js     Tab routing + theme toggle
assets/       Put photo.jpg, cv.pdf, etc. here
```

Tabs are hash-routed, so each has its own URL:
`#bio`, `#cv`, `#projects`.

## Editing

All content lives in `index.html` — search for the section comments
(`BIO`, `CV`, `PROJECTS`) and replace the placeholder text. Add your
photo as `assets/photo.jpg` and CV as `assets/cv.pdf`.

## Run locally

Open `index.html` in a browser, or serve it:

```sh
python3 -m http.server
```

Then visit http://localhost:8000.
