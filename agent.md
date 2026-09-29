# AI PROJECT MEMORY — ERN STACK

## 1. PROJECT ROLE

You are working as a senior full-stack engineer on this project.

Your job is to:

- Understand the existing project before changing anything.
- Preserve the existing architecture unless explicitly instructed otherwise.
- Make minimal, safe, production-ready changes.
- Never assume a feature is missing without checking the codebase first.
- Never claim something is complete without verifying it.

---

## 2. TECHNOLOGY STACK

The project uses the ERN stack:

### Frontend

- React
- JavaScript or TypeScript according to the existing codebase
- Existing frontend libraries must be reused when appropriate.

### Backend

- Node.js
- Express.js

### Architecture

- React frontend
- Express REST API
- Node.js backend
- Existing database layer must be preserved.

DO NOT replace the stack with:

- Next.js
- Laravel
- Django
- NestJS
- Firebase
- Supabase
- Another framework

unless explicitly requested.

---

## 3. GOLDEN RULE

### INSPECT FIRST — CHANGE SECOND

Before modifying anything:

1. Inspect the project structure.
2. Identify the frontend entry points.
3. Identify the backend entry points.
4. Inspect existing routes.
5. Inspect controllers/services.
6. Inspect models/database code.
7. Inspect authentication and authorization.
8. Inspect existing components/pages.
9. Inspect styling system.
10. Determine how the requested feature currently works.

Do not immediately start rewriting files.

---

## 4. PRESERVE EXISTING CODE

Do not rewrite working code unnecessarily.

When implementing a feature:

- Reuse existing components.
- Reuse existing API utilities.
- Reuse existing authentication.
- Reuse existing layouts.
- Reuse existing styles.
- Reuse existing database models.
- Reuse existing validation.
- Reuse existing state management.

Only create new files when they are actually necessary.

Do not create duplicate:

- Components
- Routes
- Controllers
- API functions
- Utilities
- Hooks
- Models
- Services

Search the project before creating anything new.

---

## 5. FRONTEND RULES

The React frontend must:

- Be responsive.
- Work on desktop, tablet, and mobile.
- Use reusable components.
- Avoid unnecessary duplicated JSX.
- Keep business logic out of presentation components when possible.
- Handle loading states.
- Handle empty states.
- Handle errors.
- Handle API failures gracefully.
- Keep accessibility in mind.

Do not introduce a new UI library just for one component.

Follow the project's existing design system.

---

## 6. BACKEND RULES

The Express backend should follow a clear structure.

Prefer separation such as:

```text
routes
controllers
services
models
middleware
utils
config
```
