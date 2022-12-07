import UserHeader from '../UI/BloodBagsUI/UserHeader';
import Card from '../UI/BloodBagsUI/CardBloodBankMenu/Card';
import CardHeader from '../UI/BloodBagsUI/CardBloodBankMenu/CardHeader';
import CardBody from '../UI/BloodBagsUI/CardBloodBankMenu/CardBody';
import CardActions from '../UI/BloodBagsUI/CardBloodBankMenu/CardActions';

const MenuOption = (props) =>
{
    return(
        <Card>
            <UserHeader>
                <h1 className="text-gray-900 text-xl font-medium mb-2"> Welcome {props.UserInfo.UserName} </h1>
                <h3 className="text-gray-900 text-xl font-medium mb-2"> You are operting for the hospital with the ID of {props.UserInfo.HospitalID}</h3>
            </UserHeader>
            <CardHeader>
                <img className="rounded-t-lg"
                    src={props.Option.ImgURL}
                    alt={props.Option.OptionName}
                    />
            </CardHeader>
            <CardBody>
                <h5 className="text-gray-900 text-xl font-medium mb-2">{props.Option.OptionName}</h5>
                <p className="text-gray-700 text-base mb-4">{props.Option.OptionDesc}</p>
            </CardBody>
            <CardActions>
                <button type = "button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                 uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit Page</button>
            </CardActions>
        </Card>
    );
};
export default MenuOption;