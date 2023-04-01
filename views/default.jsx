const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/places">Places</a>
                </li>
                <li>
                  <a href="/places/new">Add Place</a>
                </li>
              </ul>
            </nav>
                {html.children}
                <footer className="footer">Resume | Portfolio | Linkedin | <span className='author'>Author : Yash Patel</span></footer>
            </body>
        </html>
    )
}

module.exports = Def

