import '../styles/components/FormEdit.scss'

const FormEdit = (props) => {
    const {value, handleUpdate, handleChangeEditPost, handleCancelEdit} = props
    return (
        <form className="form-edit-container" onSubmit={handleUpdate}>
           <div className="inp-wrapper">
                <textarea defaultValue={value} onChange={handleChangeEditPost} name='edit_post' cols='63' rows='5' />
           </div>
            <div className='btn-wrapper'>
                <button type='submit' name='update'>Update</button>
                <button type='button' name='cancel' onClick={handleCancelEdit}>Cancel</button>
            </div>
        </form>
    )
}

export default FormEdit