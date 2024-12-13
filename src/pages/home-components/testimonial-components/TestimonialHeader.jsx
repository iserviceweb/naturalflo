import { BsPersonCircle } from "react-icons/bs";

const TestimonialHeader = ({ testimonial }) => {

    const { image, name, title } = testimonial;

    const renderProfilePicture = () => {
        return (<>
            {image ? (
                <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
            ) : (
                <BsPersonCircle className='w-16 h-16 rounded-full mr-4 nf text-olive' />
            )}
        </>);
    };

    return (
        <div className="flex items-center mb-4">
            {renderProfilePicture()}
            <div>
                <h3 className="text-lg font-semibold nf text-olive">
                    {name}
                </h3>
                <p className="text-sm nf text-taupe">{title}</p>
            </div>
        </div>
    );
};

export default TestimonialHeader;