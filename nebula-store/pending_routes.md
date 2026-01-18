# Future Route Implementation Plan

These routes will be implemented later to complete the e-commerce experience.

## 1. Authentication & User Flow (Frontend)
- [x] Sign Up / Registration (`/register`)
- [x] Sign In / Login (`/login`)
- [x] Forgot Password (`/forgot-password`)
- [ ] Reset Password
- [x] **User Dashboard / Account (`/account`)**
    - [x] Account Overview (`/account/dashboard`)
    - [x] Order History & Tracking (`/account/orders`)
    - [x] Profile Settings (`/account/profile`)
    - [x] Saved Addresses (`/account/addresses`)
    - [ ] Wishlist (Optional - *Currently Removed*)

## 2. Trust & Informational Pages
- [ ] About Us (`/about`)
- [ ] FAQ (`/faq`)
- [ ] Terms & Conditions (`/terms`)
- [ ] Privacy Policy (`/privacy`)
- [ ] Shipping & Returns Policy (`/shipping-policy`)

## 3. Order Management
- [x] Dedicated Order Success Page (`/order-confirmation/:id`)
- [ ] Public Order Tracking Page

## 4. Utility
- [ ] Custom 404 Error Page
- [ ] Maintenance Mode Page

## 5. Admin / Back-Office Dashboard (`/admin/*`)
- [x] **Overview / Analytics**: Sales charts, order volume, visitor stats.
- [x] **Catalog Management**:
    - [x] Product List & Search
    - [x] Inventory & Stock Quick-Edit
    - [x] Add / Edit Product (Rich Editor UI)
    - [x] Category & Sub-category Management
- [x] **Sales & Orders**:
    - [x] Order Management List
    - [ ] Order Details View (Invoice, Shipping Label)
- [x] **Promotions & Moderation**:
    - [x] Campaign List (Flash Sales, Seasonal)
    - [x] Review Moderation Queue
- [x] **Communication**:
    - [x] Support Desk (Ticket System)
- [x] **Customers**:
    - [x] Customer Directory
    - [ ] Customer Detail (Purchase history, activity)
- [x] **Site Configuration**:
    - [x] General Settings (SEO, Logos, Contact)
    - [x] Payment Gateway Configuration (Keys for bKash/Nagad/Cards)
    - [x] Shipping Zone & Rate Setup
- [ ] **Administration**:
    - [x] Reports & Analytics Ledger
    - [ ] Admin User Management
    - [ ] Role-based Access Control (RBAC)
    - [ ] System Logs

---
*Note: All pages will follow the "Raw Design" (zero border-radius) aesthetic.*
