import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserModal from "@/components/UserModal";

function UserCard({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex gap-6 flex-wrap justify-center text-center">
      <AnimatePresence>
        {users.map((user, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 p-4 rounded-md px-28 shadow-2xl cursor-pointer"
            onClick={() => handleCardClick(user)}
            initial={{ opacity: 0, scale: 1 }} // Inicialmente, sin escala
            animate={{ opacity: 1, scale: 1 }} // Animación al estado activo
            exit={{ opacity: 0, scale: 1 }} // Animación al ocultar
            whileHover={{ scale: 1.1 }} // Escala al hacer hover
            transition={{ duration: 0.3 }} // Duración de la animación
          >
            <img
              src={user.Imagen}
              className={index === 0 ? "w-32 py-2" : "w-32"}
              alt="Avatar"
              style={{
                clipPath:
                  index === 0
                    ? "circle(39% at 50% 37%)"
                    : "circle(39% at 50% 35%)",
              }}
            />
            <h5 className="font-bold mt-[-50px]">{user.Nombre}</h5>
            <h5 className="font-bold">{user.Apellido}</h5>
          </motion.div>
        ))}
      </AnimatePresence>
      {selectedUser && (
        <UserModal selectedUser={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default UserCard;
