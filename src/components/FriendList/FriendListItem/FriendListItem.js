import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineStyle = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={isOnlineStyle}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="80" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
