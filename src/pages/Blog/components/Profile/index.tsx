import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/GuilhermeJSales.png" />
      <ProfileDetails>
        <header>
          <h1>Guilherme Jesus Sales</h1>
          <ExternalLink text="GitHub" href="#" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            GuilhermeJSales
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Freelancer
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            134 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
