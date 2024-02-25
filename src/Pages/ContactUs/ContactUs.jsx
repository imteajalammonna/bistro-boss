import PageCover from "../../Shared/PageCover";
import SectionTitle from "../../Shared/SectionTitle";
import coverImg from "../../assets/contact/banner.jpg"


const ContactUs = () => {
    return (
        <div>
            <PageCover coverImg={coverImg} title={'Contact Us'} paragraph={"Reach out to us for any questions or assistance. We're here to help you. Contact us now!"}></PageCover>
            <SectionTitle title={'Our Location'} heading={'Visit Us'}> </SectionTitle>
        </div>
    );
};

export default ContactUs;