import React from 'react'
import BattleStage from '../BattleStage/BattleStage'
import MessageBox from '../MessageBox/MessageBox'

export default function Battle({setGameState, gameState}) {
  return (
    <div className='battle-screen flex-ctr-ctr flex-col'>
        <BattleStage setGameState={setGameState} />
        <MessageBox />
    </div>
  )
}
