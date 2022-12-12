import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';

const ViewPendingBags = (props) => {
    const AcceptHandler = async () => {
        try {
            const response = await fetch('http://localhost:3000/BloodBag/AcceptBloodBag/' + props.BloodBag._id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
                //Authorization: `BEARER ${authContext.token}`
              }
            });
            const data = await response.json();
            
            if (!response.ok) {
              throw Error(data.error);
            }
      
            console.log(data);
          } catch (err) {
            console.log(err.message);
          }
    };
    const RejectHandler = async () => {
        try {
            const response = await fetch('http://localhost:3000/BloodBag/RemoveBloodBag/' + props.BloodBag._id, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
                //Authorization: `BEARER ${authContext.token}`
              },
            });
            const data = await response.json();
            
            if (!response.ok) {
              throw Error(data.error);
            }
      
            console.log(data);
          } catch (err) {
            console.log(err.message);
          }
    };
    return (
        <tr>
        <BodyTdDesign>{props.BloodBag._id}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.bloodType}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HBV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HCV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HIV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HTLV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.syphilis)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.WNV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.TrypanosomaCruzi)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.CMV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.Babesia)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.BacterialContamination)}</BodyTdDesign>

        <BodyTdDesign className='flex'>
          <button className='bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded' onClick={AcceptHandler}>Accept</button>
          {"     "} {"     "}
          <button className='bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded' onClick={RejectHandler}>Reject</button>
        </BodyTdDesign>
      </tr>
    );
};
export default ViewPendingBags;