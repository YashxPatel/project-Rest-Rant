const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.places.id}</h1>
            <img src={data.places.pic} alt={places.name} />
            <h1>Currently Unrated</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form method="POST" action=""> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show
