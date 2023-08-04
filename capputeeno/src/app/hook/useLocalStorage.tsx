// hooks/useCart.js
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  // Outras propriedades do produto, se houver
}

const useLocalStorage = () => {
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    // Recuperar a quantidade de itens no carrinho ao carregar a página
    const cartItems: Product[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItemCount(cartItems.length);
  }, []);

  const addToCart = (product: Product) => {
    // Recuperar os itens atuais do carrinho do localStorage
    const cartItems: Product[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    // Adicionar o novo produto ao carrinho
    cartItems.push(product);

    // Atualizar o localStorage com os novos itens do carrinho
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Atualizar a contagem de itens exibida no carrinho
    setCartItemCount(cartItems.length);
  };

  // const removeFromCart = (productToRemove: Product) => {
  //   // Recuperar os itens atuais do carrinho do localStorage
  //   const cartItems: Product[] = JSON.parse(
  //     localStorage.getItem("cartItems") || "[]"
  //   );

  //   // Remover o produto do carrinho
  //   const updatedCartItems: Product[] = cartItems.filter(
  //     (product) => product.id !== productToRemove.id
  //   );

  //   // Atualizar o localStorage com os novos itens do carrinho
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

  //   // Atualizar a contagem de itens exibida no carrinho
  //   setCartItemCount(updatedCartItems.length);
  // };

  return {
    cartItemCount,
    addToCart,
    // removeFromCart,
  };
};

export default useLocalStorage;
