import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Modal, Header as ModalHeader, Body as ModalBody, Footer as ModalFooter, FooterItem, Close } from '@zendeskgarden/react-modals'
import { Notification, Title as NotifTitle, Paragraph, Close as NotifClose, Alert } from '@zendeskgarden/react-notifications'
import { Combobox, Option, Field as ComboField, Label as ComboLabel } from '@zendeskgarden/react-dropdowns'
import { Message } from '@zendeskgarden/react-forms'
import ConditionSelect from './ConditionSelect'
import { filterCustomers } from './filterCustomers'
import { customersByList } from './CustomersTable'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: clip;
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
  border: 1px solid ${props => props.$error ? '#cc3340' : '#d8dcde'};
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;
  outline: none;

  &:focus {
    border-color: ${props => props.$error ? '#cc3340' : '#1f73b7'};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(204, 51, 64, 0.15)' : 'rgba(31, 115, 183, 0.15)'};
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
  margin-top: -4px;
  margin-left: 30px;
  width: 430px;
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
  { value: 'billing', label: 'Billing' },
  { value: 'technical-support', label: 'Technical support' },
  { value: 'customer-success', label: 'Customer success' },
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
  color: #2f3941;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #49545c;
  }
`

const SaveButton = styled.button`
  height: 40px;
  padding: 0 28px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background: #2f3941;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background: #49545c;
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

const GroupsAlertWrapper = styled.div`
  max-width: 630px;
  margin-top: 32px;
  margin-bottom: 32px;
`

const allCustomers = customersByList.all

function CreateCustomerList({ onSave, onCancel, onDelete, onClone, onDeactivate, onActivate, initialName = '', initialAccess = 'any', initialConditions = null, initialGroups = [], isEditing = false, status, cameFromManage, onNavigateHome, onNavigateManage }) {
  const [name, setName] = useState(initialName)
  const [access, setAccess] = useState(initialAccess)
  const [conditions, setConditions] = useState(initialConditions || [{ category: '', operator: '', value: '' }])
  const [showPreview, setShowPreview] = useState(false)
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const [showDeleteError, setShowDeleteError] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [actionsOpen, setActionsOpen] = useState(false)
  const [selectedGroups, setSelectedGroups] = useState(initialGroups)
  const [groupsSearch, setGroupsSearch] = useState(() => {
    if (initialGroups.length > 0) {
      const group = availableGroups.find(g => g.value === initialGroups[0])
      return group ? group.label : ''
    }
    return ''
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertErrors, setAlertErrors] = useState([])
  const [groupsValidationError, setGroupsValidationError] = useState(false)
  const [nameValidationError, setNameValidationError] = useState(false)
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


  const handleAddCondition = () => {
    setConditions([...conditions, { category: '', operator: '', value: '' }])
  }

  const handleSave = () => {
    const errors = []
    if (!name.trim()) {
      setNameValidationError(true)
      errors.push('name')
    }
    if (access === 'specific-groups' && selectedGroups.length === 0) {
      setGroupsValidationError(true)
      errors.push('group')
    }
    if (errors.length > 0) {
      setAlertErrors(errors)
      setShowAlert(true)
      return
    }
    onSave({ name: name.trim(), access, conditions, groups: selectedGroups })
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

        {showAlert && (
          <GroupsAlertWrapper>
            <Alert type="error">
              <Alert.Title>Can't create customer list</Alert.Title>
              {alertErrors.length > 1 ? (
                <Alert.Paragraph>
                  <ul style={{ margin: '4px 0 0 0', paddingLeft: '20px' }}>
                    {alertErrors.includes('name') && <li>Add a name</li>}
                    {alertErrors.includes('group') && <li>You must select which group has access</li>}
                  </ul>
                </Alert.Paragraph>
              ) : (
                <Alert.Paragraph>
                  {alertErrors.includes('name') ? 'Add a name' : 'You must select which group has access'}
                </Alert.Paragraph>
              )}
              <Alert.Close aria-label="Close" onClick={() => setShowAlert(false)} />
            </Alert>
          </GroupsAlertWrapper>
        )}

        <div>
          <FieldLabel>Name* (required)</FieldLabel>
          <NameInput
            $error={nameValidationError}
            value={name}
            onChange={(e) => { setName(e.target.value); if (e.target.value.trim()) setNameValidationError(false) }}
            autoFocus
          />
          {nameValidationError && (
            <div style={{ marginTop: '8px' }}>
              <Message validation="error">Add a name</Message>
            </div>
          )}

          <FieldLabel style={{ marginTop: '24px' }}>Who has access</FieldLabel>
          <SectionDescription>Select who can see and use this list</SectionDescription>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="access"
                value="any"
                checked={access === 'any'}
                onChange={() => { setAccess('any'); setGroupsValidationError(false) }}
              />
              Any agent
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="access"
                value="only-you"
                checked={access === 'only-you'}
                onChange={() => { setAccess('only-you'); setGroupsValidationError(false) }}
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
              <GroupsContainer>
                <ComboField>
                  <ComboLabel style={{ fontWeight: 400, fontSize: '14px' }}>Select which group has access*</ComboLabel>
                  <Combobox
                    isAutocomplete
                    inputValue={groupsSearch}
                    selectionValue={selectedGroups[0] || null}
                    validation={groupsValidationError ? 'error' : undefined}
                    onChange={(changes) => {
                      if ('inputValue' in changes) {
                        setGroupsSearch(changes.inputValue || '')
                      }
                      if ('selectionValue' in changes) {
                        const val = changes.selectionValue
                        setSelectedGroups(val ? [val] : [])
                        if (val) setGroupsValidationError(false)
                      }
                    }}
                  >
                    {availableGroups.map(group => (
                      <Option key={group.value} value={group.value} label={group.label} />
                    ))}
                  </Combobox>
                  {groupsValidationError && (
                    <Message validation="error" style={{ marginTop: '8px' }}>Select a group</Message>
                  )}
                </ComboField>
              </GroupsContainer>
            )}
          </RadioGroup>
        </div>

        <Section>
          <SectionTitle>Conditions</SectionTitle>
          <SectionDescription>
            Use conditions to determine which customers appear in this list.
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
            Preview of customers who will appear in this list.
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
        <SaveButton onClick={handleSave}>{isEditing ? 'Save' : 'Create'}</SaveButton>
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
