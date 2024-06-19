import React from 'react'
import { colors } from '../helpers/colors'
import Button from './button'
import PlusIcon from '../../public/assets/icons/plus'
import DropdownInput from './dropdownInput'
import Milestones from './milestones'

export default function Goals() {
  return (
    <div className="goals">
      <div className="goals-header">
        <p className="goals-header-title">
          <span style={{ fontWeight: 'bold' }}>GOALS</span> - WHAT WILL YOUR{' '}
          <span style={{ color: colors.purple }}>LEGACY</span> BE?
        </p>
        <Button color={colors.purple} icon={<PlusIcon width={12} height={12} color={colors.purple} />} label="ADD GOAL" />
      </div>
      <div className="goals-dropdown">
        <DropdownInput
          options={["Launch Legacy Apps", "Run a Marathon", "Read 50 Books"]}
          borderRadius={16}
          borderColor="--black"
        />
      </div>

      <Milestones />
    </div>
  )
}
