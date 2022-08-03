import { FaHome } from 'react-icons/fa';
import { MdHomeWork } from 'react-icons/md';
import { SiEthereum, SiGithub } from 'react-icons/si';

import styles from '../styles/Menu.module.css'
const Menu = (  ) => {

  return (
  <div className={styles.menuStyle} >
      <a href={`/`} className={styles.manuItemStyle} ><FaHome /></a>
      <a href={`https://simpledoers.eth.limo`} className={styles.manuItemStyle} ><SiEthereum />  </a>
      <a href={`https://simpledoers.com`} className={styles.manuItemStyle} ><MdHomeWork /></a>
      <a href={`https://github.com/maximilianou`} className={styles.manuItemStyle} ><SiGithub />  </a>
  </div>
  )
};
export default Menu;