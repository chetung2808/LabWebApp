import React from 'react'; 
import { ReactDOM } from 'react';
function Ex43(props){
const smartPeople = [
     { name: 'Johann Goethe',age: 82, IQ: 210 }, 
     { name: 'Albert Einstein',age: 76, IQ: 205 }, 
     { name: 'Leonardo da Vinci',age: 67 , IQ: 180 }, 
     { name: 'Isaac Newton',age: 84, IQ: 190 }, 
     { name: 'James Maxwell',age: 48, IQ: 190 }, 
     { name: 'Rudolf Clausius',age: 66, IQ: 190 }, 
     { name: 'Nicolaus Copernicus',age: 70, IQ: 160 }, 
     { name: 'Gottfried Leibniz',age: 70, IQ: 182 }, 
     { name: 'William Sidis',age: 46, IQ: 200 } 
        ] 
    

     const listItems = smartPeople.map(
        (element) => {
            return (
                <ul type="disc">
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                    >
                        {element.name}
                    </li>
                    <li>{element.age}</li>
                    <li>{element.IQ}</li>
                </ul>
            )
        }
    )
     


        
      return(
       <div>
            {listItems}
        </div>
       );
    }
    export default Ex43;
   