import { connect } from "react-redux"; 
import { getCollections } from "../../ducks/collections/selectors";
import { deleteCollection } from "../../ducks/collections/operations";
import { Link } from "react-router-dom";

const CollectionList = ({ collections, deleteCollection } ,props) => {

    return(
        <div>
            <h1>Collections List</h1>
            <div className="List">
                {collections ? collections.map(collection =>(
                    <div key={collection._id} className="ListContainer">
                        <Link to={`/collections/details/${collection._id}`}>
                            <img className="Small-img" src={collection.img_url} alt = "COLLECTION NOT FOUND"/>
                        </Link>
                        <p>{collection.name}</p>
                        <button className="Btn Delete" onClick={() => deleteCollection(collection)}>Delete</button>
                    </div>
                )) : <div>No one here</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: getCollections(state)
    };
}
const mapDispatchToProps = {
    deleteCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);