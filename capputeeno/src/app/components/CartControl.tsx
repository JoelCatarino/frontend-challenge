import React from "react";
import useLocalStorage from "../hook/useLocalStorage";
import { ShoppingCart } from "@phosphor-icons/react";

const Cart: React.FC = () => {
  const { cartItemCount } = useLocalStorage();

  return (
    <div className="relative">
      <span className="w-5 h-5 bg-delete rounded-full text-branco items-center justify-center flex absolute top-2/4 -right-2">
        {cartItemCount}
      </span>
      <ShoppingCart size={26} />
    </div>
  );
};

export default Cart;
