
# Food Truck Admin Dashboard

## Overview
The **Food Truck Admin Dashboard** is a web-based application that allows food truck owners to manage their business efficiently. This dashboard provides real-time insights into orders, menu management, sales tracking, and customer interactions.

## Features
- **User Authentication**: Secure login/logout system for admin users.
- **Order Management**: View, accept, or cancel orders in real time.
- **Menu Management**: Add, update, or remove food items from the menu.
- **Sales Analytics**: Track revenue, popular items, and daily earnings.
- **Customer Management**: View customer details and manage feedback.
- **Inventory Tracking**: Monitor stock levels and get low-stock alerts.
- **Notifications**: Receive alerts for new orders and customer reviews.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel / (Frontend)

## Installation & Setup
### Prerequisites
- Node.js (v16+)
- MongoDB/PostgreSQL installed (if using a local database)
- Git

### Steps to Run Locally
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/food-truck-dashboard.git
   cd food-truck-dashboard
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Setup Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. **Run the server**:
   ```sh
   npm run server
   ```
5. **Start the frontend**:
   ```sh
   npm run client
   ```
6. **Access the dashboard**:
   Open `http://localhost:3000` in your browser.

## Deployment
To deploy, configure environment variables on your hosting provider and push the latest code.

## Contribution
Contributions are welcome! Follow these steps:
1. Fork the repo
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

## License
This project is licensed under the [MIT License](LICENSE).

