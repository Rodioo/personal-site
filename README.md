# Personal Site

This website was primarily created to serve as a way to easily share my work (mostly side projects and articles).

https://antoniofalcescu.com

## Stack
  
  - [TypeScript](https://www.typescriptlang.org)
  - [React](https://react.dev)
  - [React Redux](https://react-redux.js.org)
  - [TailwindCSS](https://tailwindcss.com)
  - [Vite](https://vitejs.dev)
  - [HeadlessUI](https://headlessui.com)
  - [Framer Motion](https://www.framer.com/motion/)

## Project structure

```
personal-site (root)
└── src
    │ 
    │   # Static files
    ├── assets
    │
    │   # TS files that are imported by multiple components
    ├── common
    │   │ 
    │   │   # TypeScript types
    │   ├── types
    │   │
    │   │   # Util functions 
    │   └── utils
    │
    │   # React components folders
    ├── components
    │   │ 
    │   │   # Each folder here contains the Component.tsx file and some of them have Component.test.tsx file 
    │   │   # (still working on better test coverage)
    │   └── Component
    │
    │   # Page Layouts (React components that are imported in each page)
    ├── layouts
    │
    │   # Pages defined as React components folders
    ├── pages
    │   │ 
    │   │   # Each folder here contains the Page.tsx file and some of them have Page.test.tsx file
    │   │   # (still working on better test coverage)
    │   └── Page
    │
    │   # Hooks and Reducers related to react-redux 
    ├── store
    │
    │   # Component that renders the Navbar, pages and passes the React Redux store
    ├── App.tsx
    │
    │   # Main component that creates the react-router-dom Router 
    └── index.tsx
```


## Installation

### Note that this project needs [personal-site-backend](https://github.com/Rodioo/personal-site-backend) to work correctly as this serves the data to be displayed.

If you want to clone the project and run or modify the source code you can follow these steps:
  - Clone the repository
  - Assuming you have [node](https://nodejs.org/en) already installed on your machine, you can simply run:
    ```bash
      npm i
      npm run dev
    ```
  - You should see a message in your terminal which tells you that the project started on http://localhost:5173

## License

You can clone and modify this project however you want.

For more details check [LICENSE](https://github.com/Rodioo/personal-site/blob/main/LICENSE).
