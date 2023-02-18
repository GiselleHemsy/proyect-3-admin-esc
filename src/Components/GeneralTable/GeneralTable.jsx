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
          <tr key={index} onClick={()=>setSelected(item.id)} className={selected==item.id? "rowSelected" :""}>
            {
              Object.values(item)?.map((value, index)=><td key={index} >{value}</td>)
              // Uso Optional Chaning para que haga el map solo si estan los items, sino no.
            }
          </tr>)
        }
      </tbody>
    </Table>
  );
}

export default GeneralTable;