import React, {Component} from 'react'
import {render} from 'react-dom'
import Horizon from '@horizon/client'
import { Provider} from 'react-x-horizon'

import TodosView from './TodosView'

class App extends Component {
  render() {
    return (
      <div>
        <TodosView />
      </div>
    )
  }
}

render((
  <Provider hz={Horizon()}>
    <App />
  </Provider>
), document.getElementById('app'))