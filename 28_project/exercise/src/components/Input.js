import '../styles/components/Input.scss'

const Input = (props) => {
    const {onChange, onSubmit, isDisable, value, length} = props
    return (
        <form className="form-container" onSubmit={onSubmit}>
           <div className="inp-wrapper">
                <textarea value={value} onChange={onChange} placeholder="Tweet about 30 Days Of React" name='post' rows='5' />
                <small>{length}</small>
           </div>
            <div className='btn-wrapper'>
                <button disabled={isDisable}>Add Post</button>
            </div>
        </form>
    )
}

export default Input