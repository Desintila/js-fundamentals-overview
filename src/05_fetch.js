/**
 * Yo, let's practice our API knowledge.
 */

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;

// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.
function getNamesOfNicosRepos() {
    return fetch('https://api.github.com/users/minimumviableperson/repos').then(resp => resp.json())
        .then(data => {
            let array = []
            for (const repo of data) {
                array.push(repo.name)
            }
            return array
        })
}
console.log(getNamesOfNicosRepos())

// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.
// A post is: {
//   id: number,
//   title: string,
//   text: string
// }
// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);

function getPosts() {
    return fetch('http://localhost:3000/posts').then(resp => resp.json()).then(data => console.log(data))
}
getPosts()

function createPost(post) {
    return fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(resp => resp.json())
}

const post = {
    title: "New post",
    text: "using JSON server"
}
createPost(post)