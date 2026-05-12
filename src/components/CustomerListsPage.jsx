import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Field, Input } from '@zendeskgarden/react-forms'
import CustomerListsSidebar from './CustomerListsSidebar'
import CustomersTable from './CustomersTable'
import { getCustomersForList } from './filterCustomers'
import CreateCustomerList from './CreateCustomerList'
import SuccessNotification from './SuccessNotification'

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
`

const MainArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  overflow: auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`

const HeaderLeft = styled.div``

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px 0;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 4px 0;
`

const LearnLink = styled.a`
  font-size: 14px;
  color: #1f73b7;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`

const BulkImportButton = styled(Button)`
  border-color: #1f73b7;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
`

const AddCustomerButton = styled(Button)`
  background-color: #1f73b7;
  border-color: #1f73b7;
  color: white;
  height: 40px;

  &:hover {
    background-color: #144a75;
    border-color: #144a75;
  }
`

const ActionsWrapper = styled.div`
  position: relative;
`

const ActionsButton = styled(Button)`
  background: transparent;
  border-color: #1f73b7;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;

  &:hover {
    background: #edf7ff;
  }
`

const ActionsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 160px;
  padding: 4px 0;
`

const ActionsDropdownItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  font-size: 14px;
  color: ${props => props.$destructive ? '#cc3340' : '#2f3941'};
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.$destructive ? '#fff0f1' : '#f8f9f9'};
  }
`

const SearchContainer = styled.div`
  margin-bottom: 16px;
  max-width: 400px;
`

const SearchInput = styled(Input)`
  padding-left: 36px;
`

const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #87929d;
  }
`

const CustomerCount = styled.div`
  font-size: 13px;
  color: #68737d;
  margin-bottom: 8px;
