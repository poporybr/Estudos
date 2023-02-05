Coments 

//
class Comment {
  constructor(username, content) {
    this.username = username
    this.content = content
    this.createdAt = new Date()
  }
}

module.exports = Comment


//


Post

const Comment = require("./Comment")

class Post {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.createdAt = new Date()
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content))
  }
}

module.exports = Post


//


Author


const Post = require("./Post")

class Author {
  constructor(name) {
    this.name = name
    this.posts = []
  }

  writePost(title, body) {
    const post = new Post(title, body, this)
    this.posts.push(post)
    return post
  }
}

module.exports = Author


//


Index.js


const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)

