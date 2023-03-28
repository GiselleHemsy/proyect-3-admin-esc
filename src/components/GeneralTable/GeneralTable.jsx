import { Table } from "react-bootstrap";
import "./GeneralTable.css"

const GeneralTable = ({headings, items, setSelected, selected}) => {

  return ( 
    <Table striped bordered hover>
      <thead>
        <tr >
          {headings.map((heading, index) => <th key={index} >{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {
        items.map((item, index)=> 
          <tr key={index} onClick={()=>setSelected(item.dni)} className={selected==item.dni? "rowSelected" :""}>
            {
              Object.values(item)?.map((value, index)=><td key={index} >{value}</td>)
            }
          </tr>)
        }
      </tbody>
    </Table>
  );
}

export default GeneralTable;