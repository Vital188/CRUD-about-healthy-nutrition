function New() {

    return (
     <>
     <div>
    <h1 className="centr">Please, add new product into the list</h1>
    </div>
    <div className="middle">
    <div className="left">
        <h1>New product information</h1>
        <div className="inside">
        <label>Product name:</label>
        <input type='text' style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '30px'
        }}></input>
        </div>
        <div className="inside">
        <label>Fat (g):</label>
        <input type='number' style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '30px'
        }}></input>
        </div>
        <div className="inside">
        <label>Carb (g):</label>
        <input type='number' style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '30px'
        }}></input>
        </div>
        <div className="inside">
        <label>Portein (g):</label>
        <input type='number' style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '30px'
        }}></input>
        </div>
        <div className="inside">
        <label>Calories:</label>
        <input type='number' style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '30px'
        }}></input>
        </div>
        <div className="inside">
        <label>Weight:</label>
        <input type='number' style={{
            width: '400px',
            height: '50px',
            borderRadius: '5px',
            fontSize: '30px'
        }}></input>
        </div>
        <div className="number" style={{
            marginTop: '10px',
            marginBottom: '30px'
        }}>
            <button style={{
                width: '200px',
                backgroundColor: 'red',
                height: '80px'
            }}>ADD</button>
            <button style={{
                width: '200px',
                backgroundColor: '#00bcd4',
                height: '80px'
            }}>DELETE</button>
        </div>
        </div>
           <div className="box5" style={{
            marginLeft: '200px'
           }}>
     <div className="inside" style={{
        paddingTop: '0px'
     }}>
        <div style={{
            backgroundColor:   'rgb(219, 210, 210)',
            justifyContent: 'center',
            border: '2px solid black',
            borderRadius: '10px',
            display: 'flex',
            paddingTop: '0px'
        }}>
        <h1>New product confirmation</h1>
        </div>
        <div className="centr">
     <div className="box4">Product</div>
     <div className="box4">Fat</div>
     <div className="box4">Carb </div>
     <div className="box4">Protein </div>
     <div className="box4">Calories</div>
     <div className="box4">Weight</div>
    </div></div>
    </div>
    </div>
     </>
    )
    }
    export default New;
    
    