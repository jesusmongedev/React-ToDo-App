import { ImPlus } from "react-icons/im";
import './CreateButton.scss'

const CreateButton = (props) => {
  console.log('Se renderizo el CreateButton');
  const onClickButton = () => {
    alert('The modal will be open here to add Todos')
  }

    return (
        <button
        onClick={onClickButton}
      >
        <ImPlus className="plus-icon" />
      </button>
    );
};

export {CreateButton};