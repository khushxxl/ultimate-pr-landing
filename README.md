This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel (recommended)

# Supabase Database Actions

This module provides a set of utility functions for interacting with a Supabase database. It includes operations for authentication, user management, and CRUD (Create, Read, Update, Delete) operations on database tables.

## Functions

### Authentication

1. `signInWithSupabase(form: { email: string; password: string })`

   - Signs in a user with their email and password.

2. `signUpWithSupabase(form: { email: string; password: string; username: string })`

   - Registers a new user with their email, password, and username.

3. `getAuthenticatedUser()`
   - Retrieves the currently authenticated user.

### Database Operations

4. `addDataToSupabase(tableName: string, data: any)`

   - Inserts new data into a specified table.

5. `deleteDataFromSupabase(tableName: string, condition: { column: string; value: any })`

   - Deletes data from a specified table based on a condition.

6. `updateDataInSupabase(tableName: string, id: number, data: any)`
   - Updates data in a specified table for a given ID.

## Usage

First, import the required functions:
