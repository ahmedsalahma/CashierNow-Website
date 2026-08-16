# CashierNow Architecture Overview

The production website follows a layered frontend architecture:

```text
Experience layer
  Arabic-first views, responsive navigation, pricing, contact, product demo
       ↓
Component layer
  reusable controls, cards, dialogs, selectors, motion primitives
       ↓
State and domain layer
  typed view state, pricing data, purchase-message generation
       ↓
Platform layer
  Next.js App Router, React, Tailwind CSS, Framer Motion
```

## Design principles

1. **RTL by default** — Arabic direction is structural, not a visual patch.
2. **Single sources of truth** — related display and action data derive from the same typed state.
3. **Responsive composition** — components reflow rather than duplicating desktop and mobile pages.
4. **Accessible interactions** — semantic roles, labels, focus states, and selected-state attributes accompany motion.
5. **Progressive visual enhancement** — custom effects support the content without replacing semantic HTML.
6. **Production separation** — deployment, backend, operational configuration, and full proprietary implementation are maintained privately.

This document describes architectural decisions only; it does not expose the production component graph or implementation.
