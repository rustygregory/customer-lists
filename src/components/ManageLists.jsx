import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Modal, Header as ModalHeader, Body as ModalBody, Footer as ModalFooter, FooterItem, Close } from '@zendeskgarden/react-modals'
import { Button, IconButton as GardenIconButton } from '@zendeskgarden/react-buttons'
import { Tag } from '@zendeskgarden/react-tags'
import { Field, Input } from '@zendeskgarden/react-forms'
import { Combobox, Option, Field as ComboField, Label as ComboLabel } from '@zendeskgarden/react-dropdowns'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
`

const ContentArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 40px;
`

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
`

const BreadcrumbLink = styled.button`
  color: #1f73b7;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

const BreadcrumbSeparator = styled.span`
  color: #68737d;
`

const BreadcrumbCurrent = styled.span`
  color: #2f3941;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #2f3941;
  margin: 0 0 32px 0;
`

const SearchFilterArea = styled.div`
  margin-bottom: 20px;
`

const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
  max-width: 450px;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #87929d;
    pointer-events: none;
  }
`

const SearchInput = styled(Input)`
  padding-left: 36px;
`

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const FilterButton = styled(Button)`
  border-color: #1f73b7;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  height: 32px;
  padding: 0 12px;
`

const FilterTag = styled(Tag)`
  font-size: 13px;
  height: 32px;
  padding: 0 8px;
`

const ClearFilters = styled.button`
  font-size: 13px;
  color: #1f73b7;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

const FilterDrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(41, 50, 57, 0.8);
  z-index: 1100;
`

const FilterDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 380px;
  background: #ffffff;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 1101;
  display: flex;
  flex-direction: column;
`

const FilterDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px 16px;
  border-bottom: 1px solid #e9ebed;
`

const FilterDrawerTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const FilterDrawerClose = styled.button`
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

const FilterDrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px;
`

const FilterDrawerSection = styled.div`
  margin-bottom: 24px;
`

const FilterDrawerLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`

const FilterDrawerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 32px;
  border-top: 1px solid #e9ebed;
`

const Counter = styled.div`
  font-size: 14px;
  color: #2f3941;
  margin-bottom: 16px;
`

const TableContainer = styled.div`
  width: 100%;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  table-layout: fixed;
`

const Thead = styled.thead`
  border-bottom: 1px solid #d8dcde;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 12px;
  font-weight: 600;
  color: #2f3941;
  font-size: 14px;
  white-space: nowrap;

  &:first-child {
    width: 40px;
    padding-left: 12px;
    padding-right: 10px;
  }

  &:last-child {
    width: 40px;
    padding-right: 20px;
  }
`

const SortableTh = styled(Th)`
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #000;
  }
`

const SortIconWrapper = styled.span`
  margin-left: 6px;
  display: inline-flex;
  vertical-align: middle;
`

const Tbody = styled.tbody``

const Tr = styled.tr`
  border-bottom: 1px solid #e9ebed;

  &:hover {
    background: #f8f9f9;
  }
`

const Td = styled.td`
  padding: 12px 12px;
  color: #2f3941;
  vertical-align: middle;
  font-size: 14px;

  &:first-child {
    width: 40px;
    padding-left: 12px;
    padding-right: 10px;
  }

  &:last-child {
    width: 40px;
    padding-right: 20px;
    text-align: center;
  }
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`

const NameLink = styled.a`
  color: #1f73b7;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const TypeTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.$type === 'shared' ? '#ffffff' : '#ffffff'};
  background: ${props => props.$type === 'shared' ? '#7b68a5' : '#3d6e70'};
  border: 1px solid ${props => props.$type === 'shared' ? '#7b68a5' : '#3d6e70'};
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

const OverflowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #68737d;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f3f4f4;
    color: #2f3941;
  }
`

const OverflowMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 140px;
  padding: 4px 0;
`

const OverflowMenuItem = styled.button`
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

const OverflowWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px 0 40px;
  height: 80px;
  border-top: 1px solid #d8dcde;
  background: #ffffff;
  flex-shrink: 0;
`

const BottomBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

const SelectedCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
`

const BottomBarAction = styled.button`
  font-size: 14px;
  color: ${props => props.$destructive ? '#cc3340' : '#1f73b7'};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

