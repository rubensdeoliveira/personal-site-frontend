type Post = {
  orderNum: number
  topic: string
  content: string
  slug: string
}

export type Category = {
  name: string
  slug: string
  posts: Post[]
}

export type CategoriesQueryModel = {
  categories: Category[]
}
