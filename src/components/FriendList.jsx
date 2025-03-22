import c from "./FriendList.module.css";

export default function Friends({ friends }) {
  const friendsList = friends.map((friend) => (
    <div className={c.friend_item} key={friend.id}>
      <img
        className={c.friends_avatar}
        src={friend.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={c.friends_name}>{friend.name}</p>
      <p className={friend.isOnline ? c.online : c.offline}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  ));
  return <div className={c.friends_container}>{friendsList}</div>;
}
