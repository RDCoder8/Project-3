import styles from "./ProfileAside.module.css"

export default function ProfileAside({user}) {
  return (
    <aside className={styles.ProfileAside}>
        <img src={user.profileimg} alt="Profile Pic" />
      <h3>{user.name} 👨‍💻 </h3>
      <small>{user.email} 📧 </small>
      <p>{user.profilequote}</p>
    </aside>
  );
}
