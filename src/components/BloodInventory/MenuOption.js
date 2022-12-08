import Card from '../../UI/BloodBagsUI/MenuCard/Card';
import CardHeader from '../../UI/BloodBagsUI/MenuCard/CardHeader';
import CardBody from '../../UI/BloodBagsUI/MenuCard/CardBody';
import CardActions from '../../UI/BloodBagsUI/MenuCard/CardActions';

const MenuOption = (props) =>
{
    console.log(props);
    return(
        <Card> 
            <CardHeader>
                <img className="rounded-t-lg"
                    src={props.option.ImgURL}
                    alt={props.option.optionName}
                    />
            </CardHeader>
            <CardBody>
                <h5 className="text-gray-900 text-xl font-medium mb-2 ">{props.option.optionName}</h5>
                <p className="text-gray-700 text-base mb-4">{props.option.optionDesc}</p>
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