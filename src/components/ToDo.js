import {useState} from "react";
const ToDo = props => (
    <tr>
        <td>
            {props.id}
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);

function ExampleToDo(){
    const [todos, setTodos] = useState([
        {
            id: "todo1",
            createdAt: "18:00"
        },
        {
            id: "todo2",
            createdAt: "20:30"
        }
    ]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((t,index) => (
                        <ToDo key={t.id} id={t.id} createdAt={t.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExampleToDo;