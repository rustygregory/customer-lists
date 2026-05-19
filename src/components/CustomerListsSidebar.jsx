import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  width: 332px;
  min-width: 332px;
  border-right: 1px solid #d8dcde;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
`

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 32px;
    right: 32px;
    border-bottom: 1px solid #e9ebed;
  }
  position: relative;
  padding-bottom: 12px;
`

const SidebarTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const SidebarActions = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #68737d;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover {
    background: #f3f4f4;
    color: #2f3941;
  }
`

const ListSection = styled.div`
  padding: 4px 0;
  flex: 1;
  overflow-y: auto;
`

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  padding: 16px 32px 8px;
  margin-top: 8px;
  margin-bottom: 4px;

  &::after {
    content: '';
    display: block;
    margin-top: 8px;
    border-bottom: 1px solid #e9ebed;
    margin-left: 0;
    margin-right: 0;
  }
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 32px;
  margin: ${props => props.$active ? '0 20px' : '0'};
  padding: ${props => props.$active ? '10px 12px' : '10px 32px'};
  font-size: 13px;
  font-weight: ${props => props.$active ? '600' : '400'};
  color: #2f3941;
  background: ${props => props.$active ? '#e0f0fa' : 'transparent'};
  border-radius: ${props => props.$active ? '4px' : '0'};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${props => props.$active ? '#e0f0fa' : '#f8f9f9'};
  }
`

const BottomSection = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 8px 0;
`

const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.19 10A6 6 0 1 1 14.32 5.5L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CollapseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function CustomerListsSidebar({ activeList, onSelectList, lists }) {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>Customer Lists</SidebarTitle>
        <SidebarActions>
          <IconButton title="Refresh">
            <RefreshIcon />
          </IconButton>
          <IconButton title="Collapse">
            <CollapseIcon />
          </IconButton>
        </SidebarActions>
      </SidebarHeader>

      <ListSection>
        <ListItem
          $active={activeList === 'all'}
          onClick={() => onSelectList('all')}
        >
          All customers
        </ListItem>

        <SectionLabel>Shared lists</SectionLabel>
        {lists.filter(l => l.section === 'shared').map(list => (
          <ListItem
            key={list.id}
            $active={activeList === list.id}
            onClick={() => onSelectList(list.id)}
          >
            {list.label}
          </ListItem>
        ))}
      </ListSection>

      <BottomSection>
        <ListItem onClick={() => {}}>
          Suspended users
        </ListItem>
      </BottomSection>
    </SidebarContainer>
  )
}

export default CustomerListsSidebar
