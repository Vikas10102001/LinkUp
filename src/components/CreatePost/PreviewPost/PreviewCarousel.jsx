import { Carousel, Image } from "antd";
const PreviewCarousel = ({ fileList,setVisible }) => {
  const onChange = (currentSlide) => {
    console.log(fileList)
  };
  return (
    <Carousel afterChange={onChange} style={{color:'black'}}>
      {fileList?.map((el) => (
        <Image
          preview={{ visible: false }}
          width={250}
          height={200}
          src={el.thumbUrl}
          onClick={() => setVisible(true)}
          
        />
      ))}
    </Carousel>
  );
};
export default PreviewCarousel;
