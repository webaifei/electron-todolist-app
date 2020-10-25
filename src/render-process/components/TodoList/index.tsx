import React from 'react'
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react'
import TodoItem from '../TodoItem'


const items = [];


export default function TodoList() {
  const columns: Array<IColumn> = [
    { key: 'id', name: 'ID', fieldName: 'id', minWidth: 100, maxWidth: 100, isResizable: true },
    { key: 'text', name: '代办事项', fieldName: 'text', minWidth: 100, maxWidth: 200, isResizable: true },
  ];
  return (
    <div>
      <DetailsList
        items={items}
        columns={columns}
        setKey="id"
        layoutMode={DetailsListLayoutMode.justified}
        selectionPreservedOnEmptyClick={true}
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        checkButtonAriaLabel="Row checkbox"
      />
    </div>
  )
}