`

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6.5V9.5C9 10.0523 8.55228 10.5 8 10.5H2.5C1.94772 10.5 1.5 10.0523 1.5 9.5V4C1.5 3.44772 1.94772 3 2.5 3H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 1.5H10.5V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 7L10.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14L11.1 11.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const defaultLists = [
  { id: 'last30', label: 'Users created within the last 30 days', section: 'shared', access: 'any', conditions: [{ category: 'created', operator: 'is', value: '' }] },
  { id: 'gold', label: 'Gold members', section: 'shared', access: 'any', conditions: [{ category: 'tag', operator: 'is', value: 'gold' }] },
  { id: 'mylist', label: 'My list test', section: 'shared', access: 'only-you', conditions: [{ category: 'tag', operator: 'is', value: 'gold' }] },
  { id: 'test2', label: 'Test II', section: 'shared', access: 'any', conditions: [{ category: '', operator: '', value: '' }] },
  { id: 'again', label: 'Again a test', section: 'shared', access: 'specific-groups', conditions: [{ category: 'tag', operator: 'is', value: 'diamond' }] },
]

function CustomerListsPage() {
  const [activeList, setActiveList] = useState('all')
  const [lists, setLists] = useState(defaultLists)
  const [view, setView] = useState('list')
  const [editingList, setEditingList] = useState(null)
  const [actionsOpen, setActionsOpen] = useState(false)
  const [notification, setNotification] = useState(null)
  const actionsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target)) {
        setActionsOpen(false)
      }
    }
    if (actionsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [actionsOpen])

  const handleCreateList = () => {
    setEditingList(null)
    setView('create')
  }

  const handleEditList = () => {
    setActionsOpen(false)
    const currentList = lists.find(l => l.id === activeList)
    setEditingList(currentList)
    setView('create')
  }

  const handleSaveList = ({ name, access, conditions }) => {
    if (editingList) {
      setLists(lists.map(l => l.id === editingList.id ? { ...l, label: name, access, conditions } : l))
      setView('list')
      setNotification('Customer list updated')
    } else {
      const id = name.toLowerCase().replace(/\s+/g, '-')
      setLists([...lists, { id, label: name, section: 'shared', access, conditions }])
      setActiveList(id)
      setView('list')
      setNotification('Customer list created')
    }
  }

  const handleCancelCreate = () => {
    setView('list')
  }

  const isInsideList = activeList !== 'all'
  const activeListLabel = lists.find(l => l.id === activeList)?.label || 'Customers'

  return (
    <PageLayout>
      {notification && (
        <SuccessNotification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <CustomerListsSidebar
        activeList={activeList}
        onSelectList={setActiveList}
        lists={lists}
        onCreateList={handleCreateList}
      />
      {view === 'create' ? (
        <CreateCustomerList
          onSave={handleSaveList}
          onCancel={handleCancelCreate}
          initialName={editingList?.label || ''}
          initialAccess={editingList?.access || 'any'}
          initialConditions={editingList?.conditions || null}
          isEditing={!!editingList}
          onDelete={() => {
            setLists(lists.filter(l => l.id !== editingList.id))
            setActiveList('all')
            setView('list')
            setNotification('Customer list deleted')
          }}
          onClone={() => {
            const clonedName = `${editingList.label} (copy)`
            const clonedId = clonedName.toLowerCase().replace(/\s+/g, '-')
            setLists([...lists, { ...editingList, id: clonedId, label: clonedName }])
            setActiveList(clonedId)
            setView('list')
            setNotification('Customer list cloned')
          }}
          onDeactivate={() => {
            setView('list')
            setNotification('Customer list deactivated')
          }}
        />
      ) : (
      <MainArea>
        <Header>
          <HeaderLeft>
            <Title>{isInsideList ? activeListLabel : 'Customers'}</Title>
            <Subtitle>Add, search, and manage your customers (end users) all in one place.</Subtitle>
            <LearnLink href="#">
              Learn about this page <ExternalLinkIcon />
            </LearnLink>
          </HeaderLeft>
          <HeaderRight>
            {isInsideList ? (
              <ActionsWrapper ref={actionsRef}>
                <ActionsButton isBasic onClick={() => setActionsOpen(!actionsOpen)}>
                  Actions <ChevronDownIcon />
                </ActionsButton>
                {actionsOpen && (
                  <ActionsDropdown>
                    <ActionsDropdownItem onClick={handleEditList}>
                      Edit
                    </ActionsDropdownItem>
                    <ActionsDropdownItem onClick={() => {
                      setActionsOpen(false)
                      const currentList = lists.find(l => l.id === activeList)
                      const clonedName = `${currentList.label} (copy)`
                      const clonedId = clonedName.toLowerCase().replace(/\s+/g, '-')
                      setLists([...lists, { ...currentList, id: clonedId, label: clonedName }])
                      setActiveList(clonedId)
                      setNotification('Customer list cloned')
                    }}>
                      Clone
                    </ActionsDropdownItem>
                    <ActionsDropdownItem onClick={() => {
                      setActionsOpen(false)
                      setNotification('Customer list deactivated')
                    }}>
                      Deactivate
                    </ActionsDropdownItem>
                    <ActionsDropdownItem onClick={() => setActionsOpen(false)}>
                      Bulk import
                    </ActionsDropdownItem>
                    <ActionsDropdownItem $destructive onClick={() => {
                      setActionsOpen(false)
                      setLists(lists.filter(l => l.id !== activeList))
                      setActiveList('all')
                      setNotification('Customer list deleted')
                    }}>
                      Delete
                    </ActionsDropdownItem>
                  </ActionsDropdown>
                )}
              </ActionsWrapper>
            ) : (
              <BulkImportButton isBasic>
                Bulk import <ExternalLinkIcon />
              </BulkImportButton>
            )}
            <AddCustomerButton isPrimary>Add customer</AddCustomerButton>
          </HeaderRight>
        </Header>

        <SearchContainer>
          <SearchWrapper>
            <SearchIcon />
            <SearchInput placeholder="Search customers" />
          </SearchWrapper>
        </SearchContainer>

        <CustomerCount>{getCustomersForList(activeList, lists).length} customers</CustomerCount>

        <CustomersTable customers={getCustomersForList(activeList, lists)} />
      </MainArea>
      )}
    </PageLayout>
  )
}

export default CustomerListsPage
