import ReactMarkdown from 'react-markdown'
import { IPost } from '../..'
import { relativeDateFormater } from '../../../../utils/formater'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
  body: string
}

export function Post({ post, body }: PostProps) {
  const formatedDate = relativeDateFormater(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formatedDate}</span>
      </div>
      <p>
        <ReactMarkdown>{body}</ReactMarkdown>
      </p>
    </PostContainer>
  )
}
