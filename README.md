
# ChatterBox

> An easy-to-use chat application for college students that connects them seamlessly with students from their school.

---

## Product Vision

For college students who need a simple chat application, the ChatterBox is a chat tool that is integrated with college campuses' LMS, such as Canvas,
and allows quick conversations for all students. Unlike other products, our product makes it easy to connect
and chat with other students at their school in private messages.

---

## How to Run Chatterbox

### Backend

1. **Set Up the Backend**:
   - Download zip file and unzip it.
   - Open the folder in VS Code.
   - Open a terminal in VSCode.
   
2. **Install Dependencies**:  
*Run codes one at a time*  
   ```
   npm install nodemon
   npm run server

### Frontend
1. **Set Up Frontend**
   Open a NEW terminal  
     *Run codes one at a time*  
   ``` 
   cd frontend
   npm install vite
   npm run dev

2. **Open App**
   Open your browser (preferably Chrome) and go to
   ```
   http://localhost:3000

## Terminal Commands
```
cd frontend
npm create vite@latest
```
Choose __React__ and __JavaScript__
```
npm install  
npm run dev  
cd backend
cd ..
npm init -y
```
(make server.js in backend)

## Terminal Commands to install packages
```
npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken
```
- __express__: to initialize and express server  
- __dotenv__: to  read enviornmental variables under dotenv file
- __cookie-parser__: to parse cookies
- __bcryptjs__: to hash passwords
- __mongoose__: to connect database and interact with it
- __socket.io__: to have real time communication
- __jsonwebtoken__: to create tokens

## More Terminal Commands: 
(allows the browser to update in the background)  
```
npm install nodemon --save-dev
```

###### db password
Cdpimo7eUaa5BvHC

###### gen rand pass
openssl rand -base64 32
