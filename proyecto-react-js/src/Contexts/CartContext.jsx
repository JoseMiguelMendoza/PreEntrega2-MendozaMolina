import { createContext } from "react";

// Con esto ya creamos el contexto.
export const CartContext = createContext();

// CartProvider, sería la etiqueta donde encerraremos a la App, para hacer que este contexto se aplique a todo.
// CartContext, sería de donde sacamos los datos.


const CartProvider = ({children}) => {
    // PONER ESTADO (USESTATE) -> recordar importar useState

    // Tambien puedes usar useEffect -> recordar importar useEffect

    // PUEDES PONER FUNCIONES QUE HAGAN ALGO TÁMBIEN

    // Con respecto a "children", hace referencia a que, todos los niños que esten encerrados bajo la etiqueta: CartContext.Provider, serán afectados por este contexto.
    return(
        <CartContext.Provider value={"aqui puedes poner los valores que tu quieras, si es solo 1 valor, quita este string y ponelo. Si es más de 1 valor, entonces encierralos entre llaves y separalos por comas."}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
// esto hará que podamos exportar la funcion, y al importarla se la declara de la siguiente forma.
// En este caso:
// import CartProvider from "./Contexts/CartContext"

// PD: Un movimiento COMUN para colocar los contextos, es hacerlo en el archivo main.jsx, encerrando al componente App en el contexto, asi se verán afectados todos los componentes de App.

// Y ahora si queremos pasar valores a algun componente, creamos una constante, y lo hacemos de la siguiente forma.
// const {valor1, valor2} = useContext(CartContext) -> PD: los valores tienen que ser IGUALES a los mencionados en este contexto, no se les puede cambiar de nombre. Si es valor1 y valor2, pues asi se llamaran en los otros componentes en donde necesitemos reutilizar estas variables. 
// PD: Si en un componente por ejemplo, necesitas solo el valor2, pero no el valor1, entonces puedes escribirlo igual, solo que sin el valor1.
// const {valor2} = useContext(CartContext)