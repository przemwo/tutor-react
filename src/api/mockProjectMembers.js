import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projectMembers = [
  {
    id: '1',
    firstName: 'Friedrich',
    lastName: 'Hayek'
  },
  {
    id: '2',
    firstName: 'Adam',
    lastName: 'Smith'
  },
  {
    id: '3',
    firstName: 'Henry',
    lastName: 'Hazlitt'
  },
  {
    id: '4',
    firstName: 'Ludwig',
    lastName: 'Mises'
  },
  {
    id: '5',
    firstName: 'Milton',
    lastName: 'Friedman'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (projectMember) => {
  return projectMember.firstName.toLowerCase() + '-' + projectMember.lastName.toLowerCase();
};

class ProjectMembersApi {
  static getAllProjectMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projectMembers));
      }, delay);
    });
  }

  static saveProjectMember(projectMember) {
	projectMember = Object.assign({}, projectMember); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProjectMemberNameLength = 3;
        if (projectMember.firstName.length < minProjectMemberNameLength) {
          reject(`First Name must be at least ${minProjectMemberNameLength} characters.`);
        }

        if (projectMember.lastName.length < minProjectMemberNameLength) {
          reject(`Last Name must be at least ${minProjectMemberNameLength} characters.`);
        }

        if (projectMember.id) {
          const existingProjectMemberIndex = projectMembers.findIndex(a => a.id == projectMember.id);
          projectMembers.splice(existingProjectMemberIndex, 1, projectMember);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new projectMembers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          projectMember.id = generateId(projectMember);
          projectMembers.push(projectMember);
        }

        resolve(projectMember);
      }, delay);
    });
  }

  static deleteProjectMember(projectMemberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProjectMemberToDelete = projectMembers.findIndex(projectMember => {
          projectMember.projectMemberId == projectMemberId;
        });
        projectMembers.splice(indexOfProjectMemberToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProjectMembersApi;
