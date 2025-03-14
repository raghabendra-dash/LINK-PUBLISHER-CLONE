## LinkPublishers Advertiser Dashboard Clone :

### Objective

**Link Publisher** is a full-stack web application designed to streamline the process of purchasing and managing website related services. The platform connects users with a marketplace where they can browse available websites, place orders, and process payments. It includes robust authentication and real-time features.


> **Live Demo :** [CLICK ](https://link-publisher-clone-frontend.onrender.com)

> **Video Demo :**

> **Backend Demo :** [CLICK ](https://link-publisher-clone-backend-wai7.onrender.com)

The goal of this project is to integrate backend for **Link Publisher** that allows users to:

- Authenticate securely using **JWT**.

- Browse and manage a marketplace for purchasing website related services.

- Create and track orders.

- Process payments via **Stripe**.

- Test API endpoints using **Postman**.



### Technologies Used

**Frontend :**

- React with Vite 

- Tailwind CSS


**Backend :**

- Node.js 

- Express.js

- MongoDB

- Mongoose

- **JWT**for secure authentication.

- **Stripe**for payment gateway integration.


### Environment Variables

**Create a .env file in the root of the backend folder and add the following:**

MONGO_URL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database
PORT=5000
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173

### Running the Project

**Install dependencies :**

> npm install

**Run the backend server :**

> cd src/backend

> npm run dev

The backend will run on http://localhost:5000.

**Run the frontend server :**

> cd src

> npm run dev

The frontend will run on http://localhost:5173.


### Authentication Routes

:::register:::

>> POST:  http://localhost:5000/api/auth/register

{
    "name": "Admin User",
    "email": "admin@gmail.com",
    "password": "123456"
}



:::login::: [copy token without ""]


>> POST:  http://localhost:5000/api/auth/login


{
    "email": "admin@gmail.com",
    "password": "123456"                                   
}



:::Create Order[use JWT]:::

POST: http://localhost:5000/api/orders

**Header** :   Authorization  : Bearer ___token____

**Body**:

{
    "website": "test.com",
    "title": "SEO Package",
    "price": 400
}


:::GET Order[use JWT]::: 

>> GET:  http://localhost:5000/api/orders

**Header**: Authorization : Bearer ___Same Token___  with  remove body



:::SEO Tool Check:::

>> POST: http://localhost:5000/api/seotools

**HEADER **: Authorization : Bearer ___Same Token___

**BODY **:
{
  "domain": "test.com",
  "keywords": ["SEO", "optimization", "ranking"],
  "backlinks": 50,
  "rank": 1,
  "status": "active"
}


>> GET: /api/seotools

**HEADER**: Authorization : Bearer ___Same Token___ 


### Payment Routes

>> POST /api/payments/checkout

**Body :**

{
  "amount": 299,
  "currency": "INR",
  "paymentMethod": "stripe"
}


### Deployment

  Deployed with **Render**.

**_For any queries or feedback, feel free to reach out to me at [click](raghabendradash779@gmail.com)._**



