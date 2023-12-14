import { useCallback, useEffect, useState } from 'react'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './styles'
import { api } from '../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  use: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoad, setIsLoad] = useState(true)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoad(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoad(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostsListContainer>
    </>
  )
}
