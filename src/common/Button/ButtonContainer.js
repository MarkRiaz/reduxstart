import Button from './Button';
import { connect } from 'react-redux';

import { getSwapiHeroes } from '../../reducers/actions';

const mapStateToProps = (state) => {
    return {
        heroes: state.swapiReducer
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        getSwapiHeroes: () => dispatch(getSwapiHeroes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
