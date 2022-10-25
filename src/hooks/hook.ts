import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import type { RootState, AppDispatch } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
