

const SectionCover = ({ coverImg }) => {
    return (
        <div className="my-20">
            <div className="relative ">
                <img src={coverImg} alt="" />
                <div className="absolute bg-white p-2 md:p-14 text-center mb-5 top-3 md:top-32 md:w-8/12 md:right-64 mx-10 md:mx-0">
                    <h1 className="text-xl md:text-3xl mb-3 cormorant-garamond-semibold">BISTRO BOSS</h1>
                    <p className="text-sm md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className="hidden md:flex">Amet quo repellat quam ab magni pariatur in facilis fugit maxime? Quibusdam consectetur sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis.</span></p>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;