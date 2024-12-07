# Backend

This is the backend for the chat application.

---

## Features

### Core Functionalities
1. **Authentication**:closed_lock_with_key:
   - Secure signup and login.
   - Token authentication.
   - Logout.

2. **Real-Time Messaging**:repeat_one:
   - Messages are sent and received in real time using Socket.IO.
   - Conversations and messages are stored in MongoDB.

3. **User Management**:file_folder:
   - Fetches users for chat sidebar.

4. **Socket.IO Integration**:bell:
   - Tracks user connections and manages online user lists.
   - Shares updates to about new messages and online users.

---

## Folders

### **Controllers**
- **`auth.controller.js`**:
  Signup, login, and logout operations.
- **`message.controller.js`**:
  Sends and receives messages.
- **`user.controller.js`**:
  Fetches users for the sidebar.

### **Models**
- **`user.model.js`**:
  User data schema.
- **`message.model.js`**:
  Message management.
- **`conversation.model.js`**:
  Coversation tracking.

### **Routes**
- **`auth.routes.js`**:
  Authentication routing.
- **`message.routes.js`**:
  Message routing.
- **`user.routes.js`**:
  User data routing.

### **Utilities**
- **`connectToMongoDB.js`**:
  Connects to MongoDB.
- **`generateToken.js`**:
  Creates tokens and sets them in cookies.

### **Middleware**
- **`protectRoute.js`**:
  Verifies tokens.

### **Socket**
- **`socket.js`**:
  Sets up Socket.IO for real-time messaging.

### **Server**
- **`server.js`**:
  Main server. Connects to database using **`connectToMongoDB.js`** from db folder. It uses WebSocket through **`socket.js`** to ensure messages are in realtime. It has three routes:  
  - **`auth.routes.js`**: sends users to different routes. **`auth.controller.js`** has all the functions for 
  - **`message.routes.js`** uses *`message.controller.js`** to save messages to the database
and **`message.model.js`** to structure messages with sender id, reciever id, the message, and timestamps  
  - **`user.routes.js`** uses middleware **`protectRoute.js`** and verfies users by making sure only authorized users get. **`user.controller.js`** gets the userlist for the sidebar.

---

## Setup Instructions

### Prerequisites
1. Install **Node.js**.
2. Set up a **MongoDB** database.
3. Install **npm**.

