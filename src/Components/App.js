import Main from './Main'
import {connect} from 'react-redux'
import * as actions from '../Store/Actions'


const mapStateToProps = (state) => {
  return {
    albumsStore: state.albumsStore,

  };
}

const mapDispatchToProps = {
  getAlbumsAsync: actions.getAlbumsAsync,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

