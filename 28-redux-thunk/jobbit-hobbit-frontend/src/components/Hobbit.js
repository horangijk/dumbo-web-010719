import React from "react";
import { selectHobbit } from '../actions/hobbitActions'

import { connect } from 'react-redux'

const Hobbit = props => {
  const { hobbit, selectHobbit, selected } = props
  // const selected = selectedHobbit.id === hobbit.id
  // console.log("RERENDER")
  return (
    <div className='card' style={selected ? {'borderColor':'cyan'} : {'borderColor':'red'} } onClick={() => selectHobbit(hobbit)}>
      <img alt={hobbit.name} src={hobbit.image_url} />
      <h3> Name: {hobbit.name} </h3>
      <h3> Title: {hobbit.title} </h3>
      <h3> Field: {hobbit.field} </h3>
      <h3> Seniority: {hobbit.seniority} </h3>
      <h3> Position: {hobbit.position} </h3>
      <h3> Key Skill: {hobbit.key_skill} </h3>
      <h3> Employment Type: {hobbit.employment_type} </h3>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    selected: state.selectedHobbit.id === ownProps.hobbit.id
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectHobbit: (hobbit) => dispatch(selectHobbit(hobbit))
})


export default connect(mapStateToProps, mapDispatchToProps)(Hobbit)
