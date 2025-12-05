# 🛒 GreenCart – MERN Grocery Delivery Web App  
**Live Demo:** https://greencart-rho-silk.vercel.app/

## 📌 Overview  
GreenCart is a full-stack MERN grocery delivery web application with complete e-commerce functionality. Users can browse categories, view products, manage their cart, add delivery addresses, choose payment methods (Cash on Delivery or Stripe Online Payment), and place orders securely. The platform also includes a Seller Dashboard for product upload, stock control, and order management.

## ✨ Features

### 👤 User Features  
- Account Creation & Login (JWT authentication)  
- Fully responsive UI with Tailwind CSS  
- Browse grocery categories & all products  
- Product details with image gallery  
- Related products suggestion  
- Add to Cart, update quantity, remove items  
- Add & select delivery address  
- Stripe Online Payment + Cash on Delivery  
- Order history with ID, amount, items & payment type  
- Profile dropdown (My Orders, Logout)  
- Real-time toast notifications

### 🏪 Seller Dashboard ( /seller )  
- Seller authentication  
- Add new products (image, category, description, price, offer price)  
- Product list with stock toggle  
- Manage customer orders  
- View shipping address, payment type, date & amount  

### 🔧 Additional Highlights  
- Vite + React for fast performance  
- Context API for global state  
- Tailwind + Preline UI components  
- Mobile-friendly navigation  
- Custom theme colors & Google Font (Outfit)  
- Category-based dynamic routing  
- Reusable Product Card component  
- Smooth animations & hover effects  

## 🛠️ Tech Stack

### Frontend  
- React.js (Vite)  
- React Router DOM  
- Tailwind CSS  
- Preline UI  
- React Hot Toast  
- Context API  
- Google Fonts (Outfit)

### Backend  
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT Authentication  
- Bcrypt  
- Multer (Image Upload)  
- Stripe Payment Gateway  
- Dotenv  

## 📁 Project Structure

greencart/  
│  
├── client/  
│   ├── src/  
│   │   ├── assets/  
│   │   ├── components/  
│   │   ├── context/  
│   │   ├── pages/  
│   │   ├── App.jsx  
│   │   └── main.jsx  
│   ├── index.html  
│   └── package.json  
│  
└── server/  
    ├── models/  
    ├── routes/  
    ├── controllers/  
    ├── middleware/  
    ├── config/  
    ├── server.js  
    └── package.json

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository  
git clone <your-repository-url>  
cd greencart  

### 2️⃣ Install Dependencies  

#### Frontend  
cd client  
npm install  

#### Backend  
cd server  
npm install  

## 🔐 Environment Variables

### Client `/client/.env`  
VITE_CURRENCY=$  

### Server `/server/.env`  
MONGO_URI=your_mongodb_url  
JWT_SECRET=your_jwt_secret  
STRIPE_SECRET_KEY=your_stripe_secret_key  
CLOUDINARY_CLOUD_NAME=your_cloud  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  

## ▶️ Running the Application

### Start Backend  
cd server  
npm start  

### Start Frontend  
cd client  
npm run dev  

Frontend: http://localhost:5173  
Backend: http://localhost:5000  

## 📦 Core Modules

### Authentication  
- Signup/Login  
- JWT based auth  
- Protected routes  
- Profile dropdown with logout  

### Products  
- Category-wise listing  
- All products page  
- Product gallery  
- Related products  

### Cart & Checkout  
- Add/Remove items  
- Quantity updates  
- Address add & selection  
- COD + Stripe Payment  
- Order stored in DB  

### Orders  
- My Orders page  
- Order history & details  

### Seller Panel  
- Add product  
- Manage stock  
- View user orders  
- Shipping & payment info  

## 🚀 Deployment

### Frontend  
- Vercel / Netlify  

### Backend  
- Render / Railway / GCE  

### Database  
- MongoDB Atlas  

Update frontend API URLs after backend deployment.

## 🔗 Live Demo  
👉 https://greencart-rho-silk.vercel.app/

## 📝 License  
This project is licensed under the MIT License.

## 💡 Notes  
- Ensure Stripe keys are properly configured before enabling online payments.  
- Replace dummy product data with database content.  
- Protect seller routes securely.  
- Deploy frontend & backend separately and update API endpoints.
