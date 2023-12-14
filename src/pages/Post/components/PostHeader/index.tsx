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

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />
        <ExternalLink text="Ver no GitHub" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          GuilhermeJSales
        </li>

        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>

        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
