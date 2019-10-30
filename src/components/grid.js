import React, { Component } from 'react';
import Tile from './tile.js'

class Grid extends Component {
    render() { 
        return ( 
            <div id="grid">
                {new Array(121).fill(0).map((item,index) => {
                return <Tile/>
                })}
            </div>
         );
    }
}
 
export default Grid;