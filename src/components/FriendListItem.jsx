import c from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  return (
    <li key={friend.id}>
      <div className={c.friend_item}>
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
    </li>
  );
}
