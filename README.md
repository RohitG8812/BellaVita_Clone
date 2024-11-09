# BellaVita Clone 🌟

## About the Project

BellaVita Clone is a Frontead e-commerce website built using the Frontead Technologies. This project replicates the user experience of the BellaVita website, providing a seamless and interactive interface for users to browse, search, and purchase Perfumes, Body Care, Cosmetics, etc products. It includes both frontend and firebase(as a backend service), offering a fully responsive and pleasant user interface.

You can view the deployed project here: [BellaVita Clone](https://bella-vita-clone-one.vercel.app/) 🚀

## Tech Stack 🛠️

- **Frontend**: React, MUI
- **State Management**: React - Context, Redux
- **Backend**: Firebase
- **Database**: Firebase
- **Authentication**: Firebase AUTH
- **Packages**: npm (e.g., react-slick for carousels, react-hot-toast for toast, etc)

## Features ✨

- **Great UI**: Designed a modern and responsive layout.
- **Proper Routing**: Implemented to ensure smooth navigation between pages.
- **Responsive Design**: Fully adaptable to different screen sizes.
- **Search Functionality**: Allows users to search for products efficiently.
- **Sorting Options**: Helps users to sort and filter products based on various criteria.
- **Multiproduct Page**: Displays a list of products with filtering options.
- **Single Product Page**: Provides detailed information about each product with recent viewed products.
- **Cart Page**: Allows users to view and manage their selected items and continue to check out page.
- **Check Out Page**: Allows users to view the order summary and discount applied and apply coupon from various coupons and then move to payment Page.
- **Note** : for going to check out page firstly you need to login to the website
- **Payment Page**: Allows users to select and add the address of delivery and choose the payment option from Multiple options and then confirm the payment.
- **Login and Signup**: Secure authentication with Firebase Auth (Google login or signup also available).
- **My Orders**: Allows users to view the orders which them place and detailed page for the particluar order is also which shows all information of order.

## Frontend 🖥️

- Utilized **React** and **MUI** to create a visually appealing and responsive user interface.
- Managed application states (login, cart, loading) using **React - Context**.
- Implemented various packages via **npm**, including `react-slick` for carousel functionality, `react-hot-toast` for toast, etc.

## Backend ⚙️

- using **Firebase** as a backend service provider.
- **Firebase DB** serves as the database to store user and product data.
- Sensitive information such as `API_key` is protected using a `.env` file.

## Images 🖼️

### Homepage

![Homepage](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/homepage.png?raw=true)

### Homepage Small Screen

![Homepage](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/homeSmall.png?raw=true)

### Multiproduct Page

![Multiproduct Page](https://raw.githubusercontent.com/KaranChauhanji/Sephora_Clone/94fa2654fe3ed212edb1318223fdd86dfad7b4a4/Sephora-Frontend/public/multi.png)

### Single Product Page

![Single Product Page](https://raw.githubusercontent.com/KaranChauhanji/Sephora_Clone/94fa2654fe3ed212edb1318223fdd86dfad7b4a4/Sephora-Frontend/public/single.png)

### Cart Page

![Cart Page](https://raw.githubusercontent.com/KaranChauhanji/Sephora_Clone/94fa2654fe3ed212edb1318223fdd86dfad7b4a4/Sephora-Frontend/public/cart.png)

### Login Page

![Login Page](https://raw.githubusercontent.com/KaranChauhanji/Sephora_Clone/94fa2654fe3ed212edb1318223fdd86dfad7b4a4/Sephora-Frontend/public/Login.png)

### Signup Page

![Signup Page](https://raw.githubusercontent.com/KaranChauhanji/Sephora_Clone/94fa2654fe3ed212edb1318223fdd86dfad7b4a4/Sephora-Frontend/public/signup.png)

## Installation 🏗️

To get started with this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/KaranChauhanji/Sephora_Clone.git

2. Navigate to the project directory:

   ```bash
    cd sephora-clone

3. Install the dependencies for both frontend and backend:

   ```bash
   cd Sephora-Frontend
   npm install
   cd ../Sephora-Backend
   npm install

4. Create a .env file in the backend directory and add the following environment variables:

   ```bash
    MONGO_URL=<your-mongodb-url>
    JWT_SECRET=<your-jwt-secret>

5. Start the backend server:

   ```bash
    npm start

6. Start the frontend server:

    ```bash
    cd Sephora-Frontend
    npm run dev
    
