export default function ButtonNumber(props) {
    return (
        <div className="p-2">
            <button className="group bg-slate-200 w-full text-slate-600 p-4 min-w-max rounded-2xl text-xl shadow-md-neu active:shadow-md-i-neu hover:text-blue-800 hover:shadow-none">
                <p className=" font-bold text-2xl group-hover:text-3xl group-hover:leading-8 group-hover:transition-all">{props.label}</p>
            </button>
        </div>
    );
}