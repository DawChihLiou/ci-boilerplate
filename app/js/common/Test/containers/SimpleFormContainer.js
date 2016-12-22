import { connect } from 'react-redux'
import SimpleForm from '../components/SimpleForm'
import { updateText } from '../actions'

const mapStateToProps = (state) => ({
  text: state.text
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    e.preventDefault()
    console.log(e.target)
    dispatch(updateText(e.target.value))
  }
})

const SimpleFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SimpleForm)

export default SimpleFormContainer
