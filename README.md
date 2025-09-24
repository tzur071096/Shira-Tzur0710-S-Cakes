# Shira's Cakes - Custom Cake Business Website

A professional, elegant landing page for Shira's Cakes - a custom cake business run by Shira Tzur, a 19-year-old self-taught baker and University of Texas at Austin student.

## Features

- 🎂 **Custom Cake Ordering**: Professional order form with Resend email integration
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🎨 **Pink & White Theme**: Professional, elegant color scheme
- 📸 **Portfolio Gallery**: Showcase of cake creations with filtering
- ⭐ **Customer Reviews**: Social proof with dummy reviews
- 📍 **Contact Information**: Map integration and contact details
- 📱 **Social Media Feeds**: Instagram and Facebook integration
- 📞 **Sticky Contact Bar**: Always-visible contact information
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and Twitter cards

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Email**: Resend for form submissions
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key for email functionality
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Optional: Custom domain for emails
# RESEND_DOMAIN=shirascakes.com
```

### 3. Get Resend API Key

1. Sign up at [Resend.com](https://resend.com)
2. Create a new API key
3. Add it to your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Email API endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with order form
│   ├── Services.tsx      # Services and pricing
│   ├── Portfolio.tsx    # Gallery with filtering
│   ├── About.tsx         # About Shira section
│   ├── Reviews.tsx       # Customer reviews
│   ├── Contact.tsx       # Contact information
│   ├── SocialFeeds.tsx   # Social media feeds
│   └── StickyBar.tsx     # Sticky bottom bar
├── lib/                  # Utility functions
└── types/                 # TypeScript types
```

## Customization

### Colors
The website uses a pink and white color scheme. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary-pink: #f8b5c1;
  --secondary-pink: #fce4e8;
  --accent-pink: #f4a6b7;
}
```

### Content
- Update business information in components
- Replace dummy reviews with real ones
- Add your own images to `public/images/`
- Update social media links

### Images
- Logo: `public/images/logo.jpg`
- Portfolio: `public/images/1.jpg` through `public/images/18.jpg`

## Business Information

- **Business**: Shira's Cakes
- **Owner**: Shira Tzur
- **Phone**: +1 214.677.6273
- **Address**: 7909 Kettlewood Ct, Plano, TX
- **Instagram**: @shirascakes
- **Facebook**: Cakes by Shira

## Support

For questions or support, contact:
- Email: shira@shirascakes.com
- Phone: +1 214.677.6273

## License

This project is created for Shira's Cakes business use.