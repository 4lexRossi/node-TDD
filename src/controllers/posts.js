class PostsController {
  constructor (Post) {
    this.Post = Post
  }

  async findAll (req, res) {

    res.send([{
      id: '56cb91bdc3464f14678934aa',
      Title: 'Default',
      content: 'loren ipsum',
      author: 'Alex Rossi'
    }])
  }
}

export default PostsController
