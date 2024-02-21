import SectionTitle from "../../Shared/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";


const Featured = () => {
    return (
        <div className="my-14 featured-item">
            <div className=" bg-black bg-opacity-45 ">
                <SectionTitle className="!text-white" color={'white'} heading={'Check it out'} title={'FROM OUR MENU'}></SectionTitle>
                <div className="flex items-center justify-center my-10 pb-36">
                    <div className="ml-36">
                        <img className="w-[800px] rounded-xl" src={featuredImg} alt="" />
                    </div>
                    <div className="ml-20 text-white space-y-5">
                        <h5 className="text-2xl">March 20, 2023</h5>
                        <h4 className="uppercase text-3xl">WHERE CAN I GET SOME?</h4>
                        <p className="w-8/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="button !border-white ">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;