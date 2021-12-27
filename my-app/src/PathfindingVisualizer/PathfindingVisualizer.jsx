import React from 'react'
import { useState, useEffect } from 'react'
import Node from "./Node/Node"
import "./PathfindingVisualizer.css"

function PathfindingVisualizer() {
    const [nodes, setNodes] = useState([])

    const makeGrid = () => {
        const node = [];
        for (let row = 0; row < 15; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                currentRow.push([])
            }
            node.push(currentRow)
        }
        setNodes(node)
    }

    useEffect(() => {
        makeGrid()
    }, [])

    return (
        <div className='grid'>
            {nodes.map((row, rowIdx) =>{
                return <div>
                    {row.map((node, nodeIdx) => <Node></Node>)}
                </div>
            })}
        </div>
    )
}

export default PathfindingVisualizer