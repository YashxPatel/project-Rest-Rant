# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method  | Path         | Purpose     |
|---------|--------------|-------------|
| Get     | /            | Home page     |
| Get     | /places      | Places index page     |
| Post    | /places      | Create new place     |
| Get     | /places/new  | Form page for creating a new place     |
| Get     | /places/:id  | Details about a particular place     |
| Put     | /places/:id  | Update a particular place     |
| Get     | /places/:id/edit  | Form page for editing an existing place     |
| Delete  | /places/:id       | Delete a particular place     |
| Post    | /places/:id/rant  | Create a rant (comment) about a particular place     |
| Delete  | /places/:id/rant/:rantid  | Delete a rant (comment) about a particular place     |
| Get     | *                 | 404 page (matches any route not defined above)     |

Places

| Field  | Type     |
| -----  | ----     |
| _id    | Object ID|
| Name   | String     |
| City  | String     |
| State  | String     |
| Cuisines  | String     |
| Pic  | String     |


https://github.com/HackerUSA-CE/Rest-rant-solution/blob/main/controllers/places.js
part 6 
steps 1 and 2
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.send('GET /places', {places})
})

to replace code in your places.js file inside of your controller folder