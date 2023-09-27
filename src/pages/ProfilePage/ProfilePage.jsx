import DeleteUserForm from "../../components/DeleteUserForm/DeleteUserForm"
import NameChangeForm from "../../components/NameChangeForm/NameChangeForm"
import ProfileAside from "../../components/ProfileAside/ProfileAside"
import styles from "./ProfilePage.module.css"

export default function ProfilePage(props) {
  return (
    <div className={styles.ProfilePage}>
    <ProfileAside user={props.user} />
    <main>
    <NameChangeForm setUser={props.setUser}/>
    <DeleteUserForm user={props.user} setUser={props.setUser} />
    </main>
    </div>
  )
}
