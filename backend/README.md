# Backend

This is the backend for the chat application.

---

## Features

### Core Functionalities
1. **Authentication**:closed_lock_with_key:
   - Secure signup and login using bcrypt for hashing passwords.
   - JWT-based token authentication.
   - Logout to clear session cookies.

2. **Real-Time Messaging**:repeat_one:
   - Messages are sent and received in real time using Socket.IO.
   - Conversations and messages are stored in MongoDB for persistence.

3. **User Management**:file_folder:
   - Fetches users for chat sidebar excluding the current user.

4. **Socket.IO Integration**:bell:
   - Tracks user connections and manages online user lists.
   - Broadcasts updates to clients about new messages and online users.

---

## File Structure

### **Controllers**
- **`auth.controller.js`**:
  Handles signup, login, and logout operations.
- **`message.controller.js`**:
  Manages sending and retrieving messages.
- **`user.controller.js`**:
  Handles fetching users for the sidebar.

### **Models**
- **`user.model.js`**:
  Defines the schema for user data.
- **`message.model.js`**:
  Manages individual messages.
- **`conversation.model.js`**:
  Tracks conversations between users.

### **Routes**
- **`auth.routes.js`**:
  Routes for authentication operations.
- **`message.routes.js`**:
  Routes for message operations with real-time support.
- **`user.routes.js`**:
  Routes for managing user data.

### **Utilities**
- **`connectToMongoDB.js`**:
  Establishes a connection to MongoDB.
- **`generateToken.js`**:
  Generates JWT tokens and sets them in cookies.

### **Middleware**
- **`protectRoute.js`**:
  Verifies JWT tokens to secure protected routes.

### **Socket**
- **`socket.js`**:
  Configures Socket.IO for real-time messaging and user connection tracking.

### **Server**
- **`server.js`**:
  Entry point for the backend server, integrating API routes, WebSocket, and database connection.

---

## Setup Instructions

### Prerequisites
1. Install **Node.js** (>= 14.x).
2. Set up a **MongoDB** database (local or cloud).
3. Install **npm**.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <backend-folder>
