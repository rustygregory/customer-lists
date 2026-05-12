import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const Trigger = styled.button`
  width: 100%;
  padding: 10px 12px;
  padding-right: 32px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: ${props => props.$hasValue ? '#2f3941' : '#68737d'};
  background: #ffffff;
  text-align: left;
  cursor: pointer;
  outline: none;
  position: relative;

  &:focus {
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }

  &::after {
    content: '';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #68737d;
  }
`

const MultiTrigger = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 6px 32px 6px 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: #68737d;
  background: #ffffff;
  text-align: left;
  cursor: pointer;
  outline: none;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;

  &:focus {
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }

  &::after {
    content: '';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #68737d;
  }
`

const TagPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: #e9ebed;
  border-radius: 4px;
  font-size: 13px;
  color: #2f3941;
`

const TagRemove = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: #68737d;

  &:hover {
    color: #2f3941;
  }
`

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  z-index: 200;
  padding: 8px 0;
  max-height: 240px;
  overflow-y: auto;
`

const MenuItem = styled.div`
  padding: 12px 20px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8f9f9;
  }
`

const CheckMark = styled.span`
  width: 16px;
  display: inline-flex;
  align-items: center;
  color: #1f73b7;
`

function ConditionSelect({ value, options, onChange, multiSelect = false }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  if (multiSelect) {
    const selectedValues = Array.isArray(value) ? value : value ? [value] : []

    const handleToggle = (val) => {
      if (selectedValues.includes(val)) {
        onChange(selectedValues.filter(v => v !== val))
      } else {
        onChange([...selectedValues, val])
      }
    }

    const handleRemoveTag = (e, val) => {
      e.stopPropagation()
      onChange(selectedValues.filter(v => v !== val))
    }

    return (
      <Wrapper ref={ref}>
        <MultiTrigger
          type="button"
          onClick={() => setOpen(!open)}
        >
          {selectedValues.length > 0 ? (
            selectedValues.map(val => {
              const label = options.find(o => o.value === val)?.label || val
              return (
                <TagPill key={val}>
                  {label}
                  <TagRemove onClick={(e) => handleRemoveTag(e, val)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M7.5 2.5L2.5 7.5M2.5 2.5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </TagRemove>
                </TagPill>
              )
            })
          ) : (
            <span>&nbsp;</span>
          )}
        </MultiTrigger>
        {open && (
          <Menu>
            {options.map(option => {
              const isSelected = selectedValues.includes(option.value)
              return (
                <MenuItem
                  key={option.value}
                  onClick={() => handleToggle(option.value)}
                >
                  <CheckMark>
                    {isSelected && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </CheckMark>
                  {option.label}
                </MenuItem>
              )
            })}
          </Menu>
        )}
      </Wrapper>
    )
  }

  const selectedLabel = options.find(o => o.value === value)?.label || ''

  return (
    <Wrapper ref={ref}>
      <Trigger
        type="button"
        onClick={() => setOpen(!open)}
        $hasValue={!!value}
      >
        {selectedLabel || ' '}
      </Trigger>
      {open && (
        <Menu>
          {options.map(option => (
            <MenuItem
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Wrapper>
  )
}

export default ConditionSelect
