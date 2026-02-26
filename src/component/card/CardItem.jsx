//import something from"../../assets/images/IMG_20251127_193215_756.webp";
import classes from './CardItem.module.css';

export default function CardItem() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <img className={classes.avatar} src=""alt="profile avatar" />

        <div className={classes.userInfo}>
          <h2 className={classes.name}>John Doe</h2>
          <p className={classes.role}>Frontend developer</p>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}>Email:</span>
          <span>john@example.com</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Location:</span>
          <span>Kathmandu, Nepal</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Experience:</span>
          <span>3 Years</span>
        </div>
      </div>

      <button className={classes.button}>View More</button>
    </div>
  );
}
