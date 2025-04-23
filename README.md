# Stories Frontend

A modern Instagram-like stories application built with Next.js and TypeScript.

## Features

- User authentication (login/register)
- Protected routes
- Instagram-like UI
- Stories viewing (coming soon)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stories-frontend.git
cd stories-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following content:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_API_TIMEOUT=10000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── login/         # Login page
│   ├── register/      # Registration page
│   └── page.tsx       # Home page
├── components/        # Reusable components
├── contexts/         # React contexts
└── services/         # API services
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
