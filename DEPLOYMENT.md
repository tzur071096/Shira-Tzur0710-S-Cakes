# Deployment Guide for Shira's Cakes Website

## Prerequisites

1. **GitHub Account**: For version control and deployment
2. **Vercel Account**: For hosting (recommended)
3. **Resend Account**: For email functionality
4. **Domain (Optional)**: For custom domain setup

## Step-by-Step Deployment

### 1. Prepare the Repository

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Shira's Cakes website"

# Create GitHub repository
# Go to GitHub.com and create a new repository named "shiras-cakes"
# Then push your code:

git remote add origin https://github.com/YOUR_USERNAME/shiras-cakes.git
git branch -M main
git push -u origin main
```

### 2. Set Up Resend

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Create a new API key
4. Note down your API key for the next step

### 3. Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `shiras-cakes` repository
5. Configure environment variables:
   - `RESEND_API_KEY`: Your Resend API key
6. Click "Deploy"

### 4. Configure Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add your custom domain (e.g., `shirascakes.com`)
4. Follow DNS configuration instructions

### 5. Test the Website

1. Visit your deployed URL
2. Test the contact form
3. Verify all images load correctly
4. Check mobile responsiveness

## Environment Variables

Create these in your Vercel dashboard:

```
RESEND_API_KEY=re_xxxxxxxxxx
```

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] Contact form sends emails
- [ ] All images display properly
- [ ] Mobile version works
- [ ] Social media links work
- [ ] Phone number is clickable
- [ ] Navigation scrolls to sections
- [ ] Sticky bar appears on scroll

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths in `public/images/`
2. **Form not working**: Verify Resend API key
3. **Styling issues**: Check Tailwind CSS compilation
4. **Build errors**: Check for TypeScript errors

### Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally with `npm run dev`
4. Check browser console for errors

## Maintenance

### Regular Updates

1. **Content Updates**: Update portfolio images, reviews, pricing
2. **Social Media**: Keep Instagram and Facebook feeds updated
3. **SEO**: Monitor search engine rankings
4. **Analytics**: Set up Google Analytics (optional)

### Backup

- Repository is automatically backed up on GitHub
- Vercel provides automatic backups
- Keep local copies of important files

## Performance Optimization

The website is already optimized for:
- ✅ Image optimization with Next.js
- ✅ Responsive design
- ✅ SEO meta tags
- ✅ Fast loading times
- ✅ Mobile-first approach

## Security

- ✅ Form validation
- ✅ Email sanitization
- ✅ HTTPS enabled
- ✅ Secure API endpoints

## Success Metrics

Track these metrics to measure success:
- Contact form submissions
- Page load times
- Mobile traffic
- Social media engagement
- Search engine rankings
