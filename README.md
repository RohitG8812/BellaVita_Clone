# BellaVita Clone 🌟

## About the Project

BellaVita Clone is a Frontend e-commerce website built using the Frontead Technologies. This project replicates the user experience of the BellaVita website, providing a seamless and interactive interface for users to browse, search, and purchase Perfumes, Body Care, Cosmetics, etc products. It includes both frontend and firebase(as a backend service), offering a fully responsive and pleasant user interface.

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

- used **Firebase** as a backend service provider.
- **Firebase DB** serves as the database to store user and product data.
- Sensitive information such as `API_key` is protected using a `.env` file.

## Images 🖼️

### Homepage

![Homepage](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/homepage.png?raw=true)

### Multiproduct Page

![Multiproduct Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/multipleproducts.png?raw=true)

### Single Product Page

![Single Product Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/singleproduct.png?raw=true)

### Cart Page

![Cart Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/cartpage1.png?raw=true)

### Check Out Page

![Check Out Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/cartpage2.png?raw=true)

### Payment Page

![Payment Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/paymentpage.png?raw=true)

### Login Page

![Login Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/login.png?raw=true)

### Signup Page

![Signup Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/register.png?raw=true)

### Custumer Reviews

![Custumer Reviews](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/custumerreviewssection.png?raw=true)

### Profile Page

![Profile Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/profilepage.png?raw=true)

### My Order Page

![My Order Page](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/allOrder.png?raw=true)

### Filter

![Filter](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/filter.png?raw=true)

### Homepage Full

![Homepage Full](https://github.com/RohitG8812/BellaVita_Clone/blob/main/src/assets/preview/homepagefull.png?raw=true)

## Installation 🏗️

To get started with this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/RohitG8812/BellaVita_Clone.git

2. Navigate to the project directory:

   ```bash
    cd .\BellaVita_Clone\

3. Install the packages for mui and Firebase:

   ```bash
   install MUI:
   npm install @mui/material @emotion/react @emotion/styled
   
   install Firebase auth or Database:
   npm install firebase

4. Create a .env file in the public directory and add the following environment variables:

   ```bash
   VITE_FIREBASE_API_KEY={YOUE API KEY}

5. Start the server:

    ```bash
    npm run dev
    
