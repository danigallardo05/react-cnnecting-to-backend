import { useState, useEffect } from "react";
import axios from "axios";
 
function ApartmentsPage() {

  const [apartments, setApartments] = useState([]);
  
  useEffect(() => {
    axios.get('https://ironbnb-m3.herokuapp.com/apartments')
    .then(axiosResponse => {
       console.log(axiosResponse.data);
       setApartments(axiosResponse.data);
    })
    .catch(err => console.log(err))
  }, [])




  
  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((singleApartment) => {
        return (
            <div key={singleApartment._id} >
                <img src={singleApartment.img} alt="pic"/>
                <h4>{singleApartment.title}</h4>
                <p><strong>Price per day: $ {singleApartment.pricePerDay}</strong></p>
            </div>
        )
      })}

    </div>
  );
}
 
export default ApartmentsPage;