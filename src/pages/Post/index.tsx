import { useCallback, useEffect, useState } from 'react'
import { PostHeader } from './components/PostHeader'
import { api } from '../../lib/axios'
import { IPost } from '../Blog'
import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoad, setIsLoad] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoad(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoad(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <>
      <PostHeader isLoad={isLoad} postData={postData} />
      {!isLoad && <PostContent content={postData.body} />}
    </>
  )
}
