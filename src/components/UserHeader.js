const UserHeader = (props) =>
{
    return( 
         <UserHeader>
        <h1 className="text-gray-900 text-xl font-medium mb-2"> Welcome {props.UserInfo.UserName} </h1>
        <h3 className="text-gray-900 text-xl font-medium mb-2"> You are operting for the hospital with the ID of {props.UserInfo.HospitalID}</h3>
        </UserHeader> 
    );

};

export default UserHeader;