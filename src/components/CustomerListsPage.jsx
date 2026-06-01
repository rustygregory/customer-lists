import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Field, Input } from '@zendeskgarden/react-forms'
import { Modal, Header as ModalHeader, Body as ModalBody, Footer as ModalFooter, FooterItem, Close } from '@zendeskgarden/react-modals'
import { Notification, Title as NotifTitle, Paragraph, Close as NotifClose } from '@zendeskgarden/react-notifications'
import CustomerListsSidebar from './CustomerListsSidebar'
import CustomersTable from './CustomersTable'
import { getCustomersForList } from './filterCustomers'
import CreateCustomerList from './CreateCustomerList'
import ManageLists from './ManageLists'
import SuccessNotification from './SuccessNotification'

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: clip;
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

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px 0;
`

const StatusTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.$status === 'active' ? '#ffffff' : '#2f3941'};
  background: ${props => props.$status === 'active' ? '#1f73b7' : '#ffffff'};
  border: 1px solid ${props => props.$status === 'active' ? '#1f73b7' : '#d8dcde'};
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

const ErrorNotificationWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1100;
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
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path stroke="currentColor" strokeLinecap="round" d="M10.5 8.5V10c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h1.5M6 6l4-4m-3.5-.5H10c.3 0 .5.2.5.5v3.5"/>
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
  { id: 'last30', label: 'Users created within the last 30 days', section: 'shared', access: 'any', conditions: [{ category: 'created', operator: 'is', value: '' }], lastUpdated: 'Apr 12, 2026' },
  { id: 'gold', label: 'Platinum members', section: 'shared', access: 'any', conditions: [{ category: 'tag', operator: 'is', value: 'platinum' }], lastUpdated: 'May 30, 2026' },
  { id: 'mylist', label: 'High value customers', section: 'shared', access: 'only-you', conditions: [{ category: 'tag', operator: 'is', value: 'high-value' }], lastUpdated: 'May 3, 2026' },
  { id: 'test2', label: 'Diamond value customers', section: 'shared', access: 'any', conditions: [{ category: 'tag', operator: 'is', value: 'diamond' }], lastUpdated: 'Mar 18, 2026' },
  { id: 'again', label: 'My silver members', section: 'shared', access: 'specific-groups', groups: ['support'], conditions: [{ category: 'tag', operator: 'is', value: 'silver' }], lastUpdated: 'May 21, 2026' },
  { id: 'churned', label: 'Churned accounts Q1', section: 'shared', access: 'any', status: 'deactivated', conditions: [{ category: 'tag', operator: 'is', value: 'churned' }], lastUpdated: 'Feb 4, 2026' },
  { id: 'trial-expired', label: 'Expired trial users', section: 'shared', access: 'any', status: 'deactivated', conditions: [{ category: 'tag', operator: 'is', value: 'trial-expired' }], lastUpdated: 'Jan 19, 2026' },
  { id: 'legacy-plan', label: 'Legacy plan customers', section: 'shared', access: 'specific-groups', groups: ['billing'], status: 'deactivated', conditions: [{ category: 'tag', operator: 'is', value: 'legacy' }], lastUpdated: 'Mar 7, 2026' },
]

function CustomerListsPage() {
  const [activeList, setActiveList] = useState('all')
  const [lists, setLists] = useState(defaultLists)
  const [view, setView] = useState('list')
  const [editingList, setEditingList] = useState(null)
  const [cameFromManage, setCameFromManage] = useState(false)
  const [actionsOpen, setActionsOpen] = useState(false)
  const [notification, setNotification] = useState(null)
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showDeleteError, setShowDeleteError] = useState(false)
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

  const handleSaveList = ({ name, access, conditions, groups }) => {
    const now = new Date()
    const lastUpdated = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    if (editingList) {
      setLists(lists.map(l => l.id === editingList.id ? { ...l, label: name, access, conditions, groups, lastUpdated } : l))
      setView(cameFromManage ? 'manage' : 'list')
      setCameFromManage(false)
      setNotification('Customer list updated')
    } else {
      const id = name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()
      setLists([...lists, { id, label: name, section: 'shared', access, conditions, groups, lastUpdated }])
      setActiveList(id)
      setView(cameFromManage ? 'manage' : 'list')
      setCameFromManage(false)
      setNotification('Customer list created')
    }
  }

  const handleCancelCreate = () => {
    setView(cameFromManage ? 'manage' : 'list')
    setCameFromManage(false)
  }

  const handleManageLists = () => {
    setView('manage')
  }

  const handleEditFromManage = (list) => {
    setEditingList(list)
    setCameFromManage(true)
    setView('create')
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
        onSelectList={(id) => { setActiveList(id); setView('list'); setCameFromManage(false) }}
        lists={lists}
        onCreateList={handleCreateList}
        onManageLists={handleManageLists}
      />
      {view === 'manage' ? (
        <ManageLists
          lists={lists}
          onEditList={handleEditFromManage}
          onDone={() => setView('list')}
          onNavigateHome={() => { setActiveList('all'); setView('list') }}
          onDeactivateLists={(ids) => {
            setLists(lists.map(l => ids.includes(l.id) ? { ...l, status: 'deactivated' } : l))
            setNotification('Customer list' + (ids.length > 1 ? 's' : '') + ' deactivated')
          }}
          onActivateLists={(ids) => {
            setLists(lists.map(l => ids.includes(l.id) ? { ...l, status: 'active' } : l))
            setNotification('Customer list' + (ids.length > 1 ? 's' : '') + ' activated')
          }}
          onDeleteLists={(ids) => {
            setLists(lists.filter(l => !ids.includes(l.id)))
            setNotification('Customer list' + (ids.length > 1 ? 's' : '') + ' deleted')
          }}
        />
      ) : view === 'create' ? (
        <CreateCustomerList
          key={editingList?.id || 'new'}
          onSave={handleSaveList}
          onCancel={handleCancelCreate}
          initialName={editingList?.label || ''}
          initialAccess={editingList?.access || 'any'}
          initialConditions={editingList?.conditions || null}
          initialGroups={editingList?.groups || []}
          isEditing={!!editingList}
          status={editingList?.status || 'active'}
          cameFromManage={cameFromManage}
          onNavigateHome={() => { setActiveList('all'); setView('list'); setCameFromManage(false) }}
          onNavigateManage={() => { setView('manage'); setCameFromManage(false) }}
          onDelete={() => {
            setLists(lists.filter(l => l.id !== editingList.id))
            setActiveList('all')
            setView('manage')
            setCameFromManage(false)
            setNotification('Customer list deleted')
          }}
          onClone={() => {
            const clonedName = `${editingList.label} (copy)`
            const clonedId = clonedName.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()
            const clonedList = { ...editingList, id: clonedId, label: clonedName }
            setLists([...lists, clonedList])
            setActiveList(clonedId)
            setEditingList(clonedList)
            setNotification('Customer list cloned')
          }}
          onDeactivate={() => {
            setLists(lists.map(l => l.id === editingList.id ? { ...l, status: 'deactivated' } : l))
            setEditingList({ ...editingList, status: 'deactivated' })
            setNotification('Customer list deactivated')
          }}
          onActivate={() => {
            setLists(lists.map(l => l.id === editingList.id ? { ...l, status: 'active' } : l))
            setEditingList({ ...editingList, status: 'active' })
            setNotification('Customer list activated')
          }}
        />
      ) : (
      <MainArea>
        <Header>
          <HeaderLeft>
            <TitleRow>
              <Title>{isInsideList ? activeListLabel : 'Customers'}</Title>
              {isInsideList && (() => {
                const currentList = lists.find(l => l.id === activeList)
                const listStatus = currentList?.status || 'active'
                return (
                  <StatusTag $status={listStatus}>
                    {listStatus === 'active' ? 'Active' : 'Inactive'}
                  </StatusTag>
                )
              })()}
            </TitleRow>
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
                {actionsOpen && (() => {
                  const currentList = lists.find(l => l.id === activeList)
                  const isActive = (currentList?.status || 'active') === 'active'
                  return (
                  <ActionsDropdown>
                    <ActionsDropdownItem onClick={handleEditList}>
                      Edit
                    </ActionsDropdownItem>
                    <ActionsDropdownItem onClick={() => {
                      setActionsOpen(false)
                      const clonedName = `${currentList.label} (copy)`
                      const clonedId = clonedName.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()
                      setLists([...lists, { ...currentList, id: clonedId, label: clonedName }])
                      setActiveList(clonedId)
                      setNotification('Customer list cloned')
                    }}>
                      Clone
                    </ActionsDropdownItem>
                    {isActive ? (
                      <ActionsDropdownItem onClick={() => {
                        setActionsOpen(false)
                        setShowDeactivateModal(true)
                      }}>
                        Deactivate
                      </ActionsDropdownItem>
                    ) : (
                      <ActionsDropdownItem onClick={() => {
                        setActionsOpen(false)
                        setLists(lists.map(l => l.id === activeList ? { ...l, status: 'active' } : l))
                        setNotification('Customer list activated')
                      }}>
                        Activate
                      </ActionsDropdownItem>
                    )}
                    <ActionsDropdownItem onClick={() => setActionsOpen(false)}>
                      Export to CSV
                    </ActionsDropdownItem>
                    <ActionsDropdownItem onClick={() => setActionsOpen(false)}>
                      Bulk import
                    </ActionsDropdownItem>
                    <ActionsDropdownItem $destructive onClick={() => {
                      setActionsOpen(false)
                      if (isActive) {
                        setShowDeleteError(true)
                      } else {
                        setShowDeleteModal(true)
                      }
                    }}>
                      Delete
                    </ActionsDropdownItem>
                  </ActionsDropdown>
                  )
                })()}
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
      {showDeleteError && (
        <ErrorNotificationWrapper>
          <Notification type="error">
            <NotifTitle>Cannot delete active list</NotifTitle>
            <Paragraph>Deactivate customer list before it can be deleted.</Paragraph>
            <NotifClose aria-label="Close" onClick={() => setShowDeleteError(false)} />
          </Notification>
        </ErrorNotificationWrapper>
      )}
      {showDeactivateModal && (
        <Modal onClose={() => setShowDeactivateModal(false)}>
          <ModalHeader>
            Deactivate customer list
          </ModalHeader>
          <ModalBody>
            You are deactivating <strong>{activeListLabel}</strong>. It will become unavailable for use, but you can reactivate or delete it at any time.
          </ModalBody>
          <ModalFooter>
            <FooterItem>
              <Button isBasic onClick={() => setShowDeactivateModal(false)}>
                Cancel
              </Button>
            </FooterItem>
            <FooterItem>
              <Button isPrimary onClick={() => {
                setShowDeactivateModal(false)
                setLists(lists.map(l => l.id === activeList ? { ...l, status: 'deactivated' } : l))
                setNotification('Customer list deactivated')
              }}>
                Deactivate
              </Button>
            </FooterItem>
          </ModalFooter>
          <Close aria-label="Close modal" />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal onClose={() => setShowDeleteModal(false)} isDanger>
          <ModalHeader isDanger>
            Delete customer list
          </ModalHeader>
          <ModalBody>
            You are permanently deleting <strong>{activeListLabel}</strong>. You will have to create it again after it has been deleted.
          </ModalBody>
          <ModalFooter>
            <FooterItem>
              <Button isBasic onClick={() => setShowDeleteModal(false)}>
                Cancel
              </Button>
            </FooterItem>
            <FooterItem>
              <Button isDanger isPrimary onClick={() => {
                setShowDeleteModal(false)
                setLists(lists.filter(l => l.id !== activeList))
                setActiveList('all')
                setNotification('Customer list deleted')
              }}>
                Delete
              </Button>
            </FooterItem>
          </ModalFooter>
          <Close aria-label="Close modal" />
        </Modal>
      )}
    </PageLayout>
  )
}

export default CustomerListsPage
