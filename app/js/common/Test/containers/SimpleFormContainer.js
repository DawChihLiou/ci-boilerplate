import { connect } from 'react-redux'
import SimpleForm from '../components/SimpleForm'
import { updateText } from '../actions'

const mapStateToProps = (state) => ({
  text: state.text
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    dispatch(updateText(e))
  }
})

const SimpleFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SimpleForm)

export default SimpleFormContainer