const ClearSelection = styled.button`
  font-size: 14px;
  color: #1f73b7;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  margin-right: 56px;

  &:hover {
    text-decoration: underline;
  }
`

const SaveButton = styled.button`
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background: #1f73b7;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #144a75;
  }
`

const ModalList = styled.ul`
  margin: 8px 0 0 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #2f3941;
  line-height: 1.8;
`

const OverflowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="3" r="1.25" fill="currentColor"/>
    <circle cx="8" cy="8" r="1.25" fill="currentColor"/>
    <circle cx="8" cy="13" r="1.25" fill="currentColor"/>
  </svg>
)

const SortIcon = ({ field, sortField, sortDirection }) => {
  const isActive = sortField === field
  const color = '#68737d'
  return (
    <SortIconWrapper>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4.5L4 1.5L7 4.5" stroke={isActive && sortDirection === 'asc' ? '#2f3941' : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 7.5L4 10.5L7 7.5" stroke={isActive && sortDirection === 'desc' ? '#2f3941' : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </SortIconWrapper>
  )
}

function ManageLists({ lists, onEditList, onDone, onDeactivateLists, onActivateLists, onDeleteLists, onNavigateHome }) {
  const [sortField, setSortField] = useState('type')
  const [sortDirection, setSortDirection] = useState('asc')
  const [selectedIds, setSelectedIds] = useState([])
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const [deactivateTargetIds, setDeactivateTargetIds] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteTargetIds, setDeleteTargetIds] = useState([])
  const [openMenuId, setOpenMenuId] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [statusFilter, setStatusFilter] = useState('active')
  const [typeFilter, setTypeFilter] = useState(null)
  const [dateFilter, setDateFilter] = useState(null)
  const [showFilterDrawer, setShowFilterDrawer] = useState(false)
  const [pendingStatus, setPendingStatus] = useState(null)
  const [pendingType, setPendingType] = useState(null)
  const [pendingDate, setPendingDate] = useState(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null)
      }
    }
    if (openMenuId) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openMenuId])

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const getType = (list) => {
    return list.access === 'only-you' ? 'personal' : 'shared'
  }

  const getStatus = (list) => {
    return list.status || 'active'
  }

  const getDateThreshold = (filter) => {
    const now = new Date()
    switch (filter) {
      case 'In the last 24 hours': return new Date(now - 24 * 60 * 60 * 1000)
      case 'In the last 7 days': return new Date(now - 7 * 24 * 60 * 60 * 1000)
      case 'In the last 30 days': return new Date(now - 30 * 24 * 60 * 60 * 1000)
      case 'In the last 3 months': return new Date(now - 90 * 24 * 60 * 60 * 1000)
      case 'In the last 6 months': return new Date(now - 180 * 24 * 60 * 60 * 1000)
      case 'In the last year': return new Date(now - 365 * 24 * 60 * 60 * 1000)
      case 'Over a year ago': return 'over-a-year'
      default: return null
    }
  }

  const filteredLists = lists.filter(list => {
    if (statusFilter && getStatus(list) !== statusFilter) return false
    if (typeFilter && getType(list) !== typeFilter) return false
    if (searchValue && !list.label.toLowerCase().includes(searchValue.toLowerCase())) return false
    if (dateFilter) {
      const listDate = new Date(list.lastUpdated || 'May 19, 2026')
      const threshold = getDateThreshold(dateFilter)
      if (threshold === 'over-a-year') {
        const oneYearAgo = new Date(new Date() - 365 * 24 * 60 * 60 * 1000)
        if (listDate >= oneYearAgo) return false
      } else if (threshold) {
        if (listDate < threshold) return false
      }
    }
    return true
  })

  const sortedLists = [...filteredLists].sort((a, b) => {
    let aVal, bVal
    if (sortField === 'name') {
      aVal = a.label.toLowerCase()
      bVal = b.label.toLowerCase()
    } else if (sortField === 'type') {
      aVal = getType(a)
      bVal = getType(b)
    } else if (sortField === 'status') {
      aVal = getStatus(a)
      bVal = getStatus(b)
    } else if (sortField === 'lastUpdated') {
      aVal = a.lastUpdated || ''
      bVal = b.lastUpdated || ''
    }
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const allSelected = selectedIds.length === filteredLists.length && filteredLists.length > 0
  const someSelected = selectedIds.length > 0 && !allSelected
  const selectAllRef = useRef(null)

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someSelected
    }
  }, [someSelected])

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([])
    } else {
      setSelectedIds(filteredLists.map(l => l.id))
    }
  }

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(s => s !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  return (
    <PageWrapper>
      <ContentArea>
        <Breadcrumbs>
          <BreadcrumbLink onClick={onNavigateHome}>Customer Lists</BreadcrumbLink>
          <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
          <BreadcrumbCurrent>Manage customer lists</BreadcrumbCurrent>
        </Breadcrumbs>
        <Title>Manage customer lists</Title>
        <SearchFilterArea>
          <SearchWrapper>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"/>
              <path stroke="currentColor" strokeLinecap="round" d="M15 15l-5-5"/>
            </svg>
            <Field>
              <SearchInput
                placeholder=""
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
            </Field>
          </SearchWrapper>
          <FilterRow>
            <FilterButton isBasic size="small" onClick={() => { setPendingStatus(statusFilter); setPendingType(typeFilter); setPendingDate(dateFilter); setShowFilterDrawer(true) }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <g fill="none" stroke="currentColor">
                  <circle cx="4.5" cy="6.5" r="2"/>
                  <circle cx="11.5" cy="9.5" r="2"/>
                  <path strokeLinecap="round" d="M4.5.5v2m0 8v5m7-15v5m0 8v2"/>
                </g>
              </svg>
              Filter
            </FilterButton>
            {statusFilter && (
              <FilterTag>
                <span>Status {statusFilter === 'active' ? 'Active' : 'Inactive'}</span>
                <Tag.Close onClick={() => setStatusFilter(null)} />
              </FilterTag>
            )}
            {typeFilter && (
              <FilterTag>
                <span>Type {typeFilter === 'personal' ? 'Personal' : 'Shared'}</span>
                <Tag.Close onClick={() => setTypeFilter(null)} />
              </FilterTag>
            )}
            {dateFilter && (
              <FilterTag>
                <span>Updated {dateFilter}</span>
                <Tag.Close onClick={() => setDateFilter(null)} />
              </FilterTag>
            )}
            {(statusFilter || typeFilter || dateFilter) && (
              <ClearFilters onClick={() => { setStatusFilter(null); setTypeFilter(null); setDateFilter(null); setSearchValue('') }}>
                Clear filters
              </ClearFilters>
            )}
          </FilterRow>
        </SearchFilterArea>
        <Counter>Showing {filteredLists.length} lists</Counter>
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <Th><Checkbox type="checkbox" ref={selectAllRef} checked={allSelected} onChange={handleSelectAll} /></Th>
                <SortableTh onClick={() => handleSort('name')}>
                  Name <SortIcon field="name" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <SortableTh onClick={() => handleSort('type')}>
                  Type <SortIcon field="type" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <SortableTh onClick={() => handleSort('status')}>
                  Status <SortIcon field="status" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <SortableTh onClick={() => handleSort('lastUpdated')}>
                  Last updated <SortIcon field="lastUpdated" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <Th></Th>
              </tr>
            </Thead>
            <Tbody>
              {sortedLists.map(list => (
                <Tr key={list.id}>
                  <Td>
                    <Checkbox
                      type="checkbox"
                      checked={selectedIds.includes(list.id)}
                      onChange={() => handleSelectOne(list.id)}
                    />
                  </Td>
                  <Td>
                    <NameLink onClick={() => onEditList(list)}>
                      {list.label}
                    </NameLink>
                  </Td>
                  <Td>
                    <TypeTag $type={getType(list)}>
                      {getType(list) === 'shared' ? 'Shared' : 'Personal'}
                    </TypeTag>
                  </Td>
                  <Td>
                    <StatusTag $status={getStatus(list)}>
                      {getStatus(list) === 'active' ? 'Active' : 'Inactive'}
                    </StatusTag>
                  </Td>
                  <Td>{list.lastUpdated || 'May 19, 2026'}</Td>
                  <Td>
                    <OverflowWrapper ref={openMenuId === list.id ? menuRef : null}>
                      <OverflowButton onClick={() => setOpenMenuId(openMenuId === list.id ? null : list.id)}>
                        <OverflowIcon />
                      </OverflowButton>
                      {openMenuId === list.id && (
                        <OverflowMenu>
                          <OverflowMenuItem onClick={() => { setOpenMenuId(null); onEditList(list) }}>
                            Edit
                          </OverflowMenuItem>
                          {getStatus(list) === 'active' ? (
                            <OverflowMenuItem onClick={() => { setOpenMenuId(null); setDeactivateTargetIds([list.id]); setShowDeactivateModal(true) }}>
                              Deactivate
                            </OverflowMenuItem>
                          ) : (
                            <>
                              <OverflowMenuItem onClick={() => { setOpenMenuId(null); onActivateLists?.([list.id]) }}>
                                Activate
                              </OverflowMenuItem>
                              <OverflowMenuItem $destructive onClick={() => { setOpenMenuId(null); setDeleteTargetIds([list.id]); setShowDeleteModal(true) }}>
                                Delete
                              </OverflowMenuItem>
                            </>
                          )}
                        </OverflowMenu>
                      )}
                    </OverflowWrapper>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ContentArea>
      {selectedIds.length > 0 && (
        <BottomBar>
          <BottomBarLeft>
            <SelectedCount>{selectedIds.length} selected</SelectedCount>
            {selectedIds.some(id => getStatus(lists.find(l => l.id === id)) === 'active') && (
              <BottomBarAction onClick={() => { setDeactivateTargetIds(selectedIds.filter(id => getStatus(lists.find(l => l.id === id)) === 'active')); setShowDeactivateModal(true) }}>Deactivate</BottomBarAction>
            )}
            {selectedIds.some(id => getStatus(lists.find(l => l.id === id)) !== 'active') && (
              <BottomBarAction onClick={() => {
                const ids = selectedIds.filter(id => getStatus(lists.find(l => l.id === id)) !== 'active')
                onActivateLists?.(ids)
              }}>Activate</BottomBarAction>
            )}
            {selectedIds.some(id => getStatus(lists.find(l => l.id === id)) !== 'active') && (
              <BottomBarAction $destructive onClick={() => { setDeleteTargetIds(selectedIds.filter(id => getStatus(lists.find(l => l.id === id)) !== 'active')); setShowDeleteModal(true) }}>Delete</BottomBarAction>
            )}
          </BottomBarLeft>
          <ClearSelection onClick={() => setSelectedIds([])}>Clear selection</ClearSelection>
        </BottomBar>
      )}
      {showDeactivateModal && (
        <Modal onClose={() => setShowDeactivateModal(false)}>
          <ModalHeader>
            Deactivate customer list{deactivateTargetIds.length > 1 ? 's' : ''}
          </ModalHeader>
          <ModalBody>
            {deactivateTargetIds.length === 1 ? (
              <>You are deactivating <strong>{lists.find(l => l.id === deactivateTargetIds[0])?.label}</strong>. It will become unavailable for use, but you can reactivate or delete it at any time.</>
            ) : (
              <>
                The following items will be deactivated. They will become unavailable for use, but you can reactivate or delete them at any time.
                <ModalList>
                  {deactivateTargetIds.map(id => {
                    const list = lists.find(l => l.id === id)
                    return <li key={id}>{list?.label}</li>
                  })}
                </ModalList>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <FooterItem>
              <Button isBasic onClick={() => setShowDeactivateModal(false)}>
                Cancel
              </Button>
            </FooterItem>
            <FooterItem>
              <Button isPrimary onClick={() => {
                onDeactivateLists?.(deactivateTargetIds)
                setShowDeactivateModal(false)
                setSelectedIds(selectedIds.filter(id => !deactivateTargetIds.includes(id)))
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
            Delete customer list{deleteTargetIds.length > 1 ? 's' : ''}
          </ModalHeader>
          <ModalBody>
            {deleteTargetIds.length === 1 ? (
              <>You are permanently deleting <strong>{lists.find(l => l.id === deleteTargetIds[0])?.label}</strong>. You will have to create it again after it has been deleted.</>
            ) : (
              <>
                You are permanently deleting the following customer lists. They will have to be created again.
                <ModalList>
                  {deleteTargetIds.map(id => {
                    const list = lists.find(l => l.id === id)
                    return <li key={id}>{list?.label}</li>
                  })}
                </ModalList>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <FooterItem>
              <Button isBasic onClick={() => setShowDeleteModal(false)}>
                Cancel
              </Button>
            </FooterItem>
            <FooterItem>
              <Button isDanger isPrimary onClick={() => {
                onDeleteLists?.(deleteTargetIds)
                setShowDeleteModal(false)
                setSelectedIds(selectedIds.filter(id => !deleteTargetIds.includes(id)))
              }}>
                Delete
              </Button>
            </FooterItem>
          </ModalFooter>
          <Close aria-label="Close modal" />
        </Modal>
      )}
      {showFilterDrawer && createPortal(
        <>
          <FilterDrawerOverlay onClick={() => setShowFilterDrawer(false)} />
          <FilterDrawer>
            <FilterDrawerHeader>
              <FilterDrawerTitle>Filter</FilterDrawerTitle>
              <FilterDrawerClose onClick={() => setShowFilterDrawer(false)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </FilterDrawerClose>
            </FilterDrawerHeader>
            <FilterDrawerBody>
              <FilterDrawerSection>
                <FilterDrawerLabel>Type</FilterDrawerLabel>
                <ComboField>
                  <Combobox
                    isAutocomplete
                    selectionValue={pendingType || ''}
                    inputValue={pendingType === 'personal' ? 'Personal' : pendingType === 'shared' ? 'Shared' : ''}
                    onChange={(changes) => {
                      if ('selectionValue' in changes) {
                        setPendingType(changes.selectionValue || null)
                      }
                    }}
                  >
                    <Option value="" label="Any" />
                    <Option value="personal" label="Personal" />
                    <Option value="shared" label="Shared" />
                  </Combobox>
                </ComboField>
              </FilterDrawerSection>
              <FilterDrawerSection>
                <FilterDrawerLabel>Status</FilterDrawerLabel>
                <ComboField>
                  <Combobox
                    isAutocomplete
                    selectionValue={pendingStatus || ''}
                    inputValue={pendingStatus === 'active' ? 'Active' : pendingStatus === 'deactivated' ? 'Inactive' : ''}
                    onChange={(changes) => {
                      if ('selectionValue' in changes) {
                        setPendingStatus(changes.selectionValue || null)
                      }
                    }}
                  >
                    <Option value="" label="Any" />
                    <Option value="active" label="Active" />
                    <Option value="deactivated" label="Inactive" />
                  </Combobox>
                </ComboField>
              </FilterDrawerSection>
              <FilterDrawerSection>
                <FilterDrawerLabel>Request date</FilterDrawerLabel>
                <ComboField>
                  <Combobox
                    isEditable={false}
                    selectionValue={pendingDate || 'any'}
                    onChange={(changes) => {
                      if ('selectionValue' in changes) {
                        setPendingDate(changes.selectionValue === 'any' ? null : changes.selectionValue || null)
                      }
                    }}
                  >
                    <Option value="any" label="Any" />
                    <Option value="In the last 24 hours" label="In the last 24 hours" />
                    <Option value="In the last 7 days" label="In the last 7 days" />
                    <Option value="In the last 30 days" label="In the last 30 days" />
                    <Option value="In the last 3 months" label="In the last 3 months" />
                    <Option value="In the last 6 months" label="In the last 6 months" />
                    <Option value="In the last year" label="In the last year" />
                    <Option value="Over a year ago" label="Over a year ago" />
                  </Combobox>
                </ComboField>
              </FilterDrawerSection>
            </FilterDrawerBody>
            <FilterDrawerFooter>
              <Button isBasic onClick={() => setShowFilterDrawer(false)}>
                Cancel
              </Button>
              <Button isPrimary onClick={() => {
                setStatusFilter(pendingStatus)
                setTypeFilter(pendingType)
                setDateFilter(pendingDate)
                setShowFilterDrawer(false)
              }}>
                Apply filters
              </Button>
            </FilterDrawerFooter>
          </FilterDrawer>
        </>,
        document.body
      )}
    </PageWrapper>
  )
}

export default ManageLists
