import { FC } from "react";
import styles from "./header.module.scss";
import Butterfly from "@/Assets/butterfly.png";
import Phone from "@/Assets/phone.png";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.firstLine}>
        <div onClick={() => navigate("/main")} className={styles.headerPics}>
          <img src={Butterfly} alt="Logo" />
        </div>
        <div>
          <div className={styles.headerPics}>
            <img src={Phone} alt="phone" />
          </div>
          <p>8 (800)-555-35-35</p>
        </div>
        <button onClick={() => navigate("/login")} className={styles.button}>
          Войти
        </button>
      </div>
      <div className={styles.secondLine}>
        <p onClick={() => navigate("/services")}>Услуги</p>
        <p onClick={() => navigate("/doctors")}>Врачи</p>
        <p onClick={() => navigate("/clinics")}>Клиники</p>
        <p onClick={() => navigate("/pharmacy")}>Ветаптеки</p>
        <p onClick={() => navigate("/petshops")}>Зоомагазины</p>
        <p onClick={() => navigate("/grooming")}>Груминг</p>
        <p onClick={() => navigate("/actions")}>Акции</p>
        <p onClick={() => navigate("/contacts")}>Контакты</p>
      </div>
    </div>
  );
};

export default Header;
