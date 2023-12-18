import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.5rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 44rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 44rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.125rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    @media (max-width: 44rem) {
      flex-direction: column;
      gap: 1.125rem;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
      color: ${({ theme }) => theme.colors['base-title']};
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.colors['base-label']};
    }

    @media (max-width: 44rem) {
      justify-content: center;
    }
  }
`
