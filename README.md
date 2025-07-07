# CRM Admin Panel (Next.js 15 + React 19)

An admin dashboard for a CRM system built with **Next.js App Router**.
It allows managing companies, promotions, and viewing dashboard statistics.

## 🌐 Demo

🔗 [CRM Admin Panel (Vercel)](https://crm-next-hazel.vercel.app/dashboard)

## 🚀 Tech Stack

| Category      | Technology / Tool                           |
| ------------- | ------------------------------------------- |
| Framework     | **Next.js 15.3.4** (App Router + Turbopack) |
| Core UI       | **React 19**                                |
| Styling       | **Tailwind CSS 3.4**                        |
| State / Data  | **@tanstack/react-query v5**                |
| Forms         | **Formik 2.4**                              |
| UI Components | **@headlessui/react 2.2**                   |
| Utilities     | `clsx`, ESLint 9 + Prettier 3               |
| Type Safety   | **TypeScript 5**                            |

## 📦 Features

- 🏢 **Companies**: create, edit, delete companies
- 🎁 **Promotions**: full CRUD functionality
- 📊 **Dashboard**: placeholder widgets for statistics
- 💬 Modal forms using Headless UI
- 🔄 Data fetching and cache invalidation via **React Query**

## ⚙️ Getting Started

```bash
git clone https://github.com/AndreyRuts/crm-next.git
cd crm-next

# Install dependencies
npm install

# Run in development mode (Turbopack)
npm run dev
```
