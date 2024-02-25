import coverImg from "../assets/home/chef-service.jpg"
const MenuCover = ({title, paragraph}) => {

    
    return (
        <div style={{backgroundImage: `url(${coverImg})`}} className="hero min-h-[70vh]  my-14">
        <div className=""></div>
        <div className="hero-content text-white text-center">
            <div className="bg-opacity-45 py-24 px-56 bg-black">
                <h1 className="mb-5 text-5xl font-bold cormorant-garamond-semibold uppercase">{title}</h1>
                <p className="mb-5 cormorant-garamond-semibold">{paragraph}</p>
            </div>
        </div>
    </div>
    );
};

export default MenuCover;