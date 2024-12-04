import { BsPersonCircle } from "react-icons/bs";

const TestimonialHeader = ({ testimonial }) => {

    const { image, name, title } = testimonial;

    const renderProfilePicture = () => {
        return (<>
            {image ? (
                <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
            ) : (
                <BsPersonCircle className='w-16 h-16 rounded-full mr-4 bg-gray-200 text-gray-400' />
            )}
        </>);
    };

    return (
        <div className="flex items-center mb-4">
            {renderProfilePicture()}
            <div>
                <h3 className="text-lg font-semibold">
                    {name}
                </h3>
                <p className="text-sm text-gray-600">{title}</p>
            </div>
        </div>
    );
};

export default TestimonialHeader;