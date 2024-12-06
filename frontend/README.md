
# Frontend
The main folders of the front end are:
* assets
* components
* context
* hooks
* pages
* utils
* zustand (dependencies only)

### Additional Documents include:

1. App.jsx
     * sends the user to different pages depending on their path
     * Ex. host:3000/login sends you to login page
2. main.jsx
     * calls App.jsx to run chat app

## Pages
#### Home.jsx
Home creates a clear glassybox for all the components.
It uses the sidebar and MessageContainer components from the component folder.
#### SignUp
Sets up the signup page with the basic signup fields and placeholder text handle.
The submit option sends the inputs to the database.
Submit uses GenderCheckbox.jsx to handle the checkbox so it applies to the profile. 
This uses useSignup.js in hooks.

#### Login.jsx
Sets up the login page with the signup fields and uses handleSubmit to check the database to confirm user and password match.

###### Pages make the user interface and call the hooks. The hooks are the actual logic for each action. 

#### Hooks
Home: does not use hooks but the components sidebar and messages do  
__Sidebar:__  
SearchInput.jsx which creates the search box and uses useGetConversations.jsx hook  
Logoutbutton.jsx uses useLogout.jsx hook.  
__Messages:__  
userGetMessages.jsx  
useListenMessages.jsx  
useSendMessages.jsx  
__SignUp:__  
useSignup.jsx  
__Login:__  
useLogin.jsx  

## assets
Assets has the notification sound for messages.

## utils
Utils has emojis and extract time (timestamps).

## components
Components has the sidebar, messages, and skeleton folders.  
__Sidebar:__
Sidebar.jsx is the main one that home calls. It displays SearchInput, conversations, and the Logout button, which can be found in (SearchInput.jsx, Conversations.jsx, and LogoutButton.jsx)  
__Conversations:__  
Use conversation.jsx  
__Messages:__  
MessageContainer is the main one and it displays the mssages (messages.jsx). Input comes from MessageInput.jsx. Messages.jsx calls and uses MessageSkeleton.jsx from the skeletons folder to display messages.





# React + Vite

Provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


