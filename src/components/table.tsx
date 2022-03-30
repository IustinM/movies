import React,{useMemo,useEffect} from "react";
// import components
import { useSortBy, useTable } from "react-table";

const Table = ({data}:{data:any}) => {
     
    const tableData:any = useMemo(() =>
    [
        
        ...data.results,[data.results]
        
    ], []);
    
    
    const columns:any = useMemo(()=> 
        data.results[0]? Object.keys(data.results[0]).map((key)=>{
            if (key === "backdrop_path")
            return {
                Header: key,
              accessor: key,
              Cell: ({ value }:{value:any}) => <img src={`https://image.tmdb.org/t/p/original${value}`} />,
              maxWidth: 70,
            };

            return { Header: key, accessor: key };
        } )

        :[],[data.results]);
        
        const tableInstance = useTable({columns,data:tableData},useSortBy);
        const {getTableProps , getTableBodyProps, headerGroups,rows,prepareRow} = tableInstance;
        
        
        const isEven = (idx:number):boolean =>{
            if(idx % 2 === 0){
                return true;
            }
            return false;
            
        }
  return (
    <div>
        <table>
                <thead  className="border-[1px] border-black">
                    {headerGroups.map((headerGroup) => (
                        <tr  className="border-[1px] border-black" {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th  className="border-[1px] border-black" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.isSorted? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                                        {column.render('Header')}
                        </th>

                                ))}

                        </tr>
                    ))}
                </thead>
                <tbody  className="border-[1px] border-black" {...getTableBodyProps}>
                    {rows.map((row,idx) => {
                       
                        prepareRow(row)
                        return(
                        <tr  className={ !isEven(idx) ? "border-[1px] border-[#0000006b] bg-[#9b1bce4b]" : "border-[1px] border-black" } {...row.getRowProps()}>
                                {row.cells.map((cell) =>{
                                    return(
                                    <td className="border-[1px] border-black" {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                        
                                    </td>
                                    )
                                })}
                          
                        </tr>
                        )

                    })}
                </tbody>
            </table>
    </div>
  )
}

export default Table