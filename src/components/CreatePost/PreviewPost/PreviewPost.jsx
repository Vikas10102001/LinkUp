import { Image } from "antd";
import React, { useState } from "react";
import PreviewCarousel from "./PreviewCarousel";
import Title from "antd/es/typography/Title";

export default function PreviewPost({ postData, setPostData }) {
  let imagesUrl = [];
  let thumbsUrl = [];
  postData.fileList?.forEach((el) => {
    imagesUrl.push({ uid: el.uid, url: URL.createObjectURL(el.originFileObj) });
    thumbsUrl.push({ uid: el.uid, url: el.thumbUrl });
  });


  const [visible, setVisible] = useState(false);

  return (
    <>
      <PreviewCarousel fileList={postData.fileList} setVisible={setVisible} />
      <div style={{ display: "none",userSelect:'none' }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {imagesUrl.map((images) => (
            <Image id={images.uid} src={images.url} />
          ))}
        </Image.PreviewGroup>
      </div>
      <Title
        level={5}
        style={{ margin: 0,fontWeight:400}}
      >{`${postData.caption?'Caption : '+postData.caption:""}`}</Title>
    </>
  );
}
