import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Modal, Header as ModalHeader, Body as ModalBody, Footer as ModalFooter, FooterItem, Close } from '@zendeskgarden/react-modals'
import { Notification, Title as NotifTitle, Paragraph, Close as NotifClose } from '@zendeskgarden/react-notifications'
import ConditionSelect from './ConditionSelect'
import { filterCustomers } from './filterCustomers'
import { customersByList } from './CustomersTable'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
`

const FormArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 40px;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #2f3941;
  margin: 0;
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

const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`

const NameInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;
  outline: none;

  &:focus {
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }
`

const Section = styled.div`
  margin-top: 64px;
`

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px 0;
`

const SectionDescription = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 16px 0;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`

const GroupsContainer = styled.div`
  margin-top: 12px;
  margin-left: 12px;
  width: 230px;
`

const GroupsLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #2f3941;
  margin-bottom: 8px;
`

const GroupsInputWrapper = styled.div`
  position: relative;
`

const GroupsInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;
  outline: none;

  &:focus {
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }
`

const GroupsDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 240px;
  overflow-y: auto;
  padding: 4px 0;
`

const GroupsDropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  font-size: 14px;
  color: #2f3941;
  background: ${props => props.$selected ? '#edf7ff' : 'none'};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.$selected ? '#dceefb' : '#f8f9f9'};
  }
`

const GroupCheckbox = styled.span`
  width: 16px;
  height: 16px;
  border: 1px solid ${props => props.$checked ? '#1f73b7' : '#d8dcde'};
  border-radius: 3px;
  background: ${props => props.$checked ? '#1f73b7' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const GroupsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

const GroupTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  background: #e9ebed;
  color: #49545c;
`

const GroupTagRemove = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #68737d;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const ConditionsSubtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 12px 0;
`

const ConditionCardWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
  max-width: 700px;
`

const ConditionCard = styled.div`
  border: 1px solid #d8dcde;
  border-radius: 8px;
  padding: 16px;
`

const ConditionFields = styled.div`
  flex: 1;
`

const ColumnLabels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 8px;
`

const ColumnLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
`

const ConditionsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`

const RemoveConditionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #68737d;
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
  right: -28px;
  border-radius: 4px;

  &:hover {
    color: #2f3941;
    background: #f3f4f4;
  }
`

const fieldOptions = [
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' },
  { value: 'tag', label: 'Tag' },
  { value: 'organization', label: 'Organization' },
  { value: 'created', label: 'Created date' },
  { value: 'updated', label: 'Updated date' },
]

const operatorOptions = [
  { value: 'is', label: 'Is' },
  { value: 'is-not', label: 'Is not' },
  { value: 'contains', label: 'Contains' },
  { value: 'does-not-contain', label: 'Does not contain' },
  { value: 'starts-with', label: 'Starts with' },
  { value: 'ends-with', label: 'Ends with' },
]

const valueOptions = [
  { value: 'any', label: 'Any' },
  { value: 'none', label: 'None' },
]

const tagValueOptions = [
  { value: 'diamond', label: 'Diamond' },
  { value: 'platinum', label: 'Platinum' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
  { value: 'bronze', label: 'Bronze' },
  { value: 'nickle', label: 'Nickle' },
  { value: 'pewter', label: 'Pewter' },
]

const availableGroups = [
  { value: 'support', label: 'Support' },
  { value: 'sales', label: 'Sales' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
  { value: 'operations', label: 'Operations' },
  { value: 'product', label: 'Product' },
  { value: 'design', label: 'Design' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'legal', label: 'Legal' },
]

const AddConditionButton = styled.button`
  margin-top: 12px;
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  color: #1f73b7;
  background: #ffffff;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #edf7ff;
  }
`

const PreviewContainer = styled.div`
  border: 1px solid #d8dcde;
  border-radius: 4px;
  width: 100%;
`

const PreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
`

const PreviewCount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const PreviewText = styled.span`
  font-size: 14px;
  color: #68737d;
`

const RefreshButton = styled.button`
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  color: #1f73b7;
  background: #ffffff;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #edf7ff;
  }
`

const PreviewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const PreviewTh = styled.th`
  text-align: left;
  padding: 10px 24px;
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  border-top: 1px solid #d8dcde;
`

