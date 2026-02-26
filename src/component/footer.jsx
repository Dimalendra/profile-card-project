import classes from './footer.module.css';
function Footer(){
    const date=new Date();
    const currentYear=date.getFullYear();
  

    return <footer className={classes.footer}>@copyright {currentYear}</footer>

}
export default Footer;
