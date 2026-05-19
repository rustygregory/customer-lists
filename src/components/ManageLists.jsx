import React, { useState } from 'react'
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

const TableContainer = styled.div`
  width: 100%;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`

const Thead = styled.thead`
  border-bottom: 1px solid #d8dcde;
`

const Th = styled.th`
  text-align: left;
  padding: 10px 12px;
  font-weight: 500;
  color: #68737d;
  font-size: 12px;
  white-space: nowrap;

  &:first-child {
    width: 40px;
    padding-left: 16px;
  }
`

const SortableTh = styled(Th)`
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #2f3941;
  }
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

  &:first-child {
    width: 40px;
    padding-left: 16px;
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
  font-size: 13px;
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
  color: #ffffff;
  background: ${props => props.$type === 'shared' ? '#7b68a5' : '#3d6e70'};
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

const SortArrow = styled.span`
  margin-left: 4px;
  font-size: 10px;
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

function ManageLists({ lists, onEditList, onDone }) {
  const [sortField, setSortField] = useState('type')
  const [sortDirection, setSortDirection] = useState('asc')
  const [selectedIds, setSelectedIds] = useState([])

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

  const getSortIcon = (field) => {
    if (sortField !== field) return '⇅'
    return sortDirection === 'asc' ? '↑' : '↓'
  }

  return (
    <PageWrapper>
      <ContentArea>
        <Title>Manage lists</Title>
        <TableContainer>
          <Table>
            <Thead>
              <tr>
                <Th><Checkbox type="checkbox" checked={allSelected} onChange={handleSelectAll} /></Th>
                <SortableTh onClick={() => handleSort('name')}>
                  Name <SortArrow>{getSortIcon('name')}</SortArrow>
                </SortableTh>
                <SortableTh onClick={() => handleSort('type')}>
                  Type <SortArrow>{getSortIcon('type')}</SortArrow>
                </SortableTh>
                <SortableTh onClick={() => handleSort('status')}>
                  Status <SortArrow>{getSortIcon('status')}</SortArrow>
                </SortableTh>
                <SortableTh onClick={() => handleSort('lastUpdated')}>
                  Last updated <SortArrow>{getSortIcon('lastUpdated')}</SortArrow>
                </SortableTh>
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
