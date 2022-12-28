export type Post = {
  topic: string
  slug: string
  content: string
}

export type PostQueryModel = {
  posts: Post[]
}
