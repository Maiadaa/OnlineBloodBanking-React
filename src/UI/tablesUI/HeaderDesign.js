const HeaderDesign = (props) => {
    return (
        <thead className="bg-gray-800">
            <tr>
                {props.children}
            </tr>
        </thead>
    );
}

export default HeaderDesign;