const PreviewTd = styled.td`
  padding: 12px 24px;
  font-size: 14px;
  color: #2f3941;
  border-top: 1px solid #e9ebed;
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
`

const EmptyIcon = styled.div`
  margin-bottom: 16px;
  color: #87929d;
`

const EmptyTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 4px;
`

const EmptyDescription = styled.span`
  font-size: 14px;
  color: #87929d;
`

const PreviewNameLink = styled.a`
  color: #1f73b7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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

const CancelButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #1f73b7;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #144a75;
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

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

const FormActionsWrapper = styled.div`
  position: relative;
`

const FormActionsButton = styled.button`
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  color: #1f73b7;
  background: #ffffff;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: #edf7ff;
  }
`

const FormActionsDropdown = styled.div`
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

const FormActionsDropdownItem = styled.button`
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

const allCustomers = customersByList.all

function CreateCustomerList({ onSave, onCancel, onDelete, onClone, onDeactivate, onActivate, initialName = '', initialAccess = 'any', initialConditions = null, isEditing = false, status, cameFromManage, onNavigateHome, onNavigateManage }) {
  const [name, setName] = useState(initialName)
  const [access, setAccess] = useState(initialAccess)
  const [conditions, setConditions] = useState(initialConditions || [{ category: '', operator: '', value: '' }])
  const [showPreview, setShowPreview] = useState(false)
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const [showDeleteError, setShowDeleteError] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [actionsOpen, setActionsOpen] = useState(false)
  const [selectedGroups, setSelectedGroups] = useState([])
  const [groupsDropdownOpen, setGroupsDropdownOpen] = useState(false)
  const [groupsSearch, setGroupsSearch] = useState('')
  const actionsRef = useRef(null)
  const groupsRef = useRef(null)

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (groupsRef.current && !groupsRef.current.contains(e.target)) {
        setGroupsDropdownOpen(false)
      }
    }
    if (groupsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [groupsDropdownOpen])

  const handleAddCondition = () => {
    setConditions([...conditions, { category: '', operator: '', value: '' }])
  }

  const handleSave = () => {
    if (name.trim()) {
      onSave({ name: name.trim(), access, conditions })
    }
  }

  return (
    <PageWrapper>
      {showDeleteError && (
        <ErrorNotificationWrapper>
          <Notification type="error">
            <NotifTitle>Cannot delete active list</NotifTitle>
            <Paragraph>Deactivate customer list before it can be deleted.</Paragraph>
            <NotifClose aria-label="Close" onClick={() => setShowDeleteError(false)} />
          </Notification>
        </ErrorNotificationWrapper>
      )}
      <FormArea>
        <Breadcrumbs>
          <BreadcrumbLink onClick={onNavigateHome}>Customer Lists</BreadcrumbLink>
          <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
          {cameFromManage ? (
            <>
              <BreadcrumbLink onClick={onNavigateManage}>Manage lists</BreadcrumbLink>
              <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
              <BreadcrumbCurrent>{initialName || 'New list'}</BreadcrumbCurrent>
            </>
          ) : (
            <BreadcrumbCurrent>{isEditing ? initialName : 'Create a customer list'}</BreadcrumbCurrent>
          )}
        </Breadcrumbs>
        <FormHeader>
          <TitleRow>
            <Title>{initialName || 'Create a customer list'}</Title>
            {isEditing && status && (
              <StatusTag $status={status === 'active' ? 'active' : 'inactive'}>
                {status === 'active' ? 'Active' : 'Inactive'}
              </StatusTag>
            )}
          </TitleRow>
          {isEditing && (
            <FormActionsWrapper ref={actionsRef}>
              <FormActionsButton onClick={() => setActionsOpen(!actionsOpen)}>
                Actions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </FormActionsButton>
              {actionsOpen && (
                <FormActionsDropdown>
                  <FormActionsDropdownItem onClick={() => { setActionsOpen(false); onClone?.() }}>
                    Clone
                  </FormActionsDropdownItem>
                  {status === 'active' || !status ? (
                    <FormActionsDropdownItem onClick={() => { setActionsOpen(false); setShowDeactivateModal(true) }}>
                      Deactivate
                    </FormActionsDropdownItem>
                  ) : (
                    <FormActionsDropdownItem onClick={() => { setActionsOpen(false); onActivate?.() }}>
                      Activate
                    </FormActionsDropdownItem>
                  )}
                  <FormActionsDropdownItem $destructive onClick={() => {
                    setActionsOpen(false)
                    if (status === 'active' || !status) {
                      setShowDeleteError(true)
                    } else {
                      setShowDeleteModal(true)
                    }
                  }}>
                    Delete
                  </FormActionsDropdownItem>
                </FormActionsDropdown>
              )}
            </FormActionsWrapper>
          )}
        </FormHeader>

        <div>
          <FieldLabel>Name* (required)</FieldLabel>
          <NameInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />

          <FieldLabel style={{ marginTop: '24px' }}>Who has access</FieldLabel>
          <SectionDescription>Select who can see and use this list</SectionDescription>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="access"
                value="any"
                checked={access === 'any'}
                onChange={() => setAccess('any')}
              />
              Any agent
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="access"
                value="only-you"
                checked={access === 'only-you'}
                onChange={() => setAccess('only-you')}
              />
              Only you
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="access"
                value="specific-groups"
                checked={access === 'specific-groups'}
                onChange={() => setAccess('specific-groups')}
              />
              Agents in specific groups
            </RadioLabel>
            {access === 'specific-groups' && (
              <GroupsContainer ref={groupsRef}>
                <GroupsLabel>Groups</GroupsLabel>
                <GroupsInputWrapper>
                  <GroupsInput
                    placeholder="Search groups"
                    value={groupsSearch}
                    onChange={(e) => setGroupsSearch(e.target.value)}
                    onFocus={() => setGroupsDropdownOpen(true)}
                  />
                  {groupsDropdownOpen && (
                    <GroupsDropdownMenu>
                      {availableGroups
                        .filter(g => g.label.toLowerCase().includes(groupsSearch.toLowerCase()))
                        .map(group => (
                          <GroupsDropdownItem
                            key={group.value}
                            $selected={selectedGroups.includes(group.value)}
                            onClick={() => {
                              if (selectedGroups.includes(group.value)) {
                                setSelectedGroups(selectedGroups.filter(g => g !== group.value))
                              } else {
                                setSelectedGroups([...selectedGroups, group.value])
                              }
                            }}
                          >
                            <GroupCheckbox $checked={selectedGroups.includes(group.value)}>
                              {selectedGroups.includes(group.value) && (
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                  <path d="M2 5L4 7L8 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </GroupCheckbox>
                            {group.label}
                          </GroupsDropdownItem>
                        ))}
                    </GroupsDropdownMenu>
                  )}
                </GroupsInputWrapper>
                {selectedGroups.length > 0 && (
                  <GroupsTags>
                    {selectedGroups.map(gValue => {
                      const group = availableGroups.find(g => g.value === gValue)
                      return (
                        <GroupTag key={gValue}>
                          {group?.label}
                          <GroupTagRemove onClick={() => setSelectedGroups(selectedGroups.filter(g => g !== gValue))}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M8 2L2 8M2 2l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </GroupTagRemove>
                        </GroupTag>
                      )
                    })}
                  </GroupsTags>
                )}
              </GroupsContainer>
            )}
          </RadioGroup>
        </div>

        <Section>
          <SectionTitle>Conditions</SectionTitle>
          <SectionDescription>
            Conditions must be met for the schedule to delete end users who have no open tickets.
          </SectionDescription>
          <ConditionsSubtitle>Meet ALL of the following conditions</ConditionsSubtitle>
          {conditions.map((condition, index) => (
            <ConditionCardWrapper key={index}>
              <ConditionCard>
                <ColumnLabels>
                  <ColumnLabel>Field</ColumnLabel>
                  <ColumnLabel>Operator</ColumnLabel>
                  <ColumnLabel>Value</ColumnLabel>
                </ColumnLabels>
                <ConditionsRow>
                  <ConditionSelect
                    value={condition.category}
                    options={fieldOptions}
                    onChange={(val) => {
                      const updated = [...conditions]
                      updated[index].category = val
                      setConditions(updated)
                    }}
                  />
                  <ConditionSelect
                    value={condition.operator}
                    options={operatorOptions}
                    onChange={(val) => {
                      const updated = [...conditions]
                      updated[index].operator = val
                      setConditions(updated)
                    }}
                  />
                  <ConditionSelect
                    value={condition.value}
                    options={condition.category === 'tag' ? tagValueOptions : valueOptions}
                    multiSelect={condition.category === 'tag'}
                    onChange={(val) => {
                      const updated = [...conditions]
                      updated[index].value = val
                      setConditions(updated)
                    }}
                  />
                </ConditionsRow>
              </ConditionCard>
              {index > 0 && (
                <RemoveConditionButton onClick={() => {
                  setConditions(conditions.filter((_, i) => i !== index))
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </RemoveConditionButton>
              )}
            </ConditionCardWrapper>
          ))}
          <AddConditionButton onClick={handleAddCondition}>
            Add condition
          </AddConditionButton>
        </Section>

        <Section>
          <SectionTitle>Preview list</SectionTitle>
          <SectionDescription>
            Sample of the data this schedule will start deleting the next time it runs.
          </SectionDescription>
          <PreviewContainer>
            {showPreview ? (() => {
              const hasValidConditions = conditions.some(c => c.category && c.operator && (Array.isArray(c.value) ? c.value.length > 0 : !!c.value))
              const results = hasValidConditions ? filterCustomers(allCustomers, conditions) : []
              return <>
                <PreviewHeader>
                  <PreviewCount>{results.length} customers</PreviewCount>
                  <RefreshButton onClick={() => setShowPreview(true)}>Refresh</RefreshButton>
                </PreviewHeader>
                {results.length > 0 ? (
                  <PreviewTable>
                    <thead>
                      <tr>
                        <PreviewTh>Name</PreviewTh>
                        <PreviewTh>Email</PreviewTh>
                        <PreviewTh>Tags</PreviewTh>
                        <PreviewTh>Timezone</PreviewTh>
                        <PreviewTh>Last updated</PreviewTh>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((customer, i) => (
                        <tr key={customer.id || i}>
                          <PreviewTd>
                            <PreviewNameLink href="#">{customer.name}</PreviewNameLink>
                          </PreviewTd>
                          <PreviewTd>{customer.email || '-'}</PreviewTd>
                          <PreviewTd>{customer.tags.length > 0 ? customer.tags.join(', ') : '-'}</PreviewTd>
                          <PreviewTd>{customer.timezone}</PreviewTd>
                          <PreviewTd>{customer.lastUpdated}</PreviewTd>
                        </tr>
                      ))}
                    </tbody>
                  </PreviewTable>
                ) : (
                  <EmptyState>
                    <EmptyIcon>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" stroke="#87929d" strokeWidth="1.5"/>
                        <circle cx="16" cy="11" r="1" fill="#87929d"/>
                        <path d="M16 15v7" stroke="#87929d" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </EmptyIcon>
                    <EmptyTitle>No results in sight</EmptyTitle>
                    <EmptyDescription>Adjust your search and try again.</EmptyDescription>
                  </EmptyState>
                )}
              </>
              })() : (
              <PreviewHeader>
                <PreviewText>Results will show here</PreviewText>
                <RefreshButton onClick={() => setShowPreview(true)}>Preview</RefreshButton>
              </PreviewHeader>
            )}
          </PreviewContainer>
        </Section>
      </FormArea>

      <BottomBar>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </BottomBar>
      {showDeactivateModal && (
        <Modal onClose={() => setShowDeactivateModal(false)}>
          <ModalHeader>
            Deactivate customer list
          </ModalHeader>
          <ModalBody>
            You are deactivating <strong>{initialName}</strong>. It will become unavailable for use, but you can reactivate or delete it at any time.
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
                onDeactivate?.()
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
            You are permanently deleting <strong>{initialName}</strong>. You will have to create it again after it has been deleted.
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
                onDelete?.()
              }}>
                Delete
              </Button>
            </FooterItem>
          </ModalFooter>
          <Close aria-label="Close modal" />
        </Modal>
      )}
    </PageWrapper>
  )
}

export default CreateCustomerList
