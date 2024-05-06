//create a function that will say something about the current count

const SaySomethingAboutTheCount = ({count}) => {

    const handleCommentOnCount = () => {
        if(count === 0) {
            return <h3>You Have Nothing</h3>
        } 

        if(count >= 1 && count <= 20) {
            return <h3>The Count is low</h3>
        }

        if(count > 20 && count <= 50) {
            return <h3>The Count is medium</h3>
        }

        if(count > 50) {
            return <h3>The Count is high</h3>
        }
    }

    return (
        <div>
            <h3>{handleCommentOnCount()}</h3>
        </div>
    )
}

export default SaySomethingAboutTheCount;