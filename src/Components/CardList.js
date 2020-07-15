import React from 'react'
import Card from './Card'



const CardList = ({ robots }) => {

return(
<div>
{
robots.map((hovno, i) => {
    return (<Card
     key={robots[i].id}
     id ={robots[i].id}  
     name = {robots[i].name} 
     email = {robots[i].email}/>)
})
}
</div>

)
};

export default CardList;