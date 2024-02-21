

const SectionTitle = ({ title, heading, color }) => {

    if (color) {
        color
    } else {
        color = 'black'
    }

    return (
        <div className="flex items-center justify-center flex-col py-8">
            <h4 className="text-center text-sm md:text-xl text-yellow-400 pb-5">--- {heading} ---</h4>
            <h2 className={`text-center text-2xl md:text-4xl text-${color} py-5 border-t-4 border-b-4 w-4/12 `}>{title}</h2>
        </div>
    );
};

export default SectionTitle;