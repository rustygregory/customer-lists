import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

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

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #2f3941;
  margin: 0 0 32px 0;
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
`

const Thead = styled.thead`
  border-bottom: 1px solid #d8dcde;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-weight: 600;
  color: #2f3941;
  font-size: 14px;
  white-space: nowrap;

  &:first-child {
    width: 40px;
    padding-left: 20px;
    padding-right: 8px;
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

const SortIcon = styled.span`
  margin-left: 4px;
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  font-size: 14px;
  line-height: 1;
  color: ${props => props.$active ? '#2f3941' : '#c2c8cc'};
`

const Tbody = styled.tbody``

const Tr = styled.tr`
  border-bottom: 1px solid #e9ebed;

  &:hover {
    background: #f8f9f9;
  }
`

const Td = styled.td`
  padding: 12px 16px;
  color: #2f3941;
  vertical-align: middle;
  font-size: 14px;

  &:first-child {
    width: 40px;
    padding-left: 20px;
    padding-right: 8px;
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
  justify-content: flex-end;
  gap: 16px;
  padding: 16px 24px;
  border-top: 1px solid #d8dcde;
  background: #ffffff;
  flex-shrink: 0;
`

const DoneButton = styled.button`
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

const OverflowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="3" r="1.25" fill="currentColor"/>
    <circle cx="8" cy="8" r="1.25" fill="currentColor"/>
    <circle cx="8" cy="13" r="1.25" fill="currentColor"/>
  </svg>
)

const SortCaret = ({ field, sortField, sortDirection }) => {
  const isActive = sortField === field
  if (isActive) {
    return (
      <SortIcon $active>
        {sortDirection === 'asc' ? '▴' : '▾'}
      </SortIcon>
    )
  }
  return (
    <SortIcon>
      {'◇'}
    </SortIcon>
  )
}

function ManageLists({ lists, onEditList, onDone }) {
  const [sortField, setSortField] = useState('type')
  const [sortDirection, setSortDirection] = useState('asc')
  const [selectedIds, setSelectedIds] = useState([])
  const [openMenuId, setOpenMenuId] = useState(null)
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

  const sortedLists = [...lists].sort((a, b) => {
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

  const allSelected = selectedIds.length === lists.length && lists.length > 0

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([])
    } else {
      setSelectedIds(lists.map(l => l.id))
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
        <Title>Manage lists</Title>
        <Counter>{lists.length} lists</Counter>
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <Th><Checkbox type="checkbox" checked={allSelected} onChange={handleSelectAll} /></Th>
                <SortableTh onClick={() => handleSort('name')}>
                  Name <SortCaret field="name" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <SortableTh onClick={() => handleSort('type')}>
                  Type <SortCaret field="type" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <SortableTh onClick={() => handleSort('status')}>
                  Status <SortCaret field="status" sortField={sortField} sortDirection={sortDirection} />
                </SortableTh>
                <SortableTh onClick={() => handleSort('lastUpdated')}>
                  Last updated <SortCaret field="lastUpdated" sortField={sortField} sortDirection={sortDirection} />
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
                      {getStatus(list) === 'active' ? 'Active' : 'Deactive'}
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
                          <OverflowMenuItem onClick={() => setOpenMenuId(null)}>
                            Deactivate
                          </OverflowMenuItem>
                          <OverflowMenuItem $destructive onClick={() => setOpenMenuId(null)}>
                            Delete
                          </OverflowMenuItem>
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
      <BottomBar>
        <DoneButton onClick={onDone}>Done</DoneButton>
      </BottomBar>
    </PageWrapper>
  )
}

export default ManageLists
