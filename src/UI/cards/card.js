const Card = (props) => {
    return (
        <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-200 w-[400px] overflow-hidden float-left mr-4">
            {props.children}
        </div>
    );
}

export default Card;