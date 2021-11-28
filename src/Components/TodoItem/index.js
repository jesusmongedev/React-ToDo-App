import "./TodoItem.scss";
import { BsCheck2Square } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoItem = (props) => {
  console.log('Se renderizo el TodoItem');
  return (
    <li
      className={`todo-form-item ${props.deleted ? "todo-form-item__deleted" : ""}`}
    >
      <p
        className={`list-content ${
          props.completed ? "list-content__completed" : ""
        }`}
        >
        <span
          className={`checkbox ${props.completed ? "checkbox__completed" : ""}`}
          onClick={props.onComplete}
        >
        <BsCheck2Square/>
        </span>
          {props.text}

      </p>

      <div className="form-actions">
        <span 
          onClick={props.onEdit}
        >
          <BiEdit className="form-actions-icon form-actions-edit" />
        </span>

        <span 
          onClick={props.onDelete}
        >
          <RiDeleteBinLine className="form-actions-icon form-actions-delete" />
        </span>
      </div>
    </li>
  );
};

export { TodoItem };
