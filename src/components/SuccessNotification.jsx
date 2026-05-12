import React, { useEffect } from 'react'
import styled from 'styled-components'

const NotificationWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  min-width: 320px;
  max-width: 400px;
  animation: slideIn 0.2s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const CheckIcon = styled.svg`
  flex-shrink: 0;
  margin-top: 2px;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #186146;
`

const Description = styled.span`
  font-size: 14px;
  color: #68737d;
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #68737d;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

function SuccessNotification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <NotificationWrapper>
      <CloseButton onClick={onClose}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </CloseButton>
      <ContentRow>
        <CheckIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" stroke="#186146" strokeWidth="1.5" fill="none"/>
          <path d="M6 10.5L8.5 13L14 7" stroke="#186146" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </CheckIcon>
        <Title>{message}</Title>
      </ContentRow>
    </NotificationWrapper>
  )
}

export default SuccessNotification
