const fs = require('fs');
const path = require('path');

const directories = [
  'src/app/(public)/about',
  'src/app/(public)/seva/gau-seva',
  'src/app/(public)/seva/old-age-home',
  'src/app/(public)/seva/visually-impaired',
  'src/app/(public)/events/[slug]',
  'src/app/(public)/committee',
  'src/app/(public)/contact',
  'src/app/(public)/donate',
  'src/app/(public)/jajmaan',
  'src/app/(admin)/admin/events',
  'src/app/(admin)/admin/donations',
  'src/app/(admin)/admin/members',
  'src/app/api/events',
  'src/app/api/jajmaan',
  'src/app/api/donate',
  'src/app/api/contact',
  'src/app/api/webhooks/razorpay',
  'src/components/ui',
  'src/components/layout',
  'src/components/sections',
  'src/components/animations',
  'src/lib/db',
  'src/lib/utils',
  'src/lib/types',
  'src/hooks',
  'public/assets/images',
  'public/assets/icons'
];

const files = [
  'src/app/(public)/page.tsx',
  'src/app/(public)/about/page.tsx',
  'src/app/(public)/seva/gau-seva/page.tsx',
  'src/app/(public)/seva/old-age-home/page.tsx',
  'src/app/(public)/seva/visually-impaired/page.tsx',
  'src/app/(public)/events/page.tsx',
  'src/app/(public)/events/[slug]/page.tsx',
  'src/app/(public)/committee/page.tsx',
  'src/app/(public)/contact/page.tsx',
  'src/app/(public)/donate/page.tsx',
  'src/app/(public)/jajmaan/page.tsx',
  'src/app/(admin)/admin/page.tsx',
  'src/app/(admin)/admin/layout.tsx',
  'src/app/(admin)/admin/events/page.tsx',
  'src/app/(admin)/admin/donations/page.tsx',
  'src/app/(admin)/admin/members/page.tsx',
  'src/app/api/events/route.ts',
  'src/app/api/jajmaan/route.ts',
  'src/app/api/donate/route.ts',
  'src/app/api/contact/route.ts',
  'src/app/api/webhooks/razorpay/route.ts',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/AdminSidebar.tsx',
  'src/lib/db/prisma.ts',
  'src/lib/utils/helpers.ts',
  'src/lib/types/index.ts'
];

// Create Directories
directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create Empty Files
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, '// Ready for code');
    console.log(`📄 Created file: ${file}`);
  }
});

console.log('🚀 Folder structure generation complete!');