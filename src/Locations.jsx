import Data from './data/LocationData.jsx';

/*function EventItem(props) {
    return <p>{props.name}</p>
};*/

function LocationItem(props) {
    console.log(props)
    return <>
        <h3>{props.name}</h3>
        {/*props.events.map((event) => {
            return <EventItem key={event} name={event.name}/>
        })*/}
    </>
};

function Locations() {
    return (
      <>
        <h1>Item List</h1>
        <div className="location-grid">
            {Data.map((location) => {
                return <LocationItem key={location} name={location.name} />
            })};
        </div>
      </>
    );
};

export default Locations;