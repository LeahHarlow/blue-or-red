# **Blue or Red?**
### By Leah Hamilton

## Description 

This is my submission of the technichal challenge for the Technical Solutions Engineer role! I hope you enjoy it. 

## Getting it Running

1. Fork and clone this repo.
2. `npm install`.
3. Start your application with `npm start`
4. Navigate to `localhost:3000` if your browser does not do so automatically
5. Open up your dev tools and check out cookies under the Application tab to monitor behind the scenes as well! 
6. As a bonus option, there is a file within src named `easyManipulation.js` where you will find two commented out lines with blank spaces for you to comment in and enter a preferred colour or timesVisited cookie assignment for easily checking the codes response. 

## What to Expect

Upon opening the application in `localhost:3000` you will be greeted with a randomly assigned photo of red or blue balloons (look forward to an extra surprise in the photo with the red ballons) once you have seen either the red or blue balloons photo you will continue to see the same photo until you are randomly assigned a new photo when you run the application in a new browser or clear your cookies. Before resetting your cookies though, be sure to click the generate report button to see how many times you've enjoyed looking at that particular photo. 

## Main Challenges 

The main challenge I faced with this project came in generating the user report. While I had not previously worked with cookies, after watching a couple youtube videos on how to access, create or remove them, and generally referring to MDN for a long enough string of JavaScript methods to pull what I wanted off of them I felt comfortable enough using cookies. The real challenge of course came once I thought I was in the clear and had sorted out the tricky parts. When generating the user report I initially updated state within my component to include the timesVisited thinking it would be simpler to pass to various parts of my component if it was on state, which it was, it just also triggered a bunch of rerenders that made me have to rethink a lot of my logic. I removed any saving of timesVisited from state which ultimately solved my problem however it did leave parts of my code more repetitive than I would have liked. The final issue I faced was that my cookies were tracking the number of times a user visited the page but incremented by 2 each time instead of 1. It took me a while to realize the double render was actually a React issue (.StrictMode was on) that caused a double render and was increasing my cookie twice each time I refreshed the page. Thank you Stack Overflow and the people that the people that post on it for that one. I am very excied that I got everything working, included my references below and am happy to hear all feedback on how I could improve! I sincerely hope you enjoy my project and thank you for the opportunity to complete it!

## References Used:

##### https://www.youtube.com/watch?v=GihQAC1I39Q
##### https://www.youtube.com/watch?v=8tL5P-RtAH0
##### https://hitchhikers.yext.com/guides/analyze-trends-with-visitor-analytics/07-cookies-visitors/
##### https://www.w3schools.com/js/js_cookies.asp
##### https://unsplash.com/
##### https://reactjs.org/docs/getting-started.html
##### https://coolors.co/f5f0e0-d2dada-e01300-99e6ff-0069cc
##### https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
