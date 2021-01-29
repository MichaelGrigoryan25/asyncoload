import axios from "axios";
import React from "react";
import { useEffect, useState, Fragment } from "react";

const Media = ({ src, ...rest }) => {
  const [type, setType] = useState("");
  const [file, setFile] = useState({});

  useEffect(() => {
    (async () => {
      if (src.length === 0) {
        throw new Error("No URL provided");
      } else {
        const { data } = await axios.get(src, {
          responseType: "blob",
        });
        setFile(
          URL.createObjectURL(
            new File([data], Date(), {
              type: data.type,
            })
          )
        );
        setType(data.type);

        return data;
      }
    })();
  }, [src]);

  return (
    <Fragment>
      {type.startsWith("image") ? (
        <img src={file} {...rest} alt={src} />
      ) : type.startsWith("video") ? (
        <video src={file} {...rest} alt={src}></video>
      ) : type.startsWith("audio") ? (
        <audio src={file} {...rest}></audio>
      ) : (
        <a href={src} target="_blank" rel="noreferrer" {...rest}>
          See attached file
        </a>
      )}
    </Fragment>
  );
};

export default Media;
