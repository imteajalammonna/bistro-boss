

const PageCover = ({title,paragraph}) => {
    return (
        <div className="hero min-h-[75vh] cover-img">
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="bg-opacity-45 py-24 px-56 bg-black">
                    <h1 className="mb-5 text-5xl font-bold cormorant-garamond-semibold uppercase">{title}</h1>
                    <p className="mb-5 cormorant-garamond-semibold">{paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default PageCover;