import { SpinnerContainer } from './styles'

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </SpinnerContainer>
  )
}
