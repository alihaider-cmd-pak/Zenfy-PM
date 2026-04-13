#!/usr/bin/env node

/**
 * Installation Guide - Zenfy E-Commerce Platform
 * 
 * This guide covers all necessary package installations and setup steps
 */

const setup = {
  title: "🚀 Zenfy Platform - Complete Setup Guide",
  
  requiredPackages: [
    {
      name: "nodemailer",
      package: "nodemailer@^6.9.0",
      reason: "Automated email notifications for orders",
      install: "npm install nodemailer",
      alreadyInstalled: false
    },
    {
      name: "lucide-react",
      package: "lucide-react@^0.577.0",
      reason: "Beautiful SVG icons for UI components",
      install: "npm install lucide-react",
      alreadyInstalled: true
    },
    {
      name: "mongoose",
      package: "mongoose@^9.3.1",
      reason: "MongoDB object modeling and schema validation",
      install: "npm install mongoose",
      alreadyInstalled: true
    },
    {
      name: "bcryptjs",
      package: "bcryptjs@^3.0.3",
      reason: "Password hashing for secure authentication",
      install: "npm install bcryptjs",
      alreadyInstalled: true
    },
    {
      name: "jsonwebtoken",
      package: "jsonwebtoken@^9.0.3",
      reason: "JWT token generation and verification",
      install: "npm install jsonwebtoken",
      alreadyInstalled: true
    }
  ],

  installationSteps: [
    "1. npm install nodemailer",
    "2. npm run dev",
    "3. Create .env.local with required variables",
    "4. Test the application at http://localhost:3000"
  ]
};

console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                   ${setup.title}                           ║
╚═══════════════════════════════════════════════════════════════════════════╝

📦 REQUIRED PACKAGES:
─────────────────────────────────────────────────────────────────────────────
`);

setup.requiredPackages.forEach((pkg, idx) => {
  const status = pkg.alreadyInstalled ? "✅ INSTALLED" : "⚠️  NEEDED";
  console.log(`${idx + 1}. ${pkg.name.padEnd(20)} ${status}`);
  console.log(`   Reason: ${pkg.reason}`);
  console.log(`   Command: ${pkg.install}\n`);
});

console.log(`
📋 SETUP CHECKLIST:
─────────────────────────────────────────────────────────────────────────────

[ ] Step 1: Install missing packages
    npm install nodemailer

[ ] Step 2: Create environment variables file
    cp .env.local.example .env.local
    
[ ] Step 3: Configure .env.local with your values:
    - GMAIL_USER: Your Gmail email address
    - GMAIL_APP_PASSWORD: 16-char app-specific password (see FRONTEND_INTEGRATION_GUIDE.md)
    - JWT_SECRET: Strong random string (e.g., openssl rand -hex 32)
    - MONGODB_URI: Your MongoDB connection string
    - SUPPORT_WHATSAPP: Your support WhatsApp number
    - SUPPORT_EMAIL: Your support email address
    - EASYPAISA_ACCOUNT: Your EasyPaisa account number

[ ] Step 4: Start development server
    npm run dev
    
[ ] Step 5: Visit http://localhost:3000 and test:
    - Browse products
    - Add to cart
    - Proceed to checkout
    - Test payment methods
    - Visit support page (/support)

[ ] Step 6: Test admin features
    - Visit admin login (/alihaidersiteadminpage/login)
    - Use demo credentials: admin@zenfy.com / admin123
    - Test order management

[ ] Step 7: Send test email
    - Create a test order with valid email
    - Check inbox for order confirmation email
    - If not received, check GMAIL_APP_PASSWORD configuration

═══════════════════════════════════════════════════════════════════════════╗

🎯 QUICK START:
─────────────────────────────────────────────────────────────────────────────

# Install all dependencies (including missing packages)
npm install && npm install nodemailer

# Create environment file
cp .env.local.example .env.local

# Edit .env.local with your configuration
nano .env.local  # or use your editor

# Start development server
npm run dev

# Open browser
open http://localhost:3000

═══════════════════════════════════════════════════════════════════════════╗

📂 NEW FILES CREATED:
─────────────────────────────────────────────────────────────────────────────

Frontend Components:
✅ /components/PaymentMethods.js      - Payment method selection UI
✅ /components/SupportContact.js      - Support & contact information

Pages:
✅ /app/support/page.js               - Support page with SupportContact

API Routes (Already created):
✅ /lib/emailService.js               - Email notification service
✅ /lib/authMiddleware.js             - JWT authentication middleware
✅ /app/api/auth/login/route.js       - Admin login endpoint

Documentation:
✅ /FRONTEND_INTEGRATION_GUIDE.md     - Complete integration guide
✅ /.env.local.example                - Environment variables template

═══════════════════════════════════════════════════════════════════════════╗

🔗 IMPORTANT LINKS:
─────────────────────────────────────────────────────────────────────────────

Pages:
- Home:       http://localhost:3000/
- Products:   http://localhost:3000/products
- Cart:       http://localhost:3000/cart
- Checkout:   http://localhost:3000/checkout
- Support:    http://localhost:3000/support
- Admin:      http://localhost:3000/alihaidersiteadminpage/dashboard
- Login:      http://localhost:3000/alihaidersiteadminpage/login

API Endpoints:
- Login:      POST /api/auth/login
- Orders:     GET /api/orders, POST /api/orders
- Products:   GET /api/products, POST /api/products

═══════════════════════════════════════════════════════════════════════════╗

⚙️ GMAIL SETUP (For Email Notifications):
─────────────────────────────────────────────────────────────────────────────

1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" (if not already enabled)
3. Navigate to "App passwords"
4. Select: Mail + Windows Computer (or your device)
5. Generate a new 16-character password
6. Copy the password and add to .env.local:
   GMAIL_APP_PASSWORD=<your-16-char-password>

The email service will use this to send order confirmations and admin notifications.

═══════════════════════════════════════════════════════════════════════════╗

💡 PAYMENT METHOD CONFIGURATION:
─────────────────────────────────────────────────────────────────────────────

Currently Configured:
✅ EasyPaisa (Active)     - Account: 03459708297
⏳ JazzCash (Coming Soon) - Disabled by default
📞 WhatsApp Support       - 03301958546
📧 Email Support          - ai.gamer.ff99@gmail.com

To Enable/Disable Payment Methods:
- Edit NEXT_PUBLIC_JAZZCASH_ENABLED in .env.local
- Update payment method logic in /components/PaymentMethods.js

═══════════════════════════════════════════════════════════════════════════╗

🧪 TESTING COMMANDS:
─────────────────────────────────────────────────────────────────────────────

# Build for production testing
npm run build

# Start production server
npm run start

# Lint code
npm run lint

═══════════════════════════════════════════════════════════════════════════╗

📞 SUPPORT:
─────────────────────────────────────────────────────────────────────────────

If you encounter issues:
1. Check FRONTEND_INTEGRATION_GUIDE.md troubleshooting section
2. Verify all environment variables in .env.local
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart development server (Ctrl+C, npm run dev)
5. Check terminal for error messages

═══════════════════════════════════════════════════════════════════════════╗

✨ YOU'RE ALL SET! 

Start the development server with: npm run dev
Then visit: http://localhost:3000

═══════════════════════════════════════════════════════════════════════════╗
`);
