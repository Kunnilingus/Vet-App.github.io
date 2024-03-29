import { FC } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./actions.module.scss";
import Button from "@/components/Button/Button";
import card1 from "@/Assets/actions/дед с псом.png";
import { actions } from "@/utils/Actions";

const Actions: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Акции</h1>
        <div className={styles.actions}>
          {actions.map((item) => (
            <div key={item.id} className={styles.card1}>
              <div className={styles.cardImg}>
                <img src={item.img} alt="cardImg" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className={styles.btn}>
                <Button violet50 text="Записаться на приём" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Actions;
