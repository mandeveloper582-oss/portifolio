# Lencho Ahmed Portfolio

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add the EmailJS service ID, template ID, and public key from the EmailJS dashboard.
4. Start the app with `npm run dev`.

The contact form uses EmailJS and sends messages to `lenchoa391@gmail.com`. Set the EmailJS template recipient to that address and configure the template parameters `from_name`, `reply_to`, `to_email`, `subject`, and `message`. Do not commit `.env.local` or any private credentials.

## Validation

- `npm run lint`
- `npm run build`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
