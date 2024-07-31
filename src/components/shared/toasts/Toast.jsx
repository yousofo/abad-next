"use client";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({ active, data }) {
  useEffect(() => {
    toast.success(data, {
      position: "top-center",
    });
  }, [active]);
  return <ToastContainer />;
}
