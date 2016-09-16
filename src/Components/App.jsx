import React from 'react';
import { connect } from 'react-redux';

const AppChild = ({
  members,
  onClick
}) => {
  return (
    <div className="container">
      <h2>Project members</h2>
      <ul className="list-unstyled">
        {members.map(member => {
          return (
            <li key={member.id}>
              <div className="row posR" onClick={onClick}>
                <div className="show-more posA">More</div>
                <div className="col-xs-6">
                  {member.firstName} {member.lastName}
                </div>
                <div className="col-xs-6">
                  {member.roles.map(role => {
                    return (
                      <p>{role}</p>
                    );
                  })}
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
    onClick: () => { console.log('hej!');}
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(AppChild);

export default App;
