import React, { useRef, useEffect, useState } from 'react'
import './DemoModal.scss'

const DemoModal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  hasEscKeyExit,
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef(null)
  //test file save

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }
    setModalOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && hasEscKeyExit) {
      handleCloseModal()
    }
    if (event.key === 'Escape' && !hasEscKeyExit) event.preventDefault()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal()
      } else {
        modalElement.close()
      }
    }
  }, [isModalOpen])

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className='demo-modal-dialog'>
      {hasCloseBtn && (
        <button className='demo-modal__close-btn' onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  )
}

export default DemoModal
