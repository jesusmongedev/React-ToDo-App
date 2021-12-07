import React from 'react';
// El initialValue="[]" lo definimos cuando llamamos a nuestro Custom Hook useLocalStorage 
const useLocalStorage = (itemName, initialValue) => {
  // Creamos un estado para el error en caso de que los datos no carguen
  const [error, setError] = React.useState(false);
  // Creamos un estado para el loading y setLoading
  const [loading, setLoading] = React.useState(true);
  // Dentro de nuestros Custom Hooks podemos llamar React Hooks oficiales
  const [item, setItem] = React.useState(initialValue);

    // Usaremos el React Hook useEffect para cargar los Todos iniciales en el primer Render
    React.useEffect((() => {
      setTimeout(() => {

        try {
          // Persistencia de datos con local Storage
          // 1) Definir nuestra constante que va a obtener el valor de la clave 'itemName'
          // localStorage.getItem('itemName'); === localStorage.itemName
          const localStorageItem = localStorage.getItem(itemName);
        
          // 2) Inicializamos una variable la cual almacenara nuestro valor parseado = Array
          let parsedItem;
        
          // Si el usuario es nuevo, no mostrar Todos, si ya creo Todos mostrarleselos
          // Con el primer condicional verificamos si localStorageItem es = null, undefined, '', false
          // Entra al bloque de código porque seria un valor Flasy y el ! lo hace truthy
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
        
            // parsedItem = JSON.parse(localStorage.itemName);
            parsedItem = initialValue;
  
          } else {
            // Transformamos el valor de String a un Objeto que entiende Js => Array
            parsedItem = JSON.parse(localStorageItem);
          }
  
          // Actualizamos nuestro item con la información en localStorage
          setItem(parsedItem);
          // En este punto ya cargaron los datos por eso setLoading(false)
          setLoading(false);

        } catch(error) {
          setError(error);
        }
      }, 2000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),[]);

  
    // Funcion puente entre nuestas funcs CompleteTodo, deleteTodo, nuestro localStorage y nuestro estado setItem
    const saveItem = (newItem) => {

      try {
        // Como el localStorage solo guarda Strings transformamos los Arrays actualizados => newItem a string usando stringify
        // const stringifiedItem = localStorage.setItem('itemName', JSON.stringify(newItem));
        const stringifiedItem = JSON.stringify(newItem);
    
        // Guardamos el nuevo Array convertido a string en nuestro localStorage con la clave 'itemName'
        localStorage.setItem(itemName, stringifiedItem);
    
        // Al estado setItem le enviamos newItem que es un Array
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
  
    // Por concencion cuando retornemos mas de 2 estados debemos enviar un Objeto {}
    return {
      item,
      saveItem,
      loading,
      error,
    };
  };

export { useLocalStorage };