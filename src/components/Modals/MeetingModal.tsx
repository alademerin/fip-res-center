/* eslint-disable no-undef */
import React from 'react'
import Modal from '../../components/Modal/Modal'

interface MeetingModalProps {
  handleModalClosed: () => void
  isOpened: boolean
  actionClicked: () => void
}

const MeetingModal = ({ handleModalClosed, isOpened, actionClicked }: MeetingModalProps) => {
  return (
    <Modal
      closeButtonClicked={handleModalClosed}
      isOpened={isOpened}
      title='Request a meeting'
      actionClicked={actionClicked}
    >
      <p>TITLE:</p>
      <input type='text' required />
      <p>DATE:</p>
      <input type='date' required />
      <p>TIME:</p>
      <input type='time' required />
      <p>MESSAGE:</p>
      <textarea></textarea>
    </Modal>
  )
}

export default MeetingModal
