# Project Constitution (structure.md)

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Conventions: PT-BR (Variables/Comments), PascalCase (Components), camelCase (Files)

## Architecture Overview
The project follows a strict strict co-location and service-layer separation strategy.

## Directory Tree
```
src/
├── app/                 # Next.js App Router Pages
│   ├── (public)/        # Public routes
│   │   ├── page.tsx
│   │   └── _components/ # Page-specific components (Co-location)
│   ├── (auth)/          # Authentication routes
│   └── layout.tsx       # Root layout
├── componentes/         # Shared Components
│   ├── ui/              # Dumb components (Buttons, Inputs)
│   ├── layout/          # Structural components (Header, Footer)
│   └── funcionais/      # Smart widgets
├── hooks/               # Global Hooks
├── servicos/            # API Services & Business Logic (No UI code here)
├── tipos/               # TypeScript Definitions
└── midia/               # Static assets
```

## Manifesto
1. **Co-location**: If a component is used in only one page, keep it in `_components` inside that page's folder.
2. **Services**: All API calls and DB logic MUST reside in `src/servicos`. Never inside components.
3. **Naming**: Use descriptive Portuguese names. `usuarioServico.ts`, `BotaoPrimario.tsx`.

## Security
- `.env` files are in `.gitignore`.
- Use `NEXT_PUBLIC_` only for truly public variables.
