// goToProfile = () => {

//     route.go('/profile')

// }

// getAllItems = () => {
//     const posts = this.props.posts;
//     return posts.map((posts) => {
//         const trial = posts.imageId;
//         console.log(trial);
//         const link = UserFiles.findOne({ _id: trial }).link();
//         return (
//             <div key={item._id} className="card border-primary">
//                 <img className="card-img-top" src={link} style={{ width: 100 + "%", height: 200 + "px" }} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-title"><strong>Product Name:</strong> {item.itemName}</h5>
//                     <h6 className="card-subtitle mb-2"><strong>Condition:</strong> {item.itemCondition}</h6>
//                     <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {item.price}</h6>
//                     <h6 className="card-subtitle mb-2"><strong>Description:</strong> {item.description}</h6>
//                 </div>
//                 <div className="card-footer">
//                 </div>
//                 <div className="text-center">
//                     <button className="btn btn-primary btn-block adding" data-toggle="modal" data-target="#exampleModalCenter">Get Item</button>
//                 </div>
//                 <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                     <div className="modal-dialog modal-dialog-centered" role="document">
//                         <div className="modal-content">
//                             <div className="modal-body poster">
//                                 <h4>Contact seller using the details below:</h4><br />
//                                 <h5>Seller Name: {item.owner}</h5>
//                                 <h5>Email: {item.email}</h5>
//                                 <h5>Number: {item.number}</h5>
//                                 <h5>Location: {item.residence}</h5>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
//                             </div>
//                         </div>
//                     </div>
//                </div>
//             </div>
//         )
//     }
//     )
// }

// render() {
//     if (this.props.isDataReady) {
//         return (
//             <div>
//                 <Navbar petCare={'active'} />
//                 <br />
//                 <p className="h1" style={{ textAlign: "center" }}>PAMPER YOUR PET</p><br />
//                 <h4 className="volunteer"> Explore these different pet supplies sold by your favorite brands</h4>
//                 <br />
//                 <br />
//                 <div className="container">
//                     <div className="card-columns">
//                         {this.getAllItems()}
//                     </div>
//                 </div>
//                 <br /><br />
//                 <Footer />
//             </div>
//         )
//     }
//     else {
//         return (
//             <div className="text-center">
//                 <br />
//                 <br />
//                 <br />
//                 <br />
//                 <img src="images/loader.svg" className="App-logo" alt="logo" />
//                 <h3 className="loading">Please wait a moment</h3>
//             </div>
//         )
//    }
// }
// }
// export default withTracker(() => {
//     Meteor.subscribe('files.all');
//     Meteor.subscribe('posts')
//     let isDataReady = Meteor.subscribe('files.all');
//     return {
//         posts: Posts.find().fetch(),
//         files: UserFiles.find({}, { sort: { name: 1 } }).fetch(),
//        isDataReady: isDataReady.ready(),
//     }
// })(PetCare);

