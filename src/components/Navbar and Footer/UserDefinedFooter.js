const UserDefinedFooter = () =>{
return(
  <footer className="bg-gray-100 text-center lg:text-left w-full ">
    <div className="container p-6 text-gray-800">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="mb-6 md:mb-0">
          <h5 className="font-medium mb-2 uppercase">Our Mission</h5>
  
          <p className="mb-4">
            Our mission is to provide a complete system to control and maintain Blood Banking operations within the subscribed hospitals.
            The main objective from developing this system is to ease the process of monitoring Blood Banking operations for doctors, managers and patients
          </p>
        </div>
  
        <div className="mb-6 md:mb-0">
          <h5 className="font-medium mb-2 uppercase">Our Vision</h5>
  
          <p className="mb-4">
            Our vision is to aim for hospitals around egypt to ease processes within the hospital's organization. Targeting hospitals that are
            willing to advance their tehcnologies by embedding a system that helps the users within the organization.
          </p>
        </div>
      </div>
    </div>
  
    <div className="text-center text-gray-700 p-4">
      © 2021 Copyright:   
      <a className="text-gray-800" href="https://tailwind-elements.com/">  BloodERA</a>
    </div>
  </footer>
);
};
export default UserDefinedFooter;