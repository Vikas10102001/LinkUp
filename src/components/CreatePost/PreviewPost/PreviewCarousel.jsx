import { Carousel, Image } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const PreviewCarousel = ({ fileList,setVisible }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} style={{color:'black'}}>
      {fileList.map((el) => (
        <Image
          preview={{ visible: false }}
          width={200}
          src={el.thumbUrl}
          onClick={() => setVisible(true)}
        />
      ))}
    </Carousel>
  );
};
export default PreviewCarousel;
