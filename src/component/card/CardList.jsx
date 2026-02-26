 import CardItem from './CardItem';
import classes from './CardList.module.css';
 
 export default function CardList(){
    return <div className={classes.listContainer}>
        
         
  <CardItem name="Jhon Doe" email="abc@example.com" location="Kathmandu, Nepal" experience="3 Years" role="Frontend Developer"/>
  <CardItem name="Jane Smith" email="jane@example.com" location="New York, USA" experience="5 Years" role="Backend Developer"/>
  <CardItem name="Bob Johnson" email="bob@example.com" location="London, UK" experience="2 Years" role="UI/UX Designer"/>
  <CardItem name="Alice Williams" email="alice@example.com" location="Tokyo, Japan" experience="4 Years" role="DevOps Engineer"/>

   

    </div>

    
}