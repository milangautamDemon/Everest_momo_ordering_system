import PropTypes from 'prop-types'; // Import PropTypes
import Staff from "./Staff";

// Define the shape of the staff object
const staffShape = {
  staffImg: PropTypes.string.isRequired,
  staffTitle: PropTypes.string.isRequired,
};

// Define the propTypes for the StaffListMap component
const StaffListMapPropTypes = {
  staffLists: PropTypes.arrayOf(PropTypes.shape(staffShape)).isRequired,
};

const StaffListMap = ({staffLists}) => {
  return (
    <div className="staff-lists">
        {
            staffLists.map((list, index) => <Staff key={index}  staffImg={list.staffImg} staffTitle={list.staffTitle}/>)
    
        }
    </div>
  )
}

// Apply PropTypes validation
StaffListMap.propTypes = StaffListMapPropTypes;

export default StaffListMap;
export { StaffListMap };
