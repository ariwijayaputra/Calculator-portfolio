export default function OperationButton(props) {
    return (
        <div className="p-2">
            <button className="group bg-slate-200 w-full text-pink-500 p-4 min-w-max rounded-2xl text-xl shadow-md-neu active:shadow-md-i-neu hover:shadow-none hover:text-pink-600">
                <p className=" font-bold text-3xl group-hover:text-4xl group-hover:leading-9 group-hover:transition-all">{props.label}</p>
            </button>
        </div>
    );
}