import React, { useState } from 'react'
import '../styles/textInput.scss'
import DropdownIcon from '../../public/assets/icons/dropdown'

interface DropdownInputProps {
  options: string[]
  height?: number
  label?: string
  borderRadius?: number
  borderColor: string
}

export default function DropdownInput({
  options,
  height = 32,
  label = '',
  borderRadius = 999,
  borderColor,
}: DropdownInputProps) {
  const [inputValue, setInputValue] = useState(options[0])
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div style={{ height: `${height}px` }}>
      <div
        className="dropdown-input-backdrop"
        style={{ opacity: isExpanded ? 0.25 : 0, zIndex: isExpanded ? 10 : -1 }}
        onClick={() => setIsExpanded(false)}
      />
      <div
        className="dropdown-input"
        style={{
          borderColor: `var(${borderColor})`,
          borderRadius: `${borderRadius}px`,
          height: isExpanded ? `${(height + 16) * options.length + 16}px` : `${height}px`,
          boxShadow: isExpanded
            ? '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
            : 'none',
          padding: isExpanded ? '0 36px' : '0 16px',
          margin: isExpanded ? '0 -20px' : '0',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="dropdown-input-main" style={{ height: `${height - 4}px` }}>
          <p className="dropdown-input-main-label" style={{ color: `var(${borderColor})` }}>
            {label ? `${label} - ` : ''}{inputValue}
          </p>
          <DropdownIcon width={14} height={14} color={`var(${borderColor})`} rotate={isExpanded ? 180 : 0} />
        </div>
        <div className="dropdown-input-underline" />

        {isExpanded && (
          <div className="dropdown-input-options">
            {options.map((option) => (
              <p
                className="dropdown-input-options-option"
                key={option}
                onClick={() => {
                  setInputValue(option)
                  setIsExpanded(false)
                }}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
