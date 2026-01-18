# Nebula Store - Frontend Remaining Tasks (TODO)

This document tracks the missing technical "organs" needed to transform the visual shell into a functional e-commerce platform.

## 🧠 1. State Management (Redux Toolkit)
The "Heart" of the application.
- [ ] Initialize Redux Store.
- [ ] Create `cartSlice` to manage items, quantities, and totals across the site.
- [ ] Create `authSlice` to persist user sessions and roles (Guest/Customer/Admin).
- [ ] Create `searchSlice` for global product filtering.

## 🛡️ 2. Security & Routing
The "Nervous System."
- [ ] Implement `ProtectedRoute` component.
- [ ] Lock `/admin/*` routes to Admin role only.
- [ ] Lock `/account/*` and `/checkout` to logged-in users only.
- [ ] Redirect unauthorized users to `/login`.

## 🔌 3. Data & API Integration
The "Nutrition."
- [ ] Replace all "Mock Data" arrays with `fetch()` or `Axios` calls to the backend.
- [ ] Implement the "Save Product" button logic in `ProductCreate.jsx`.
- [ ] Implement live "Sales Charts" in the `Reports.jsx` using real transaction data.
- [ ] Connect the "Complaint Box" form to the `Support` ticket system.

## 📑 4. Trust & Legal Pages
The "Boring but Mandatory" part.
- [ ] **About Us**: The mission and vision of Nebula.
- [ ] **FAQ**: Payments, shipping, and technical support questions.
- [ ] **Privacy Policy**: Data collection and GDPR compliance.
- [ ] **Terms of Service**: User agreements and purchase terms.
- [ ] **Shipping & Returns**: Delivery zones and refund procedures.

## 🛍️ 5. Order Fulfillment Flow
The "Result."
- [ ] **Order Success Page**: Create a high-end `/order-confirmation/:id` view.
- [ ] **Invoice PDF Generation**: Allow users to download invoices from their dashboard.
- [ ] **Email Templates**: Design basic frontend triggers for order emails.

## ✨ 6. Final Polish & Interactivity
The "Skin."
- [ ] Add `yup` or `formik` for deep form validation.
- [ ] Implement "Skeleton Loaders" for slow data fetching.
- [ ] Custom **404 Page**: A "Lost in Space" themed error page.
- [ ] Integrate a real Notification system (Toasts) for Success/Error messages.

---
*Status: Architecture is 100% designed. Logic is 0% implemented.*
