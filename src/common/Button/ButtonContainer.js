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
        getSwapiHeroes: (e) => dispatch(getSwapiHeroes(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
