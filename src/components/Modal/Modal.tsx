import React from 'react'
import { createPortal } from 'react-dom'
import {
  ButtonsContainer,
  ModalButton,
  ModalContent,
  ModalOverlay,
  ModalView,
} from './Modal.styled'
import { Modal as PageModal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './Modal.css'

interface ModalProps {
  isOpened: boolean
  children: JSX.Element | JSX.Element[]
  title?: string
  closeButtonClicked: () => void
  actionClicked: () => void
}

const Modal = ({ isOpened, children, title, closeButtonClicked, actionClicked }: ModalProps) => {
  // if (!isOpened) return null
  // return createPortal(
  //   <div>
  //     <ModalOverlay></ModalOverlay>
  //     <ModalView>
  //       <h2>{title}</h2>
  //       <ModalContent>
  //         <div className='content'>{children}</div>
  //       </ModalContent>
  //     </ModalView>
  //   </div>,
  //   document.getElementById('modal')!
  // )
  return (
    <PageModal classNames={{modal:'modal'}}  open={isOpened} onClose={closeButtonClicked}>
      <h2>{title}</h2>
      <ModalContent>{children}</ModalContent>
      <ButtonsContainer>
        <ModalButton className='close-button' onClick={closeButtonClicked}>
          Close
        </ModalButton>
        <ModalButton className='close-button' action onClick={actionClicked}>
          Send
        </ModalButton>
      </ButtonsContainer>
    </PageModal>
  )
}

export default Modal
