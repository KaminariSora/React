import '../style/AppHeader.css'

const AppHeader = () => {
    // const containerStyle = {
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     padding: '10px',
    //     color: 'white',
    // };

    // const buttonStyle = {
    //     padding: '8px 16px',
    //     backgroundColor: '#007bff',
    //     color: 'white',
    //     border: 'none',
    //     borderRadius: '4px',
    //     cursor: 'pointer',
    // };

    // const selectStyle = {
    //     padding: '8px',
    //     border: '1px solid #333',
    //     borderRadius: '4px',
    //     cursor: 'pointer',
    // };


    return (
        <div className='containerStyle'>
            <button className='buttonStyle'>Add task</button>
            <select className='selectStyle'>
                <option>All</option>
                <option>Incomplete</option>
                <option>Complete</option>
            </select>
        </div>
    )
}

export default AppHeader;