function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

function getUser(id) {
   return fetch('https://jsonplaceholder.typicode.com/users' + id)
        .then(value => value.json())
}

function getPostOfUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(value => value.json())
}

function getCommentsOfUser() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(value => value.json())
}


    export {getUsers, getUser, getPostOfUser, getCommentsOfUser}