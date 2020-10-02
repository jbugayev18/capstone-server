## Let's Get Educated!

Hello User, this is my Tutoring App called "Let's Get Educated!" that allows a user to find a tutor catered to designated zip codes in the Los Angeles county!

## Live link to my app can be found: https://tutor-app-6fsgcllgt.vercel.app/

## Summary

The purpose of this application is for the user to be able to find a tutor catered to selected zipcodes provided from the website. The user is then able to see a tutor that would be available depending on the zip code selected. The user is also able to view all of the tutors provided when clicking on the navigation bar and selecting the "Find Tutor" option. The application also provides buttons on the homepage that are designated for the school subject the user is interested in utilizing.

## LandingPage Screenshot of the Landing Page:

</br>
<a href="https://imgur.com/ri5kpt1"><img src="https://i.imgur.com/ri5kpt1.png" title="source: imgur.com" /></a>

The landing page allows the user to become acquainted to the website, understanding the purpose of the application. The user can then click on the button 'Let's Get Educated!' to then navigate to the home page.

## HomePage Screenshot of the Homepage:

</br>
<a href="https://imgur.com/J79x7tl"><img src="https://i.imgur.com/J79x7tl.png" title="source: imgur.com" /></a>

Now the user is able to select from a dropdown of zipcodes and click on the "Submit" button, in which a designated tutor based on the selected zipcode will display on the screen.

## Designated Tutor Based on Zip Code screenshot:

</br>
<a href="https://imgur.com/wdr2l3O"><img src="https://i.imgur.com/wdr2l3O.png" title="source: imgur.com" /></a>

A user can also navigate to a new page where all of the tutors are found:

## List of All Tutors:

</br>
<a href="https://imgur.com/1YLs0RS"><img src="https://i.imgur.com/1YLs0RS.png" title="source: imgur.com" /></a>

A user can also select a subject that is provided on the homepage, which will navigate the user to a new page with links to the designated subject resources:

## Page of Subject Resources:

</br>
<a href="https://imgur.com/jWj43sR"><img src="https://i.imgur.com/jWj43sR.png" title="source: imgur.com" /></a>

## Documentation of API:

## GET http://localhost:8000/api/tutors/:tutor_id

This endpoint allows a user to find a specific tutor if they knew the specific tutor that they are looking for based on tutor ID.

## GET http://localhost:8000/api/tutors/zip/:zipcode

This endpoint allows a user to find a tutor based on a specific zipcode in the Los Angeles region. The application only offers a limited amount of zip codes available, which are: '90069, '90404', '90210', '90272', '91423'.

## Technology Used:

Front End: Javascript, React, HTML5, CSS3

Back End: Node.js, Express, PostgreSQL, Mocha, Chai, RESTful APIs
