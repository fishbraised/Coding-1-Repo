import { FaRegHeart } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { LuQuote } from "react-icons/lu";
import { IoSparklesOutline } from "react-icons/io5";
import { MdOutlinePalette } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

import { useState } from "react";

import "./index.css";

const FriendshipFrameStudio = () => {
  const [quote, setQuote] = useState("");
  const [frameStyle, setFrameStyle] = useState("sunset_bliss");
  const [fontSize, setFontSize] = useState("");
  const [fontStyle, setFontStyle] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const updateQuote = (event) => {
    event.currentTarget.value.length <= 150 &&
      setQuote(event.currentTarget.value);
  };

  const updateFrameStyle = (event) => {
    setFrameStyle(event.currentTarget.value);
  };

  const updateFontSize = (event) => {
    setFontSize(event.currentTarget.value);
  };

  const updateFontStyle = (event) => {
    setFontStyle(event.currentTarget.value);
  };

  const finalFrameStyle = () => {
    switch (frameStyle) {
      case "sunset_bliss":
        return "from-[var(--accent--1-1)] to-[var(--accent--1-2)]";
      case "ocean_waves":
        return "from-[var(--accent--2-1)] to-[var(--accent--2-2)]";
      case "cherry_blossom":
        return "from-[var(--accent--3-1)] to-[var(--accent--3-2)]";
      case "aurora_magic":
        return "from-[var(--accent--4-1)] to-[var(--accent--4-2)]";
      default:
        return;
    }
  };

  const finalFontSize = () => {
    switch (fontSize) {
      case "small":
        return "text-xs";
      case "medium":
        return "text-base";
      case "large":
        return "text-lg";
      default:
        return;
    }
  };

  const finalFontStyle = () => {
    switch (fontStyle) {
      case "normal":
        return "font-normal";
      case "bold":
        return "font-bold";
      case "cursive":
        return "font-cursive";
      default:
        return;
    }
  };

  // imageUpload.addEventListener("change", (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       uploadedImageURL = e.target.result;
  //       fileNameDisplay.textContent = file.name;

  //       //FILL THE BELOW BLANK WITH THE <DIV> NAME CREATED FOR PHOTO FRAME
  //       ___________.style.backgroundImage = `url(${uploadedImageURL})`;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // });

  const uploadImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPhotoUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-14 py-4 bg-gradient-to-r from-[var(--background-1)] to-[var(--background-2)]">
      <div className="flex items-center space-x-2 mb-2">
        <FaRegHeart className="mt-1.5 text-[var(--accent--3-1)] text-3xl" />
        <h1 className="text-transparent text-3xl font-bold bg-gradient-to-r from-[var(--accent--3-2)] to-[var(--accent--2-1)] bg-clip-text">
          Friendship Frame Studio
        </h1>
        <FaRegHeart className="mt-1.5 text-[var(--accent--3-1)] text-3xl" />
      </div>
      <p className="mb-6 text-[var(--monochrome-3)] text-base font-semibold">
        Create stunning friendship memories with elegant photo frames
      </p>

      <div className="flex w-full space-x-8">
        <section className="w-1/2 h-screen overflow-y-auto">
          <div className="rounded-xl p-5 mb-4 bg-[var(--monochrome-1)]">
            <div className="flex items-center mb-3">
              <IoCameraOutline className="mr-1.5 text-[var(--accent--2-1)] text-2xl" />
              <h2 className="text-[var(--monochrome-4)] text-lg font-bold">
                Upload Photo
              </h2>
            </div>

            <div className="relative flex flex-col justify-center items-center w-full aspect-4/1 border-2 border-dashed border-[var(--accent--2-1)] rounded-xl bg-[var(--background-1)] ">
              <FiUpload className="mb-2 text-[var(--monochrome-2)] text-4xl" />
              <p className="mb-1 text-[var(--monochrome-3)] text-base font-semibold">
                Drag & drop your photo or click to browse
              </p>
              <p className="text-[var(--monochrome-2)] text-xs">
                JPG, PNG, GIF up to 10MB
              </p>

              <input
                className="absolute inset-0 z-1000 opacity-0 cursor-pointer"
                id="imageUpload"
                type="file"
                onChange={uploadImage}
              />
            </div>
          </div>

          <div className="rounded-xl p-5 mb-4 bg-[var(--monochrome-1)]">
            <div className="flex items-center space-x-2 mb-3">
              <LuQuote className="mr-1.5 text-[var(--accent--2-1)] text-2xl" />
              <h2 className="text-[var(--monochrome-4)] text-lg font-bold">
                Add Quote
              </h2>
            </div>

            <textarea
              className="resize-none w-full aspect-6/1 border-1 border-[var(--monochrome-2)] rounded-xl p-3 mb-1.5 text-base font-semibold"
              placeholder="Enter a heartfelt code about friendship..."
              onChange={updateQuote}
              value={quote}
            ></textarea>
            <p className="text-end text-[var(--monochrome-2)] text-xs">
              {quote.length}/150 characters
            </p>
          </div>

          <div className="rounded-xl p-5 mb-4 bg-[var(--monochrome-1)]">
            <div className="flex items-center space-x-2 mb-3">
              <IoSparklesOutline className="mr-1.5 text-[var(--accent--2-1)] text-2xl" />
              <h2 className="text-[var(--monochrome-4)] text-lg font-bold">
                Frame Style
              </h2>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-xl p-3 cursor-pointer"
                onClick={updateFrameStyle}
                value="sunset_bliss"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-xl">🌅</p>
                <p className="text-[var(--monochrome-4)] text-sm font-bold">
                  Sunset Bliss
                </p>
              </button>
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-xl p-3 cursor-pointer"
                onClick={updateFrameStyle}
                value="ocean_waves"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-xl">🌊</p>
                <p className="text-[var(--monochrome-4)] text-sm font-bold">
                  Ocean Waves
                </p>
              </button>
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-xl p-3 cursor-pointer"
                onClick={updateFrameStyle}
                value="cherry_blossom"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-xl">🌸</p>
                <p className="text-[var(--monochrome-4)] text-sm font-bold">
                  Cherry Blossom
                </p>
              </button>
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-xl p-3 cursor-pointer"
                onClick={updateFrameStyle}
                value="aurora_magic"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-xl">✨</p>
                <p className="text-[var(--monochrome-4)] text-sm font-bold">
                  Aurora Magic
                </p>
              </button>
            </div>
          </div>

          <div className="rounded-xl p-5 mb-4 bg-[var(--monochrome-1)]">
            <div className="flex items-center space-x-2 mb-3">
              <MdOutlinePalette className="mr-1.5 text-[var(--accent--2-1)] text-2xl" />
              <h2 className="text-[var(--monochrome-4)] text-lg font-bold">
                Font Size
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-lg p-2 cursor-pointer"
                onClick={updateFontSize}
                value="small"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-xs">Small</p>
                <p className="text-[var(--monochrome-2)] text-xs">Aa</p>
              </button>
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-lg p-2 cursor-pointer"
                onClick={updateFontSize}
                value="medium"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-sm">
                  Medium
                </p>
                <p className="text-[var(--monochrome-2)] text-sm">Aa</p>
              </button>
              <button
                className="border-1 border-[var(--monochrome-2)] rounded-lg p-2 cursor-pointer"
                onClick={updateFontSize}
                value="large"
              >
                <p className="mb-1 text-[var(--monochrome-4)] text-base">
                  Large
                </p>
                <p className="text-[var(--monochrome-2)] text-base">Aa</p>
              </button>
            </div>
          </div>

          <div className="rounded-xl p-5 mb-4 bg-[var(--monochrome-1)]">
            <div className="flex items-center space-x-2 mb-3">
              <MdOutlinePalette className="mr-1.5 text-[var(--accent--2-1)] text-2xl" />
              <h2 className="text-[var(--monochrome-4)] text-lg font-bold">
                Font Style
              </h2>
            </div>

            <div className="grid grid-rows-3">
              <button
                className="mb-1.5 border-1 border-[var(--monochrome-2)] rounded-lg px-3 pt-1.5 pb-2 text-start font-normal cursor-pointer"
                onClick={updateFontStyle}
                value="normal"
              >
                Normal - "Friendship is wonderful"
              </button>
              <button
                className="mb-1.5 border-1 border-[var(--monochrome-2)] rounded-lg px-3 pt-1.5 pb-2 text-start font-bold cursor-pointer"
                onClick={updateFontStyle}
                value="bold"
              >
                Bold - "Friendship is wonderful"
              </button>
              <button
                className="mb-1.5 border-1 border-[var(--monochrome-2)] rounded-lg px-3 pt-1.5 pb-2 text-start font-cursive cursor-pointer"
                onClick={updateFontStyle}
                value="cursive"
              >
                Cursive - "Friendship is wonderful"
              </button>
            </div>
          </div>
        </section>

        <section className="w-1/2">
          <div className="flex flex-col rounded-xl p-5 pb-8 bg-[var(--monochrome-1)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[var(--monochrome-4)] text-lg font-bold">
                Live Preview
              </h2>

              <button className="flex items-center px-3 pt-1.5 pb-2 text-[var(--monochrome-1)] text-sm font-semibold bg-gradient-to-r from-[var(--accent--2-1)] to-[var(--accent--3-2)] rounded-xl cursor-pointer">
                <MdOutlineFileDownload className="mr-1 text-lg" />
                Download
              </button>
            </div>

            <div
              className={`self-center w-2/3 rounded-xl p-1 bg-gradient-to-r ${finalFrameStyle()}`}
              id="photoFrame"
            >
              <div className="p-4 rounded-lg bg-[var(--monochrome-1)]/85">
                {photoUrl ? (
                  <img
                    className="rounded-lg mb-4 aspect-1/1 object-cover object-top"
                    src={photoUrl}
                    alt="friend img"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center p-4 rounded-lg mb-4 bg-[var(--monochrome-1)]">
                    <IoCameraOutline className="mb-1 text-[var(--monochrome-2)] text-4xl" />
                    <p className="text-[var(--monochrome-2)] text-base font-semibold">
                      Your photo here
                    </p>
                  </div>
                )}

                <p
                  className={`wrap-break-word text-center text-[var(--monochrome-4)] ${finalFontSize()} ${finalFontStyle()}`}
                >
                  "{quote}"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FriendshipFrameStudio;
