import React, { Component } from 'react';
import Tile from './tile.js'

class Grid extends Component {
    constructor(){
        super()
        this.state = {
            grid: new Array(121).fill(0)
        }
    }
    render() { 
        return ( 
            <div id="grid">
                {this.state.map(() => {
                return <Tile/>
                })}
            </div>
         );
    }
}
 
export default Grid;