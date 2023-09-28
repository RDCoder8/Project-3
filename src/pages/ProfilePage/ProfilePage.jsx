import DeleteUserForm from "../../components/DeleteUserForm/DeleteUserForm"
import NameChangeForm from "../../components/NameChangeForm/NameChangeForm"
import ProfileAside from "../../components/ProfileAside/ProfileAside"
import ImgChangeForm from "../../components/ImgChangeForm/ImgChangeForm"
import styles from "./ProfilePage.module.css"

export default function ProfilePage(props) {
  return (
    <div className={styles.ProfilePage}>
    <ProfileAside user={props.user} />
    <main>
    <ImgChangeForm setUser={props.setUser} user={props.user} />
    <NameChangeForm setUser={props.setUser} user={props.user}/>
    <DeleteUserForm user={props.user} setUser={props.setUser} />
    </main>
    </div>
  )
}
