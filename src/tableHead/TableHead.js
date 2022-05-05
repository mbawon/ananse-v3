import React from 'react'

const TableHeader = ({columns}) =>{
    return (
        <thead>
            {
                columns?.map((col,index)=><tr key={index}><th>{col.name}</th></tr>)
            }
        </thead>
    )
}

export default TableHeader