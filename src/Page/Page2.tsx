//create a button that will increase the count by 1 and 5 and decrease the 
//count by 1 and 5. They will pass props and destructor. 
//remember to show students they can use any word although props is the word typically
//used. It is just a variable

const Page2 = ({...appleSauce}) => {

    const {count, increase, decrease} = appleSauce;

    return (
        <div>
            <h1>This is page 2</h1>
            {/* <h2>Count:{count}</h2> */}
            <button onClick={()=> increase(1)}>Increase by 1</button>
            <button onClick={()=> decrease(1)}>Decrease by 1</button>
            <button onClick={()=> increase(5)}>Increase by 5</button>
            <button onClick={()=> decrease(5)}>Decrease by 5</button>
        </div>
    )
}

export default Page2;