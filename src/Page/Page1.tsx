//create a button that will increase the count by 1 and 5 and decrease the 
//count by 1 and 5. They will pass props individually

const Page1 = ({count, increase, decrease}) => {
    


    return (
        <div>
            <h1>This is page 1</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=> increase(1)}>Increase By 1</button>
            <button onClick={()=> increase(5)}>Increase By 5</button>
            <button onClick={()=> decrease(1)}>Decrease By 1</button>
            <button onClick={()=> decrease(5)}>Decrease By 5</button>

        </div>
    )
};

export default Page1;