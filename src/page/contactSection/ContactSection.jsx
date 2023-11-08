import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import SocialLink from "../../components/buttons/socialLink/SocialLink";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import IconEmail from "../../assets/IconEmail.png";
import IconFacebook from "../../assets/IconFacebook.png";
import IconYoutube from "../../assets/IconYoutube.png";
import IconInstagram from "../../assets/IconInstagram.png";
import IconTiktok from "../../assets/IconTiktok.png";
import styles from "./ContactSection.module.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_t91u2hp', 'template_xch1h9b', form.current, 'kHwvebyDYvxL3tKz0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <SubTitleSection content="Estamos para Ayudarte" />
        <TitleSection content="Contactanos" />
        <div className={styles.row}>
          <div className={styles.col1}>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
              <label className={styles.containerInput}>
                <span className={styles.info}>Nombre completo</span>
                <input
                  className={styles.textField}
                  type="text"
                  id="name"
                  placeholder="Escribí tu nombre completo"
                  autoComplete="name"
                  maxLength={50}
                  name="user_name"
                  required
                />
              </label>
              <label className={styles.containerInput}>
                <span className={styles.info}>Correo electrónico</span>
                <input
                  className={styles.textField}
                  type="email"
                  id="email"
                  placeholder="Escribí tu correo electrónico"
                  autoComplete="email"
                  maxLength={50}
                  name="user_email"
                  required
                />
              </label>
              <label className={styles.containerInput}>
                <span className={styles.info}>Número de teléfono</span>
                <input
                  className={styles.textField}
                  type="phone"
                  id="number"
                  placeholder="Escribí tu número de teléfono"
                  autoComplete="number"
                  maxLength={50}
                  name="user_phone"
                  required
                />
              </label>
              <label className={styles.containerInput}>
                <span className={styles.info}>Mensaje</span>
                <textarea
                  className={styles.textField}
                  id="textarea"
                  placeholder="Dejanos tu mensaje"
                  maxLength={800}
                  name="message"
                  required
                ></textarea>
              </label>
              <div className={styles.containerButtons}>
                <PrimaryButton content="Enviar" showArrow={false} type={"submit"}/>
              </div>
            </form>
          </div>
          <div className={styles.col2}>
            <SocialLink
              social="Correo electrónico"
              href="mailto:emmanuelmansilla493@gmail.com"
              imgSrc={IconEmail}
              name="emmanuelmansilla493@gmail.com"
            />
            <SocialLink
              social="Facebook"
              href="https://www.facebook.com/consultoraynegocioss/"
              imgSrc={IconFacebook}
              name="Emmanuel Mansilla"
            />
            <SocialLink
              social="Youtube"
              href="https://www.youtube.com/@emanuelmansilla8209"
              imgSrc={IconYoutube}
              name="emmanuelmansilla8209"
            />
            <SocialLink
              social="Instagram"
              href="https://www.instagram.com/emmanuel_mansilla1/"
              imgSrc={IconInstagram}
              name="emmanuel_mansilla1"
            />
            <SocialLink
              social="Tiktok"
              href="https://www.tiktok.com/@emanuelmansill1"
              imgSrc={IconTiktok}
              name="emmanuelmansilla1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
