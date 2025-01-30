# Contributing

## API Submodule

The API is set as a separate submodule, so it can be cloned and developed separately. This repo is the documentation for that API. 

The API is included in the repo so that frontend devs can run the API as they code the site. 

### Frontend Only Dev
1. Fork the repo
2. git clone \<fork url>
3. When pulling/fetching, also pull the submodule
```bash
# Pull latest API updates
git submodule update --init
```
4. Make pull request to merge

### Backend Only Dev
1. Fork the API repo
2. git clone \<fork url>
3. Make pull request to merge

### Full Stack Dev
1. Fork both repos
2. Develop them separatly

* Or ask for push permissions so they can be developed with the backend inside the frontend.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
