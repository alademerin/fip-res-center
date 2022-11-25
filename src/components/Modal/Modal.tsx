import React from 'react'
import { createPortal } from 'react-dom'
import {
  ButtonsContainer,
  ModalButton,
  ModalContent,
  ModalOverlay,
  ModalView,
} from './Modal.styled'

interface ModalProps {
  isOpened: boolean
  children: JSX.Element | JSX.Element[]
  title?: string
  closeButtonClicked: () => void
  actionClicked: () => void
}

const Modal = ({ isOpened, children, title, closeButtonClicked, actionClicked }: ModalProps) => {
  if (!isOpened) return null
  return createPortal(
    <div>
      <ModalOverlay></ModalOverlay>
      <ModalView>
        <h2>{title}</h2>
        <ModalContent>
          <div className='content'>{children}</div>
        </ModalContent>
        <ButtonsContainer>
          <ModalButton className='close-button' onClick={closeButtonClicked}>
            Close
          </ModalButton>
          <ModalButton className='close-button' action onClick={actionClicked}>
            Send
          </ModalButton>
        </ButtonsContainer>
      </ModalView>
    </div>,
    document.getElementById('modal')!
  )
}

export default Modal
