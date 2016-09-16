import React from 'react';
import { connect } from 'react-redux';

const AppChild = ({
  members
}) => {
  return (
    <div className="container">
      <ul className="list-unstyled">
        {members.map(member => {
          return (
            <li key={member.id}>
              <div className="row">
                <div className="col-xs-6">
                  {member.firstName} {member.lastName}
                </div>
                <div className="col-xs-6">
                  2
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state = {}) => {
  return {
    members: state.projectMembers ? state.projectMembers : []
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(AppChild);

export default App;
