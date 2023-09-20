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
      onClick={handleCloseModal}
    >
      <motion.div
        className="w-6/12 h-3/5 bg-white p-4 rounded-lg relative grid grid-cols-2 grid-rows-2 gap-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 font-bold"
          onClick={onClose}
        >
          X
        </button>

        <div className="flex justify-center items-center mt-20">
          <img
            src={selectedUser.Imagen}
            className="w-60"
            alt="Avatar"
            style={{
              clipPath: "circle(39% at 50% 35%)",
              marginTop: "30%",
            }}
          />
        </div>

        <div className="flex justify-start items-center">
          <p className=" text-4xl font-bold">{selectedUser.Nombre}</p>
          <p className="ml-4 text-4xl font-bold">{selectedUser.Apellido}</p>
        </div>

        <div></div>

        <div className="flex flex-col justify-center items-start mb-5">
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
