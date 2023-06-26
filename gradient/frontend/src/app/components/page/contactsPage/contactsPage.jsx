import React from "react";
import "../../../style/contants.scss";
import { motion } from "framer-motion";

const ContactsPage = () => {
  return (
    <motion.div
      className="contants-main end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <img
        className="contact-img"
        src="/media/front/contact.png"
        alt=""
      />
      <div className="div-contants">
        <h2 className="contants div-name">Григорий Громовик</h2>

        <div className="contants div-email">Почта: info@gradientagency.ru</div>
        <div className="contants div-phone">
          Телефон/WhatsApp: +7 (962) 902 19 19
        </div>
        <div className="contants div-tg">
          <a href="https://t.me/tg_ggrom" target="blank">
            telegram: @tg_ggrom
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactsPage;
