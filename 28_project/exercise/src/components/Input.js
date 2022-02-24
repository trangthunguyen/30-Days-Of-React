import '../styles/components/Input.scss'

const Input = () => {
    return (
        <form className="form-container">
           <div className="inp-wrapper">
                <textarea placeholder="Tweet about 30 Days Of React" name='post' cols='50' rows='5' />
                <small>250</small>
           </div>
            <div className='btn-wrapper'>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export default Input