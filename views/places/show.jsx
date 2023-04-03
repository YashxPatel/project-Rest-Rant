const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div className='show'>
              <img src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
              <h1>Rating: Not rated</h1>
              
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                serving {data.place.cuisines}
              </h4>
            
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
              <h1>Comments: No Comments yet!</h1>
            </div>     

          </main>
        </Def>
    )
}

module.exports = show
