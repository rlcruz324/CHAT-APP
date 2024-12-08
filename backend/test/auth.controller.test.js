// beforeEach(() => {
//     fetch.resetMocks();
//   });

test('Signup a User', async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzU0ZGFjMDJlNmE0YTAyMmRiZjAwZDciLCJpYXQiOjE3MzM2MTQyNzIsImV4cCI6MTczNDkxMDI3Mn0.5vke6lWy5OJa0OKDoUy7yPD2SD6o8ZL_70pJTvKbuTE");

    const raw = JSON.stringify({
    "fullName": "Test1",
    "username": "test1",
    "password": "123456",
    "confirmPassword": "123456",
    "gender": "female"
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:5000/api/auth/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})

test('Signup a User', async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzU0ZGFjMDJlNmE0YTAyMmRiZjAwZDciLCJpYXQiOjE3MzM2MTQyNzIsImV4cCI6MTczNDkxMDI3Mn0.5vke6lWy5OJa0OKDoUy7yPD2SD6o8ZL_70pJTvKbuTE");

    const raw = JSON.stringify({
    "fullName": "Test1",
    "username": "test1",
    "password": "1234",
    "confirmPassword": "123456",
    "gender": "female"
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:5000/api/auth/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})

test('Signup a User', async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzU0ZGFjMDJlNmE0YTAyMmRiZjAwZDciLCJpYXQiOjE3MzM2MTQyNzIsImV4cCI6MTczNDkxMDI3Mn0.5vke6lWy5OJa0OKDoUy7yPD2SD6o8ZL_70pJTvKbuTE");

    const raw = JSON.stringify({
    "fullName": "Test1",
    "username": "test1",
    "password": "1234",
    "confirmPassword": "123456",
    "gender": "female"
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:5000/api/auth/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})

test('Login a User', async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzU0ZGFjMDJlNmE0YTAyMmRiZjAwZDciLCJpYXQiOjE3MzM2MTQyNzIsImV4cCI6MTczNDkxMDI3Mn0.5vke6lWy5OJa0OKDoUy7yPD2SD6o8ZL_70pJTvKbuTE");
    
    const raw = JSON.stringify({
      "username": "Tuffy1",
      "password": "123456"
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:5000/api/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
});

test('Logout a User', async() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzUzYzg5MTM0MWFlNTAyODVmYzQ5NDYiLCJpYXQiOjE3MzM2MjgwNDUsImV4cCI6MTczNDkyNDA0NX0.ve8EABcsSLrQHwdF4kB-DpBdJ3Wx7_hIShLsKPZ5_vc");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://localhost:5000/api/auth/logout", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
});