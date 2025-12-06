import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({product}) => {
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()

    return product && (
        <div
          onClick={()=> {
            navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
            scrollTo(0,0)
          }}
          className="border border-gray-500/20 rounded-md px-3 md:px-4 py-2 bg-white w-full sm:min-w-56 sm:max-w-56"
        >
            <div className="group cursor-pointer flex items-center justify-center px-1 md:px-2">
                <img
                  className="group-hover:scale-105 transition w-24 sm:w-28 md:w-32 object-contain"
                  src={product.image[0]}
                  alt={product.name}
                />
            </div>
            <div className="text-gray-500/60 text-sm mt-1">
                <p className="text-xs sm:text-sm">{product.category}</p>
                <p className="text-gray-700 font-medium text-base md:text-lg truncate w-full mt-0.5">
                  {product.name}
                </p>
                <div className="flex items-center gap-0.5 mt-1">
                    {Array(5).fill('').map((_, i) => (
                        <img
                          key={i}
                          className="w-3 md:w-3.5"
                          src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                          alt=""
                        />
                    ))}
                    <p className="text-xs">(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-sm sm:text-base font-medium text-primary">
                        {currency}{product.offerPrice}{" "}
                        <span className="text-gray-500/60 md:text-sm text-xs line-through">
                          {currency}{product.price}
                        </span>
                    </p>
                    <div onClick={(e) => { e.stopPropagation(); }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button
                              className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[68px] h-[32px] rounded cursor-pointer text-xs sm:text-sm"
                              onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} alt="cart_icon" className="w-3.5 h-3.5"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[32px] bg-primary/25 rounded select-none text-sm">
                                <button
                                  onClick={() => {removeFromCart(product._id)}}
                                  className="cursor-pointer text-md px-2 h-full"
                                >
                                    -
                                </button>
                                <span className="w-5 text-center text-xs sm:text-sm">
                                  {cartItems[product._id]}
                                </span>
                                <button
                                  onClick={() => {addToCart(product._id)}}
                                  className="cursor-pointer text-md px-2 h-full"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
