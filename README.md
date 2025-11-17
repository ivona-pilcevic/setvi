# SETVI - Product Catalog

A React application for browsing products with infinite scroll, virtualized table, and AI-style summary generation using the typewriter effect.

## Setup & Run Instructions

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd setvi
pnpm install
```

Create a `.env` file in the root directory with the API base URL:

```
VITE_APP_API_BASE_URL=https://dummyjson.com
```

Run the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

## Architecture Overview

The project follows a feature-based organization with clear separation between API layer, UI components, and shared utilities.

### High-Level Structure

- **Features:** `features/catalog/` and `features/typewriter/` contain feature-specific components, hooks, and utilities
- **Shared Resources:** `components/common/` for reusable UI components, `hooks/` for shared custom hooks
- **API Layer:** Each feature has its own `hooks/api/` directory with React Query hooks that wrap API calls

### Data Flow

1. **Query Params:** URL state (search, category, pagination) is managed via `useQueryParams` hook with built-in debouncing (300ms)
2. **Data Fetching:** React Query's `useInfiniteQuery` handles server-side pagination, caching, and background refetching
3. **Virtualized Catalog:** `react-window` renders only visible rows for optimal performance with large datasets
4. **Product Details:** Clicking a row opens a drawer that lazy-fetches product details via `useFetchProductDetails`
5. **AI Summary:** On button click, quotes are fetched, merged into a single string, and rendered character-by-character through the Typewriter component

### Component Boundaries

- **CatalogPage:** Orchestrates search, filters, and product table
- **ProductsVirtualTable:** Handles virtualization and infinite scroll logic
- **ProductDrawer:** Displays product details and AI summary section
- **Typewriter:** Reusable component for character-by-character text animation

## Notes on Trade-offs & What I'd Do with More Time

**Persisting AI summaries:** The project includes a `useLocalStorage` hook that could be integrated with the ProductDrawer to persist generated summaries per product. This would prevent re-fetching quotes and re-running the typewriter animation when reopening the same product.

**Additional improvements:** With more time, I'd refine loading and error states with better skeleton screens, add accessibility improvements (example: keyboard navigation for the table), polish the UI with more refined spacing and transitions, and add unit tests for critical hooks and utilities.
