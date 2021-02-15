import React from 'react'
import { Table } from 'rsuite';
import './styles.css'

const { Column, HeaderCell, Cell } = Table;

const ListEgressos = (props) =>{
    return(
        <div className={'tableEgressos'}>
            <Table
            height={480}
            width={850}
            data={props.listData}
            onRowClick={data => {
                console.log(data);
            }}
            >
            <Column width={500} align="center" fixed>
                <HeaderCell >Nome do Egresso</HeaderCell>
                <Cell dataKey="name" />
            </Column>
            <Column width={120} >
                    <HeaderCell>Linkedin</HeaderCell>
    
                    <Cell>
                        {rowData => {
                            return (
                            <span>
                                <a target={'_blank'} href={"https://www.linkedin.com/in/" + rowData.linkedinId}>Link</a> 
                            
                            </span>
                            );
                        }}
                        </Cell>
                    </Column>
            </Table>
            
        </div>
    )
}
export default ListEgressos