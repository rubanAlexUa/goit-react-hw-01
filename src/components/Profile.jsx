import c from "./Profile.module.css";

export default function Profile({ name, location, image, stats, tag }) {
  return (
    <div className={c.profile}>
      <div className={c.main_info}>
        <img src={image} alt="User avatar" className={c.img_avatar} />
        <p className={c.name_user}>{name}</p>
        <p className={c.additional_info_user}>@{tag}</p>
        <p className={c.additional_info_user}>{location}</p>
      </div>

      <ul className={c.users_stats}>
        <li className={c.stats_item}>
          <span className={c.stats_name}>Followers</span>
          <span className={c.stats_info}>{stats.followers}</span>
        </li>
        <li className={c.stats_item}>
          <span className={c.stats_name}>Views</span>
          <span className={c.stats_info}>{stats.views}</span>
        </li>
        <li className={c.stats_item}>
          <span className={c.stats_name}>Likes</span>
          <span className={c.stats_info}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
