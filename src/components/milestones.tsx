import React from 'react'
import { colors } from '../helpers/colors'
import Button from './button'
import PlusIcon from '../../public/assets/icons/plus'
import EditIcon from '../../public/assets/icons/edit'

export default function Milestones() {
  const tempMilestones = [
    {
      type: 'Short Term',
      content: 'Inspo',
      date: '2022-01-01',
      completion: '100%',
    },
    {
      type: 'Long Term',
      content: 'Spin up electron instance with React >= 19, Sass, and Webpack. Ensure build completes successfully',
      date: '2022-02-01',
      completion: '0%',
    },
    {
      type: 'Short Term',
      content: 'Complete tab designs',
      date: '2022-01-01',
      completion: '50%',
    },
  ]
 
  return (
    <div className="milestones">
      <div className="milestones-header">
        <p className="milestones-header-title">MILESTONES</p>
        <Button
          color={colors.purple}
          icon={<PlusIcon width={12} height={12} color={colors.purple} />}
          label="ADD MILESTONE"
        />
      </div>

      <div className="milestones-content">
        {tempMilestones.map((milestone, index) => (
          <div className="milestones-content-el" key={index}>
            <div className="milestones-content-el-header">
              <p className="milestones-content-el-header-type">{milestone.type}</p>
              <EditIcon width={18} height={18} color={colors.lightGray} />
            </div>
            <p className="milestones-content-el-text">{milestone.content}</p>
            <div className="milestones-content-el-completion">
              <div style={{ left: `${milestone.completion}` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
