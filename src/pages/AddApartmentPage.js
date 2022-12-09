import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {

    // this method or function will let us navigate through our pages
    const navigate = useNavigate();

    // const [title, setTitle] = useState('')
    // const [img, setImg] = useState('')
    // const [pricePerDay, setPricePerDay] = useState(0)



    //this state is to put together the 3 states above 
    // when using this function remember to coment out the other states and change them inside our JSX and set the state with this new one 

    const [state, setState] = useState({
        title: '',
        img: '',
        pricePerDay: 0
    })

    const updateState = event => setState({
        ...state,
        //name is going to be the name atribute for our imput 
        [event.target.name]: event.target.value
    })



    //update functions to change the state for each individual state

    // const updateTitle = event => setTitle(event.target.value);
    // const updateImg = event => setImg(event.target.value);
    // const updatePricePerDay = event => setPricePerDay(event.target.value);


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(title,img,pricePerDay)

        // this is the post request to our API to add or create a new item inside the api 
        // the plus sing + i to convert the string to number inside out object when we request or post data or we can type Number:(priceperday) to convert to num
        axios.post('https://ironbnb-m3.herokuapp.com/apartments', {
            title: state.title,
            img: state.img,
            pricePerDay: +state.pricePerDay
        })
            .then((axiosResponse) => {
                console.log(axiosResponse.data)
                // this navigate function will take us to the place that we want when executing our .then 
                navigate('/')
            })
            .catch(err => console.log(err))
    };




    return (

        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>

            <form onSubmit={handleSubmit}>


                <label>Title:</label>
                <input value={state.title} onChange={updateState} name="title" />

                <label>Image:</label>
                <input value={state.img} onChange={updateState} name="img" />

                <label>Price per day: </label>
                <input value={state.pricePerDay} onChange={updateState} type="number" name="pricePerDay" />



                <button>Create an apartment</button>
            </form>


        </div>
    );
}

export default AddApartmentPage;