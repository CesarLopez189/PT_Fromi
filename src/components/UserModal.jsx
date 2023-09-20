import React from "react";
import { motion } from "framer-motion";
import UserInfoField from "@/components/UserInfoField";

function UserModal({ selectedUser, onClose }) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleCloseModal} // Cierra el modal al hacer clic en el fondo difuminado
    >
      <motion.div
        className="w-7/12 h-3/5 bg-white p-4 rounded-lg relative grid grid-cols-2 grid-rows-2 gap-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido del modal lo cierre
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 font-bold"
          onClick={onClose}
        >
          X
        </button>

        <div className="flex justify-center items-center">
          <img
            src={selectedUser.Imagen}
            className="w-48 mt-12"
            alt="Avatar"
            style={{
              clipPath: "circle(39% at 50% 35%)",
              marginTop: "30%",
            }}
          />
        </div>

             
        <div className="flex justify-start items-center">
          <p className=" text-3xl font-bold">{selectedUser.Nombre}</p>
          <p className="ml-4 text-3xl font-bold">{selectedUser.Apellido}</p>
        </div>

        <div></div>

        <div className="flex flex-col justify-center items-start">
          <UserInfoField label="Correo" value={selectedUser.Correo} />
          <UserInfoField label="Teléfono" value={selectedUser.Telefono} />
          <p className="flex text-left pr-20">
            <UserInfoField label="Dirección" value={selectedUser.Direccion} />
          </p>
          <UserInfoField
            label="Fecha de Nacimiento"
            value={selectedUser["Fecha de Nacimiento"]}
          />
        </div>
        
      </motion.div>
    </motion.div>
  );
}

export default UserModal;
