import React,{useMemo,useEffect} from "react";
// import components
import { useSortBy, useTable } from "react-table";
import { useQuery } from "react-query";
import Nav from "../components/nav";


const ApiPage = () =>{
    const key = '8550cbc503198174b8c1f43b78c9cb14';
    
    
    const popularMovies = async ({pageParam = 1}) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pageParam}`);
        

        return await response.json()
    }
    const { data, isLoading,isError} =  useQuery('popular' , popularMovies);
    

  
    
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
    if(data.isLoading){
        return (<p>Is Loading...</p>)
    }
    
    if(data.isError){
        return (<p>Is Error...</p>)
    }
    
    
    const isEven = (idx:number):boolean =>{
            if(idx % 2 === 0){
                return true;
            }
            return false;

    }

    
    return(
        <div className="Api">
            <Nav/>
            <h1     >Api docs</h1>
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
            <div className="pagination"></div>
            
        </div>

    )
}


export default ApiPage;
