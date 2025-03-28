# **TIMEOFF - Vacation Scheduler** 🏖️

A web application for managing user vacations with role-based authentication called TimeOFF.

## **📌 Features**

✅ **User authentication** with NextAuth and Supabase  
✅ **Role-based access** (Admin/User)  
✅ **Interactive vacation calendar** with FullCalendar  
✅ **Protected routes**  
✅ **Responsive UI** with Tailwind CSS

---

## **🚀 Getting Started**

### **1️⃣ Prerequisites**

Make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (Latest LTS recommended)
- **[Yarn](https://yarnpkg.com/)** _(or use npm)_

---

### **2️⃣ Installation**

Clone the repository and install dependencies:

```sh
git clone https://github.com/Pluall/timeoff.git
cd timeoff
yarn install  # or npm install
```

---

### **3️⃣ Environment Variables**

Create a `.env.` file in the root directory and add:

```ini
NEXT_PUBLIC_SUPABASE_URL="https://hmwyzqrnwkigdlcomnmy.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtd3l6cXJud2tpZ2RsY29tbm15Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzA3NDU5NCwiZXhwIjoyMDU4NjUwNTk0fQ.3ZN8dqtY95omchC2AWN67KczBF3gwgd2vmY8Wv3Gwik"
SUPABASE_CLIENT_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtd3l6cXJud2tpZ2RsY29tbm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNzQ1OTQsImV4cCI6MjA1ODY1MDU5NH0._T5nL5TIFlTAG62zzf1hgYUmp9eLwFqsxb0k8VZoRag"
NEXTAUTH_SECRET='tpMv1/2NmeQnYCn9LXQHfb6Wt4L+R6vmsot30MzHCSo='

```

📌 **⚠️ NEVER expose `SUPABASE_SERVICE_ROLE_KEY` in frontend!**

---

### **5️⃣ Running the Project**

Start the development server:

```sh
yarn dev  # or npm run dev
```

There are two users registered for testing purposes with the following credentials:

- user role -> marcos@user.com - adminpassword
- admin role -> marcos@admin.com - adminpassword

The app will be available at: **[http://localhost:3000](http://localhost:3000)**

---

## **🛠️ API Endpoints**

| Method | Endpoint          | Description                  | Access     |
| ------ | ----------------- | ---------------------------- | ---------- |
| GET    | `/api/users`      | Fetch all users (Admin only) | Admin      |
| GET    | `/api/users/:id`  | Fetch a specific user        | User/Admin |
| POST   | `/api/auth/login` | User login                   | Public     |
| PUT    | `/api/users/:id`  | Update vacation days         | User       |

---

## **🔗 Tech Stack**

- **Next.js 15** (App Router)
- **TypeScript**
- **Supabase** (Database + Auth)
- **NextAuth.js** (Authentication)
- **Tailwind CSS** (Styling)
- **Shadcn/UI** (Styling)
- **FullCalendar** (Vacation selection)

---
