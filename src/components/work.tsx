import React from 'react'
import Header from './header'
import BentoLayout from '../layouts/bentoLayout'
import PomodoroTimer from './timer'
import Tasks from './tasks'
import Reminders from './reminders'
import Notes from './notes'
import { colors } from '../helpers/colors'

export default function Work() {
  return (
    <div className="work">
      <Header />
      {/* <BentoLayout>
        <p>work</p>
        <p>work</p>
      </BentoLayout> */}

      <div className="content">
        <div className="content-left">
          <div className="content-left-top">
            <div className="content-left-top-left-box">
              <PomodoroTimer />
            </div>

            <div className="content-left-top-right-box">
              <Reminders />
            </div>
          </div>

          <div className="content-left-bottom-box">
            <Notes />
          </div>
        </div>

        <div className="content-right-box">
          <Tasks color={colors.red} defaultType="work" />
        </div>
      </div>
    </div>
  )
}
