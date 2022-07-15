import React, { useState } from "react";

import styles from "~styles/pages/register/success.module.scss";

const Success = () => {
  const [name, setName] = useState("Sally");

  return (
    <div className={styles.screen}>
      <img className={styles.logo} src={"/assets/logo.png"} />
      <h2>You're good to go, {name}!</h2>
      <h3>Let's make this season the best ever.</h3>

      <div className={styles.nextButtonContainer}>
        <h5>Plan Season</h5>
      </div>
    </div>
  );
};

export default Success;