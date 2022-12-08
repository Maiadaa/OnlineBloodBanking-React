import MenuOption from "../BloodInventory/MenuOption";

const MenuList = (props) =>
{
    return (
        <div className=" justify-center ">
            {props.options.map((o)=> (
                <MenuOption option  = {o} key = {o.optionID}/>
                )
            )}
        </div>

    );
};
export default MenuList;