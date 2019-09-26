import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { asyncComponent } from '../component/common/AsyncComponent'

const CesiumGlobal = asyncComponent(() => import('../pages/cesium/CesiumGlobal'))
const LeafletMap = asyncComponent(() => import('../pages/leaflet/LeafletMap'))

export default class Router extends Component {
  render () {
    return (
      <Switch>
        <Route exact key='cesium' path='/myworld/cesium' component={CesiumGlobal}></Route>
        <Route exact key='leaflet' path='/myworld/leaflet' component={LeafletMap}></Route>
      </Switch>
    )
  }
}
