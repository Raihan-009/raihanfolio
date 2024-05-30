
const AwardCard = ({award}) => {
    const {image, platform, title, date} = award;
    return (
        <section className="flex gap-10">
            <img src={image} alt="award"  className="w-full aspect-auto cover"/>
            <div>
                <h5>{title}</h5>
                <p>{platform}</p>
                <p>Issued on {date}</p>
            </div>
        </section>
    );
};

export default AwardCard;