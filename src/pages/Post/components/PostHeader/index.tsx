import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../../Blog'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFormater } from '../../../../utils/formater'

interface PostHeaderProps {
  postData: IPost
  isLoad: boolean
}

export function PostHeader({ postData, isLoad }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formatedDate = relativeDateFormater(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoad ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no GitHub"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatedDate}
            </li>

            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
