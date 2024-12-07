# Frontend

Frontend uses react for real-time messaging.

---

## Features

:closed_lock_with_key:**User Authentication**: Secure login and signup forms.  
:repeat:**Real-Time Messaging**: Dynamic and instant communication with others.  
:bow:**Personalized Design**: Personalizes design according to user.

---

## Prerequisites

- **Node.js**: Node.js must be installed
- **Backend Server**: Backend server must be running

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rlcruz324/CHAT-APP.git
   cd CHAT-APP/frontend

## Dependencies

```
npm install

```

## Start

```
npm installnpm start

```


## Main Folders
* **`assets`**: contains notification sound for messages  
* **`components`**: UI
    * **`Sidebar`**: displays conversation and logout button. **`Sidebar.jsx`** displas the **`SearchInput`**, **`Conversations`**, and **`LogoutButton`**  
* **`Conversations.jsx`**: handles convo details
    * **`Messages`**: displays chat messages. **`MessageCcontainer.jsx`** is the main componenet that organizes messages. **`MessageInput.jsx`** handles user input. **`Messages.jsx`** displays individual messages using the **`MessagesSkeleton.jsx`**.  
* **`context`**: manages application states  
* **`hooks`**: uses logic for actions:  
     * **`useGetConversations.jsx`**: gets conversations for the sidebar  
     * **`useSendMessages.jsx`**: Handles sending messages  
     * **`useLogin.jsx`**: authenticats login  
     * **`useSignup.jsx`**: manages signup form  
* **`pages.jsx`**: has the main page  
     * **`Home.jsx`**: shows the main chat  
     * **`SignUp.jsx`**: signup with **`GenderCheckBox`** for profile settings  
     * **`Login.jsx`**: validates login  
* **`utils`**: utilities  
     * **`extractTime.js`**: timestamps  
     * **`emojis.js`**: emojis for users to use  
* **`zustand`**: dependencies

## Files
1. **`App.jsx`**: semds iser tp different pages depending on their path
   * **`http://localhost:3000/login`**
2.  **`main.jsx`**: calls **`App.jsx`** to run chat

## Logic Flow
# Hooks
* __Home__: Uses sidebar and message hooks
* __Sidebar__: **`SearchInput.jsx`** creates the search box and uses **`useGetConversations.jsx`** hook  
**`Logoutbutton.jsx`** uses **`useLogout.jsx`** hook.
* __Messages__: Uses **`useGetMessages.jsx`**, **`useListenMessages.jsx`**, and **`useSendMessages.jsx`**
* __SignUp__: Uses **`useSignup.jsx`** for user registration
* __Login__: Uses **`useLogin.jsx`** for user authentication and sets up the login page with the signup fields. Uses **`handleSubmit`** to check the database to confirm user and password match.  





