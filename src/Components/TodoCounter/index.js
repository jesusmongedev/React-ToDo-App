import './TodoCounter.scss'

const TodoCounter = ( {total, completed})  => {
    console.log('Se renderizó el TodoCounter');
    return (
        <h1 className="todo-counter"> Haz completado <p> {completed} de {total} Todos </p>  </h1>
    );
};

export {TodoCounter};