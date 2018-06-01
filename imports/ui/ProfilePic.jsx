// import { Meteor } from 'meteor/meteor';
// import React, { Component } from 'react';
// import route from '/imports/routing/router.js';
// import { withTracker } from 'meteor/react-meteor-data';
// import Profiles from '../api/profile/collections.js';
// import { Cards } from './Cards.jsx';
// import { Navbar2 } from '/imports/ui/Navbar2.jsx';
// import { Featured } from '/imports/ui/Featured.jsx';
// import { UserFiles } from '../api/upload/collections.js';
// import { Footer } from '/imports/ui/Footer.jsx';
// import { Pops } from '/imports/ui/Pops.jsx';
// import { Newartist } from '/imports/ui/Newartist.jsx';



// export class ProfilePic extends Component {
          



//  getAllProfiles=()=>{
//     const profiles = this.props.profiles;
//     return profiles.map((profile) => {
//       const trial = profile.imageId;
//       console.log(trial);
//       const link = UserFiles.findOne({_id: trial}).link();
//       return (
//         <div key = {profile._id} className="container profile">
//         <img className="img" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="ProfilePage"/>
//         </div>
      
//     );
//     }
//       )
//     }


//   render() {
//     if (this.props.isDataReady) {
//       return (
//           <div className="App">
//           <div className="img">
//               {this.getAllProfiles()}
//         </div>
//         <h1>Hello World</h1>
//         </div>
//       )
//     }
//     else {
//       return (
//         <div className="text-center">
//           <br />
//           <br />
//           <br />
//           <br />
//           <img src="public/load.png" className="App-logo" alt="logo" />
//           <h3 className="">Please wait</h3>
//         </div>
//       )
//     }
//   }
// }

// export default withTracker(() =>{
//   Meteor.subscribe('files.all');
//   Meteor.subscribe('profiles');
//   let isDataReady = Meteor.subscribe('files.all');
//   return{
//     profiles: Profiles.find().fetch(),
//     files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
//     isDataReady: isDataReady.ready(),
//   }
// })(ProfilePic);







