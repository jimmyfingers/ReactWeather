var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this for the Complete React Developer Course</p>
      <p>
        Here are some of the tools I've used:
      </p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This was the javascript framework used
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> I used Open Weather Map to dearch for weather
            data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
