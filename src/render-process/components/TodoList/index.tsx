import React, {useEffect, useState} from 'react'
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react'
import TodoItem from '../TodoItem'
import { db } from '../../utils';
import Result from '../../../models/Result';
import { ITodo } from '../../Model/Todo';




export default function TodoList() {
  const columns: Array<IColumn> = [
    { key: 'id', name: 'ID', fieldName: 'id', minWidth: 100, maxWidth: 100, isResizable: true },
    { key: 'text', name: '代办事项', fieldName: 'text', minWidth: 100, maxWidth: 200, isResizable: true },
  ];
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(()=> {
    (async() =>{
      try {
        const todos = await db.getTodos();
        setTodos(todos);
      } catch (error) {

      }
    })();
  }, []);
  return (
    <div>
      <DetailsList
        items={todos}
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
