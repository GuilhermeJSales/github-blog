import { IPost } from '../..'
import { relativeDateFormater } from '../../../../utils/formater'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formatedDate = relativeDateFormater(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formatedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
