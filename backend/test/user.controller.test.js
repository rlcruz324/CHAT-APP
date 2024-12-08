test('Get Users', () => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzUzYzg5MTM0MWFlNTAyODVmYzQ5NDYiLCJpYXQiOjE3MzM2MzIzODEsImV4cCI6MTczNDkyODM4MX0.cVDpbmp-BNf6cD3NfdMZjFikUxRy0ICIMVHHMQj2g3U");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://localhost:5000/api/messages/674dc0a19c3afd0fc8046317", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
});