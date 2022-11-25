import React from 'react'
import Modal from '../Modal/Modal'

interface MessageModalProps {
  isOpened: boolean
  handleModalClosed: () => void
  actionClicked: () => void
}

const MessageModal = ({ isOpened, handleModalClosed, actionClicked }: MessageModalProps) => {
  return (
    <Modal
      title='Send a Message'
      isOpened={isOpened}
      closeButtonClicked={handleModalClosed}
      actionClicked={actionClicked}
    >
      <p>TITLE</p>
      <input type='text' />
      <p>TEXT</p>
      <textarea />
    </Modal>
  )
}

export default MessageModal
