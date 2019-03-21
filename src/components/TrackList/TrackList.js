import '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
  render (
    return {
      <TrackList tracks={this.props.searchResults}/>

      <div className ="TrackList">
              <div className="Track">
                <div className="Track-information">
                  <h3>Stronger</h3>
                  <p>Britney Spears | Oops!... I Did It Again</p>
                </div>
                <a className="Track-action">-</a>
              </div>
              <div className="Track">
                <div className="Track-information">
                  <h3>So Emotional</h3>
                  <p>Whitney Houston | Whitney</p>
                </div>
                <a className="Track-action">-</a>
              </div>
    }
  )
}

export default TrackList;
