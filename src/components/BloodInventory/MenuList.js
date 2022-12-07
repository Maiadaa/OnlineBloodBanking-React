import MenuOption from "../BloodInventory/MenuOption";

const MenuList = (props) =>
{
    return (
        <div className=" justify-center">
             <MenuOption></MenuOption>
            {props.Option.map((p)=> (
                <div></div>
                )
            )}

        </div>

    );
};
export default MenuList;