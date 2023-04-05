const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
            <hr></hr>
            <h2>Comments</h2>
            {comments}

            <form method="POST" action="/places">

              <div className="form-group">
                <label htmlFor="name">Content</label>
                <input className="form-control" id="Content" name="Content" required/>
              </div>

              <div className="form-group">
                <label htmlFor="name">Author</label>
                <input className="form-control" id="author" name="author" required/>
              </div>

              <label for="customRange3" class="form-label">Star Rating</label>
              <input type="range" class="form-range" min="0" max="5" step="0.5" id="stars"></input>
              

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="rant" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">Rant</label>
              </div>

            <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
          </div>     
        </main>
      </Def>
  )
}

module.exports = show

