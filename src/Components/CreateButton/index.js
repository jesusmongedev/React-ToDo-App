import { ImPlus } from "react-icons/im";
import './CreateButton.scss'

const CreateButton = (props) => {
  const onClickButton = () => {
    // props.setOpenModal(!props.openModal);
    // Otra forma de abrir y cerrar el Modal
    props.setOpenModal(prevState => !prevState);
  }

    return (
        <button
        className="todo-button"
        onClick={onClickButton}
      >
        <ImPlus className="plus-icon" />
      </button>
    );
};

export {CreateButton};