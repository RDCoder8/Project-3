export default function ProfileAside({user}) {
  return (
    <aside>
      <figure>
        <img src="" alt="Profile Pic" />
      </figure>
      <h3>{user.name}</h3>
      <p>Some Quote</p>
    </aside>
  );
}
