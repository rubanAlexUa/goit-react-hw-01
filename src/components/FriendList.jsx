import FriendListItem from "./FriendListItem";
import c from "./FriendListItem.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={c.friends_container}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
