let obj = { name: 'Kevin', age: 17 };
console.log(obj.age);

let objJson = JSON.stringify(obj);
console.log(objJson);

let objPar = JSON.parse(objJson);
console.log(objPar.name);

let postCont = document.getElementById('posts'); 

const showPosts = (posts) => {
    posts.forEach(post => {
        let title = document.createElement('h3');
        title.textContent = post.title;

        let body = document.createElement('p');
        body.textContent = post.body;

        postCont.appendChild(title);
        postCont.appendChild(body);
    });
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        showPosts(data);
    })
    .catch((error) => {
        console.error(error);
    });
