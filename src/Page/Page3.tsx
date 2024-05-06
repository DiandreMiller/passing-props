//Have students create a function that will only work on page 3 that will check 
//if the count is negative or not before updating

import SaySomethingAboutTheCount from "../Components/SaySomethingAboutCount";

const Page3 = ({...props}) => {

     const {count, increase, decrease} = props;

    const handleCannotBeLessThanZero = (num) => {

        if(count -  num >= 0) {
            return decrease(num);
        } else {
            window.alert('Count cannot be less than zero');
        } 

    }
    return (
        <div>
            <h1>This is page 3</h1>
            <h2><SaySomethingAboutTheCount count={count}/></h2>
            <h2>Count: {count}</h2>
            <button onClick={()=> increase(1)}>Increase by 1</button>
            <button onClick={()=> increase(5)}>Increase by 5</button>
            <button onClick={()=> handleCannotBeLessThanZero(1)}>Decrease by 1</button>
            <button onClick={()=> handleCannotBeLessThanZero(5)}>Decrease by 5</button>
        </div>
    )
}

export default Page3;

