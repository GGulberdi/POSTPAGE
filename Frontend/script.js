// const getUsers = () => {
//     axios.get('http://localhost:8080/getPosts')
//     .then(response => {
//      const users = response.data.data;
//      console.log(`GET users`, users);
//    })
//     .catch(error => console.error(error));
//    };
//    getUsers();



const list = document.querySelector('.list-item',)

// const url = "https://jsonplaceholder.typicode.com/users"
  const url = 'http://localhost:8080/getPosts';
// The API call was successful!
fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    // This is the JSON from our response
    console.log(data);
}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});




// function getList(arr){

//     return arr.map(item=>{
//         <li>{item.title}</li>
//     })

// }