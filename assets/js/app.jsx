var React = require('react')


const element = <div>
      <Welcome name="Bülent," />
      <Welcome name="Kayla," />
      <Welcome name="Barbara." />
    </div>;




module.exports = React.createClass({
   render: function(){
       return element
   }
})


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

