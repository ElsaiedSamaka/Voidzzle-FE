import { RootState } from "core/store";
import { getTodosThunk } from "core/store/todos/todos.thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";

const Table = ({
  title,
  _head = true,
  _body = true,
  _footer = true,
  _actions = true,
  _search = true,
}) => {
  // const dispatch = useDispatch();
  // const todosSlice = useSelector((state: RootState) => state.todos);
  // get todos from api just when component is mounted
  // useEffect(() => {
  //   dispatch(getTodosThunk());
  // }, [dispatch]);
  return (
    // <div>
    //   Table
    //   {/* <button onClick={() => dispatch(getTodosThunk())}>click me</button>
    //   <ul>
    //     {todosSlice.loading && <li>loading...</li>}
    //     {todosSlice.error && <li>error...</li>}
    //     {todosSlice.todos.map((todo) => (
    //       <li key={todo.id}>{todo.title}</li>
    //     ))}
    //   </ul> */}
    // </div>
    <div className=" mx-auto max-w-screen-2xl my-2">
      <div className="relative overflow-hidden bg-white shadow rounded-md">
        {/* table head */}
        {_head && (
          <TableHead title={title} _actions={_actions} _search={_search} />
        )}
        {/* table head */}
        {/* table body */}
        {_body && <TableBody />}
        {/* table body */}
        {/* table footer */}
        {_footer && <TableFooter />}
        {/* table footer */}
      </div>
    </div>
  );
};

export default Table;

