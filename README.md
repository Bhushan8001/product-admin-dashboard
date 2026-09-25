# Product Admin Dashboard

A responsive Product Admin Dashboard built with **Next.js, React, TypeScript, Tailwind CSS, Axios, and DummyJSON API**.

The application allows authenticated users to view, search, filter, sort, add, edit, and delete products through a clean responsive admin interface.

## Live Demo

**Deployed Application:**

https://producttadminn.netlify.app

### Demo Login

**Username:** `emilys`

**Password:** `emilyspass`

---

# Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios
* DummyJSON API
* Browser LocalStorage

---

# Features Completed

## Authentication

* Login page implemented.
* Login uses DummyJSON authentication API.
* Demo credentials supported:

  * Username: `emilys`
  * Password: `emilyspass`
* Displays an error for invalid credentials.
* Authentication token is stored locally.
* Axios automatically attaches the authentication token to API requests.
* Protected product routes.
* Logout functionality implemented.
* Prevents multiple login requests when the Login button is clicked repeatedly.

## Product Management

* Product listing implemented.
* Desktop responsive table.
* Mobile responsive product cards.
* Product image displayed.
* Product title displayed.
* Category displayed.
* Price displayed.
* Rating displayed.
* Stock displayed.
* Product ID displayed.
* Product details page implemented.
* Product images displayed.
* Product description displayed.
* Product reviews displayed.
* Product not-found handling implemented.

## Pagination

* API pagination implemented using `limit` and `skip`.
* Page numbers implemented.
* Previous button implemented.
* Next button implemented.
* Page size options:

  * 10
  * 20
  * 50
* Displays information such as:

`Showing 21–40 of 194`

* Invalid page values are safely handled.
* Page automatically returns to page 1 when search/filter/sort changes.

## Search

* Product search implemented using:

`/products/search?q=`

* Search input uses a 500ms debounce.
* API is not called for every keystroke.
* Search automatically returns to page 1.
* Previous requests are cancelled when a newer request is started.
* Request IDs are also used to prevent stale responses from replacing newer search results.
* Designed to handle slow API responses such as `delay=2000`.

## Category Filtering

* Categories loaded from the API.
* Category dropdown implemented.
* Products can be filtered by category.
* Changing category resets pagination to page 1.

### Search + Category Handling

DummyJSON does not provide a single endpoint that combines product search and category filtering.

The application handles this by:

1. Calling the product search endpoint.
2. Retrieving the matching search results.
3. Applying the category filter on the client.
4. Applying sorting.
5. Applying pagination.

This allows users to combine search and category filtering despite the API limitation.

## Sorting

Sorting implemented for:

* Price
* Rating
* Title

Both ascending and descending order are supported.

Example:

`sort=price&order=asc`

Sorting state is stored in the URL.

## Add Product

* Add Product page implemented.
* Product form implemented.
* Required field validation.
* Price validation.
* Stock validation.
* Thumbnail URL validation.
* Prevents multiple Save requests.
* Successful product creation is reflected immediately in the UI.

## Edit Product

* Edit Product page implemented.
* Existing product information is loaded into the form.
* Form validation implemented.
* Prevents duplicate Save requests.
* Updated product is immediately reflected in the application.

## Delete Product

* Delete functionality implemented.
* Confirmation popup shown before deletion.
* Product is removed from the UI after successful deletion.
* Prevents accidental deletion.

## DummyJSON Mutation Handling

DummyJSON simulates POST, PUT and DELETE requests rather than permanently modifying the remote dataset.

To provide a realistic dashboard experience, successful mutations are stored locally using `localStorage`.

The application maintains local information about:

* Added products
* Updated products
* Deleted products

This means the UI continues to reflect the user's changes during subsequent navigation and refreshes.

---

# URL State

The following product page values are stored in the URL:

* Page
* Page size
* Search
* Category
* Sort field
* Sort order

Example:

```text
/products?page=2&size=20&search=phone&category=smartphones&sort=price&order=asc
```

This provides:

* Refresh persistence
* Shareable URLs
* Browser back/forward support
* Reproducible product views

Invalid URL values are handled safely.

For example:

```text
?page=abc
```

falls back to a valid page.

Similarly, invalid page sizes fall back to the default page size.

---

# Loading, Empty and Error States

The application includes:

### Loading State

A loader is displayed while API requests are in progress.

### Empty State

When no products match the current search/filter, a message is displayed:

```text
No products found
Try changing your search or filters.
```

### Error State

API errors display an appropriate error message.

A **Retry** button is provided to retry the operation.

---

# Axios Architecture

All API requests are centralized.

```text
lib/
└── api/
    ├── client.ts
    ├── auth.ts
    └── products.ts
```

`client.ts` contains the shared Axios instance.

The Axios instance:

* Defines the API base URL.
* Adds authentication tokens automatically.
* Handles common API errors.
* Handles unauthorized responses.
* Supports request cancellation.

API calls are kept outside UI components.

---

# Project Structure

```text
product-admin-dashboard/
│
├── app/
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── products/
│   │   ├── [id]/
│   │   │   ├── edit/
│   │   │   │   └── page.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── new/
│   │   │   └── page.tsx
│   │   │
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── auth/
│   │   ├── AuthProvider.tsx
│   │   └── ProtectedRoute.tsx
│   │
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetailClient.tsx
│   │   ├── ProductForm.tsx
│   │   ├── ProductFilters.tsx
│   │   ├── ProductTable.tsx
│   │   ├── ProductsClient.tsx
│   │   └── Pagination.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── ErrorState.tsx
│       ├── Loader.tsx
│       └── Modal.tsx
│
├── lib/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── client.ts
│   │   └── products.ts
│   │
│   ├── auth-storage.ts
│   ├── product-storage.ts
│   ├── types.ts
│   └── utils.ts
│
├── .env.local
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd product-admin-dashboard
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://dummyjson.com
NEXT_PUBLIC_API_DELAY=0
```

For testing slow API responses and search race conditions:

```env
NEXT_PUBLIC_API_DELAY=2000
```

## 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 5. Login

Use the DummyJSON demo credentials:

```text
Username: emilys
Password: emilyspass
```

---

# Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

# Deployment

The application has been deployed to Netlify.

Live URL:

https://producttadminn.netlify.app

The required environment variable should be configured in the Netlify project:

```text
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

For normal production usage:

```text
NEXT_PUBLIC_API_DELAY=0
```

---

# Testing Checklist

The following scenarios were implemented for the assignment:

* [x] Login with valid credentials
* [x] Login with invalid credentials
* [x] Protected product pages
* [x] Logout
* [x] Product listing
* [x] Desktop table
* [x] Mobile cards
* [x] Pagination
* [x] Page size 10
* [x] Page size 20
* [x] Page size 50
* [x] Search
* [x] Debounced search
* [x] Search race-condition protection
* [x] Category filtering
* [x] Sorting by price
* [x] Sorting by rating
* [x] Sorting by title
* [x] Ascending sorting
* [x] Descending sorting
* [x] URL-synchronized state
* [x] Product details
* [x] Product images
* [x] Product description
* [x] Product reviews
* [x] Invalid product handling
* [x] Add product
* [x] Edit product
* [x] Delete product
* [x] Delete confirmation
* [x] Form validation
* [x] Loading state
* [x] Empty state
* [x] Error state
* [x] Retry functionality
* [x] Invalid URL parameter handling
* [x] Duplicate Login request prevention
* [x] Duplicate Save request prevention
* [x] Axios request interceptor
* [x] Centralized API layer
* [x] Local persistence of simulated mutations

---

# API

The application uses the DummyJSON API:

```text
https://dummyjson.com
```

Main endpoints used:

```text
POST /auth/login

GET /products

GET /products/search?q=

GET /products/categories

GET /products/category/{category}

GET /products/{id}

POST /products/add

PUT /products/{id}

DELETE /products/{id}
```

---

# Key Implementation Decisions

## 1. Axios

A single Axios instance is used for API communication.

This keeps authentication and error handling centralized rather than duplicating it across components.

## 2. URL-Based State

Search, filters, sorting and pagination are stored in URL query parameters.

This means the current dashboard state can be copied and shared.

## 3. Debounced Search

Search requests are delayed until the user stops typing for 500ms.

This reduces unnecessary API requests.

## 4. Stale Request Protection

When a new search starts:

1. The previous request is cancelled.
2. A new request ID is generated.
3. Only the latest request is allowed to update the UI.

This prevents slow responses from previous searches from overwriting newer results.

## 5. DummyJSON Mutations

Because DummyJSON does not permanently persist product mutations, successful changes are stored locally using `localStorage`.

This provides a persistent UI experience while still using the required DummyJSON API.

---

# Live Application

**Product Admin Dashboard**

https://producttadminn.netlify.app

Built with Next.js + React + TypeScript + Tailwind CSS + Axios.
