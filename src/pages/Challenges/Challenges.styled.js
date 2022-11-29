import styled from 'styled-components'

export const Container = styled.div`
  /* background: yellow; */
  padding: 5px 5px 0 5px;
  min-width: 10px;
  max-width: 80vw;
  /* max-width: 100vw; */
  p {
    font-weight: bold;
    color: #aaa;
    /* margin-botton: 50px; */
  }
  @media scren and (max-width: 1000px) {
    max-width: 100vw;
  }
`
export const Row = styled.div`
  display: flex;
`
// export const Scroller = styled(Swiper)`
//   width: 100%;
// `
