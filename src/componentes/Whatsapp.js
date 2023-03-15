import React from 'react';

const WhatsappIcon = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=+593959792827">
      <img
        src="./img/whatsapplogo.webp"
        alt="Enviar mensaje a Whatsapp"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
        }}
      />
    </a>
  );
};

export default WhatsappIcon;