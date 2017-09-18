import { Component } from 'react'

import Gun from 'gun/gun.min.js'
import GunSQLite from 'gun-react-native-sqlite'


const adapter = GunSQLite.bootstrap(Gun)
const gun = new Gun('http://192.168.0.22:9005/gun')

// Add to React Component prototype for global availability
Component.prototype.$gun = gun

module.exports = gun