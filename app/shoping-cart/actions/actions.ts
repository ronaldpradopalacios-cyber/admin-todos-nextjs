// "use client" side...

import { hasCookie, getCookie, setCookie } from "cookies-next";

/* 
Cookie obj ejemplo

cart {
    'uuid-123-1': 1,
    'uuid-123-2': 4,
    'uuid-123-3': 1
}
*/

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
    return cookieCart;
  }

  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  delete cookieCart[id];
  // if (cookieCart[id]) {
  //   cookieCart[id] -= 1;
  //   if (cookieCart[id] <= 0) {
  //   }
  // }

  setCookie("cart", JSON.stringify(cookieCart));
};
